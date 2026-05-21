import google from 'googlethis';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Query parameter q is required' });
    }
    try {
      const searchStr = `${q} campus building exterior facade`;
      const images = await google.image(searchStr, { safe: false });
      return res.status(200).json(images);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
