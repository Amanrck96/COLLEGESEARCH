import fs from 'fs';

async function main() {
  console.log('--- STARTING NETLIFY INSPECTION (FETCH API) ---');
  try {
    const res = await fetch('https://collegesearchs.netlify.app/siteData.json', { redirect: 'follow' });
    console.log('STATUS:', res.status);
    console.log('CONTENT_TYPE:', res.headers.get('content-type'));
    const text = await res.text();
    console.log('BODY_LENGTH:', text.length);

    if (text.startsWith('{')) {
      const data = JSON.parse(text);
      console.log('TOTAL_COLLEGES_ON_NETLIFY:', data.colleges ? data.colleges.length : 0);
      if (data.colleges && data.colleges.length > 0) {
        console.log('SAMPLE_0:', data.colleges[0].name, '| State:', data.colleges[0].state, '| Fees:', data.colleges[0].fees);
        console.log('SAMPLE_1:', data.colleges[1].name, '| State:', data.colleges[1].state, '| Fees:', data.colleges[1].fees);
        console.log('SAMPLE_LAST:', data.colleges[data.colleges.length - 1].name);
      }
    } else {
      console.log('BODY_PREVIEW (HTML / SPA Redirect):', text.substring(0, 300));
    }
  } catch (err) {
    console.error('FETCH ERROR:', err.message);
  }
}

main();
