import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import google from 'googlethis'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-proxy',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const urlObj = new URL(req.url, 'http://localhost');
          
          if (urlObj.pathname === '/api/search-image') {
            const query = urlObj.searchParams.get('q');
            if (!query) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ error: 'Query parameter q is required' }));
            }
            try {
              const searchStr = `${query} campus building exterior facade`;
              const images = await google.image(searchStr, { safe: false });
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify(images));
            } catch (err) {
              res.statusCode = 500;
              return res.end(JSON.stringify({ error: err.message }));
            }
          }
          
          if (urlObj.pathname === '/api/save-image' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const { id, img } = JSON.parse(body);
                if (!id || !img) {
                  res.statusCode = 400;
                  return res.end(JSON.stringify({ error: 'id and img are required' }));
                }
                const dataPath = path.resolve('public/siteData.json');
                const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
                const college = data.colleges.find(c => String(c.id) === String(id));
                if (college) {
                  college.img = img;
                  if (!college.gallery) college.gallery = [];
                  college.gallery[0] = img;
                  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ success: true }));
                } else {
                  res.statusCode = 404;
                  return res.end(JSON.stringify({ error: 'College not found' }));
                }
              } catch (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }
          
          next();
        });
      }
    }
  ],
  server: {
    watch: {
      ignored: ['**/public/siteData.json']
    }
  }
})

