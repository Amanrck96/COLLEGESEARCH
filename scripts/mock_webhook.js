import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '../server/.env') });

const secret = process.env.WEBSCRAPER_NOTIFICATION_SECRET || '4ylYjxhoh4PgzsEGtjnizcH1RayiJpd8WW8aNyClGmhOGZeDc9yTJd9Tn6Ds';
const PORT = process.env.PORT || 5000;
const webhookUrl = `http://localhost:${PORT}/api/webhooks/webscraper`;

async function triggerMockWebhook() {
  console.log('--------------------------------------------------');
  console.log('🚀 STANDALONE MOCK WEBHOOK TRIGGER TEST SCRIPT');
  console.log(`Targeting endpoint: ${webhookUrl}`);
  console.log(`Using shared secret: ${secret}`);
  console.log('--------------------------------------------------');

  // Payload parameter data
  const bodyData = {
    scrapingjob_id: '9999',
    status: 'finished',
    sitemap_id: '12',
    sitemap_name: 'test-shiksha-sitemap'
  };

  // Reconstruct exact payload string for signing
  const payload = `scrapingjob_id=${bodyData.scrapingjob_id}&status=${bodyData.status}&sitemap_id=${bodyData.sitemap_id}&sitemap_name=${bodyData.sitemap_name}`;
  
  // Compute SHA256 HMAC
  const hmac = crypto.createHmac('sha256', secret);
  const signature = hmac.update(payload).digest('hex');

  console.log(`[Test] Generated Payload: "${payload}"`);
  console.log(`[Test] Computed Signature: "${signature}"`);

  // Convert bodyData to x-www-form-urlencoded format
  const formBody = new URLSearchParams();
  for (const [key, value] of Object.entries(bodyData)) {
    formBody.append(key, value);
  }

  try {
    console.log('[Test] Sending POST request...');
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Signature': signature
      },
      body: formBody
    });

    console.log(`[Test] Response Status: ${response.status} ${response.statusText}`);
    const responseBody = await response.json();
    console.log('[Test] Response Body:', responseBody);

    if (response.ok) {
      console.log('--------------------------------------------------');
      console.log('✅ MOCK WEBHOOK TRIGGER SUCCESSFUL!');
      console.log('   The webhook handler acknowledged receipt.');
      console.log('   Check the Express server logs to confirm database import');
      console.log('   and Excel sheet auto-generation!');
      console.log('--------------------------------------------------');
    } else {
      console.log('❌ MOCK WEBHOOK TRIGGER FAILED');
    }
  } catch (err) {
    console.error('❌ Network Error triggering webhook:', err.message);
    console.log('Ensure that your Express server is running locally on port 5000!');
    console.log('You can start it with: npm run dev (in the server directory)');
  }
}

triggerMockWebhook();
