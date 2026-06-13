import { PrismaClient } from '@prisma/client';
import { exportToExcel } from './export_db_excel.js';

const prisma = new PrismaClient();

async function runLocalTest() {
  console.log('--------------------------------------------------');
  console.log('🚀 RUNNING LOCAL OFFLINE DATA IMPORT & EXPORT TEST');
  console.log('--------------------------------------------------');

  const mockDataText = `{"id": 9990, "college_name": "Test University of Engineering", "short_name": "TUE", "location": "Dehradun", "state": "Uttarakhand", "rating": 4.8, "reviews_count": 120, "type": "Private", "about": "A premier mock university for testing the webhook importer.", "ranking": 15, "average_package": "7.5 LPA", "highest_package": "24 LPA", "placements": "92%", "website": "https://www.testue.edu.in", "brochureLink": "http://www.testue.edu.in/brochure.pdf", "highlights": "NAAC A++ Accredited, Top Placements", "facilities": "Hostel, Gym, Smart Classrooms, Library", "admissionProcess": "Based on JEE Main score / direct admission", "topRecruiters": "Google, Microsoft, Infosys", "courses": [{"title": "B.Tech Computer Science", "type": "Full Time", "division": "Degree", "duration": "4 Years", "fees": "₹2.2 Lakhs/Year", "intake": "180", "eligibility": "10+2 with 60%"}, {"title": "M.Tech Software Engineering", "type": "Full Time", "division": "Degree", "duration": "2 Years", "fees": "₹1.5 Lakhs/Year", "intake": "30", "eligibility": "B.Tech/B.E."}]}\n{"id": 9991, "college_name": "National Institute of Management Mock", "short_name": "NIMM", "location": "Ahmedabad", "state": "Gujarat", "rating": 4.9, "reviews_count": 340, "type": "Government", "about": "Top level mock management institute.", "ranking": 5, "average_package": "19.5 LPA", "highest_package": "45 LPA", "placements": "100%", "website": "https://www.nimmock.edu.in", "brochureLink": "http://www.nimmock.edu.in/admission_brochure.pdf", "highlights": "Global Immersion, Excellent Placement", "facilities": "AC Rooms, Library, Swimming Pool, Labs", "admissionProcess": "Based on CAT scores and personal interview", "topRecruiters": "BCG, McKinsey, Goldman Sachs", "courses": [{"title": "MBA Finance", "type": "Full Time", "division": "Degree", "duration": "2 Years", "fees": "₹8 Lakhs/Year", "intake": "120", "eligibility": "Graduation with 50%"}, {"title": "Executive MBA", "type": "Part Time", "division": "Degree", "duration": "1 Year", "fees": "₹12 Lakhs/Year", "intake": "45", "eligibility": "3+ years work exp"}]}`;

  try {
    const lines = mockDataText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const records = lines.map(line => JSON.parse(line));
    
    console.log(`[Test] Parsed ${records.length} mock records. Upserting into SQLite database via Prisma...`);

    for (const record of records) {
      const collegeName = record.college_name;
      const location = record.location;
      const state = record.state;
      const address = record.address || location;
      const phone = record.phone || '0123-456789';
      const email = record.email || null;
      const website = record.website || 'http://www.college.edu';
      const rating = record.rating;
      const reviewsCount = record.reviews_count;
      const type = record.type;
      const about = record.about;
      const ranking = record.ranking;
      const img = record.img || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400';
      const gallery = JSON.stringify([img]);
      const highestPackage = record.highest_package;
      const averagePackage = record.average_package;
      const placements = record.placements;
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeName + ' ' + location)}`;
      const exams = record.exams || 'Direct Admission';
      
      const brochureLink = record.brochureLink || '';
      const highlights = record.highlights || '';
      const facilities = record.facilities || '';
      const admissionProcess = record.admissionProcess || '';
      const topRecruiters = record.topRecruiters || '';

      console.log(`[Test] Processing: ${collegeName}`);

      const college = await prisma.college.upsert({
        where: { id: record.id },
        update: {
          shortName: record.short_name,
          location,
          state,
          address,
          phone,
          email,
          website,
          rating,
          reviewsCount,
          type,
          about,
          ranking,
          img,
          gallery,
          highestPackage,
          averagePackage,
          placements,
          exams,
          mapUrl,
          brochureLink,
          highlights,
          facilities,
          admissionProcess,
          topRecruiters
        },
        create: {
          id: record.id,
          name: collegeName,
          shortName: record.short_name,
          location,
          state,
          address,
          phone,
          email,
          website,
          rating,
          reviewsCount,
          type,
          about,
          ranking,
          img,
          gallery,
          highestPackage,
          averagePackage,
          placements,
          exams,
          mapUrl,
          brochureLink,
          highlights,
          facilities,
          admissionProcess,
          topRecruiters
        }
      });

      // Clear courses and recreate
      if (record.courses) {
        await prisma.course.deleteMany({ where: { collegeId: college.id } });
        await prisma.course.createMany({
          data: record.courses.map(c => ({
            collegeId: college.id,
            title: c.title,
            type: c.type,
            division: c.division,
            duration: c.duration,
            fees: c.fees,
            intake: c.intake || 'N/A',
            eligibility: c.eligibility
          }))
        });
      }
    }

    console.log('[Test] SQLite Import complete. Triggering Excel export...');
    await exportToExcel();
    
    console.log('--------------------------------------------------');
    console.log('✅ TEST COMPLETED SUCCESSFULLY!');
    console.log('   The test records were imported into the database');
    console.log('   and exported to the configured Excel file!');
    console.log('--------------------------------------------------');

  } catch (err) {
    console.error('❌ Test failed with error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

runLocalTest();
