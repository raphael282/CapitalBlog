export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;
  if (!endpoint) return res.status(400).json({ error: 'Missing endpoint' });

  const apiKey = 'bApEOS7yJYJvpuA4Qg257I2Xxl244ljX';
  const query = new URLSearchParams({ ...params, apikey: apiKey }).toString();
  const url = `https://financialmodelingprep.com/api/v3/${endpoint}?${query}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=300');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
