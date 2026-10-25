import * as cheerio from 'cheerio';

async function getPhoto() {
  const res = await fetch('https://www.collegedekho.com/colleges/dmssvh-college-of-engineering', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  const $ = cheerio.load(html);

  const og = $('meta[property="og:image"]').attr('content');
  console.log('OG Image:', og);

  const images = [];
  $('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    if (src && (src.includes('crawled_images') || src.includes('institute') || src.includes('campus'))) {
      images.push(src);
    }
  });

  console.log('Found Campus Images:', images);
}

getPhoto().catch(console.error);
