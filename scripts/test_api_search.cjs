const fs = require('fs');

async function testApi() {
  try {
    const res = await fetch('http://localhost:5000/api/colleges?search=Patel%20Institute');
    const json = await res.json();
    console.log('API search "Patel Institute":', json.colleges ? json.colleges.length : (Array.isArray(json) ? json.length : 'error'));
    if (json.colleges && json.colleges[0]) {
      console.log('Sample item:', json.colleges[0].name, '->', json.colleges[0].image);
    }
  } catch(e) {
    console.log('API error:', e.message);
  }
}

testApi();
