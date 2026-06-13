import { PrismaClient } from '@prisma/client';
import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Resolve dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '../server/.env') });

const prisma = new PrismaClient();

export async function exportToExcel() {
  console.log('[Excel Export] Beginning export to Excel...');
  
  try {
    // 1. Fetch data from SQLite DB
    const colleges = await prisma.college.findMany({
      include: {
        courses: true
      }
    });

    if (colleges.length === 0) {
      console.log('[Excel Export] No colleges found in database. Skipping export.');
      return;
    }

    console.log(`[Excel Export] Found ${colleges.length} colleges. Structuring sheets...`);

    // 2. Build explicit column order
    const columnOrder = [
      'Name',
      'Address',
      'Location (District)',
      'Short Name',
      'State',
      // Courses 1 to 15
      ...[...Array(15).keys()].flatMap(i => {
        const k = i + 1;
        return [
          `Course Type ${k}`,
          `Division ${k}`,
          `Course Name ${k}`,
          `Intake ${k}`,
          `Fees Course Name ${k}`
        ];
      }),
      'about',
      'phone',
      'email',
      'brochureLink',
      'images',
      'highlights',
      'facilities',
      'admissionProcess',
      'website',
      'facebook',
      'instagram',
      'linkedin',
      'averagePackage',
      'highestPackage',
      'topRecruiters',
      'Map Url',
      'Ratings'
    ];

    // 3. Structure flat rows
    const flatRows = colleges.map(c => {
      const row = {
        'Name': c.name,
        'Address': c.address,
        'Location (District)': c.location,
        'Short Name': c.shortName,
        'State': c.state,
      };

      // Map courses 1 to 15
      for (let k = 1; k <= 15; k++) {
        const course = c.courses[k - 1] || {};
        row[`Course Type ${k}`] = course.type || '';
        row[`Division ${k}`] = course.division || '';
        row[`Course Name ${k}`] = course.title || '';
        row[`Intake ${k}`] = course.intake || '';
        row[`Fees Course Name ${k}`] = course.fees || '';
      }

      // Add remaining columns
      row['about'] = c.about || '';
      row['phone'] = c.phone || '';
      row['email'] = c.email || '';
      row['brochureLink'] = c.brochureLink || '';

      // Parse gallery string or use main image
      let imagesStr = '';
      if (c.gallery) {
        try {
          const galleryArr = JSON.parse(c.gallery);
          if (Array.isArray(galleryArr)) {
            imagesStr = galleryArr.join(', ');
          }
        } catch (e) {
          imagesStr = c.gallery || '';
        }
      }
      if (!imagesStr && c.img) {
        imagesStr = c.img;
      }
      row['images'] = imagesStr;

      row['highlights'] = c.highlights || '';
      row['facilities'] = c.facilities || '';
      row['admissionProcess'] = c.admissionProcess || '';
      row['website'] = c.website || '';
      row['facebook'] = c.facebook || '';
      row['instagram'] = c.instagram || '';
      row['linkedin'] = c.linkedin || '';
      row['averagePackage'] = c.averagePackage || '';
      row['highestPackage'] = c.highestPackage || '';
      row['topRecruiters'] = c.topRecruiters || '';
      row['Map Url'] = c.mapUrl || '';
      row['Ratings'] = c.rating || '';

      return row;
    });

    // 4. Create Workbook and Flat Sheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(flatRows, { header: columnOrder });

    // Auto-adjust column widths helper
    const keys = Object.keys(flatRows[0] || {});
    ws['!cols'] = keys.map(key => {
      let maxLen = key.toString().length;
      flatRows.forEach(row => {
        const val = row[key];
        if (val) {
          maxLen = Math.max(maxLen, val.toString().length);
        }
      });
      return { wch: Math.min(maxLen + 2, 50) };
    });

    xlsx.utils.book_append_sheet(wb, ws, 'Colleges Data');

    // 7. Determine Output Path
    let outputPath = process.env.EXCEL_OUTPUT_PATH;
    if (!outputPath) {
      outputPath = path.join(__dirname, '../College_Data_Export.xlsx');
    }

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    xlsx.writeFile(wb, outputPath);
    console.log(`[Excel Export] Successfully generated Excel sheet at: ${outputPath}`);

  } catch (err) {
    console.error('[Excel Export Error] Generation failed:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

// Run standalone if script executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  exportToExcel();
}
