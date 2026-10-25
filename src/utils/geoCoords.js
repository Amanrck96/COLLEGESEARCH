import indiaCoords from './indiaCoords.json';

// Default fallback for India
const DEFAULT_COORDS = { lat: 20.5937, lon: 78.9629, zoom: 6 };

// Manual aliases for common education hubs & regions
const ALIASES = {
  'delhi ncr': { lat: 28.6139, lon: 77.2090 },
  'new delhi': { lat: 28.6139, lon: 77.2090 },
  'south delhi': { lat: 28.5355, lon: 77.2410 },
  'north delhi': { lat: 28.7041, lon: 77.1025 },
  'west delhi': { lat: 28.6663, lon: 77.0688 },
  'east delhi': { lat: 28.6280, lon: 77.2950 },
  'south west delhi': { lat: 28.5823, lon: 77.0500 },
  'noida': { lat: 28.5355, lon: 77.3910 },
  'greater noida': { lat: 28.4744, lon: 77.5040 },
  'gurugram': { lat: 28.4595, lon: 77.0266 },
  'gurgaon': { lat: 28.4595, lon: 77.0266 },
  'ghaziabad': { lat: 28.6692, lon: 77.4538 },
  'bangalore urban': { lat: 12.9716, lon: 77.5946 },
  'bangalore rural': { lat: 13.2382, lon: 77.5684 },
  'bengaluru': { lat: 12.9716, lon: 77.5946 },
  'bangalore': { lat: 12.9716, lon: 77.5946 },
  'navi mumbai': { lat: 19.0330, lon: 73.0297 },
  'pune': { lat: 18.5204, lon: 73.8567 },
  'mumbai': { lat: 19.0760, lon: 72.8777 },
  'anantapuramu': { lat: 14.6819, lon: 77.6006 },
  'anantapur': { lat: 14.6819, lon: 77.6006 },
  'hindupur': { lat: 13.8290, lon: 77.4920 },
  'guntakal': { lat: 15.1667, lon: 77.3667 },
  'visakhapatnam': { lat: 17.6868, lon: 83.2185 },
  'vishakhapatnam': { lat: 17.6868, lon: 83.2185 },
  'vizag': { lat: 17.6868, lon: 83.2185 },
  'vijayawada': { lat: 16.5062, lon: 80.6480 },
  'guntur': { lat: 16.3067, lon: 80.4365 },
  'hyderabad': { lat: 17.3850, lon: 78.4867 },
  'secunderabad': { lat: 17.4399, lon: 78.4983 },
  'chennai': { lat: 13.0827, lon: 80.2707 },
  'kolkata': { lat: 22.5726, lon: 88.3639 },
  'new town': { lat: 22.5850, lon: 88.4680 },
  'salt lake': { lat: 22.5867, lon: 88.4178 },
  'howrah': { lat: 22.5958, lon: 88.2636 },
  'chandigarh': { lat: 30.7333, lon: 76.7794 },
  'jaipur': { lat: 26.9124, lon: 75.7873 },
  'ahmedabad': { lat: 23.0225, lon: 72.5714 },
  'coimbatore': { lat: 11.0168, lon: 76.9558 },
  'lucknow': { lat: 26.8467, lon: 80.9462 },
  'kanpur': { lat: 26.4499, lon: 80.3319 },
  'patna': { lat: 25.5941, lon: 85.1376 },
  'bhopal': { lat: 23.2599, lon: 77.4126 },
  'indore': { lat: 22.7196, lon: 75.8577 },
  'ranchi': { lat: 23.3441, lon: 85.3096 },
  'bhubaneswar': { lat: 20.2961, lon: 85.8245 },
  'guwahati': { lat: 26.1445, lon: 91.7362 },
  'dehradun': { lat: 30.3165, lon: 78.0322 }
};

function formatLookupResult(val, zoom = 14) {
  if (Array.isArray(val)) {
    return { lat: val[0], lon: val[1], zoom };
  }
  if (val && typeof val.lat === 'number') {
    return { lat: val.lat, lon: val.lon, zoom };
  }
  return null;
}

export function getCollegeCoordinates(college) {
  if (!college) return DEFAULT_COORDS;

  const loc = (college.location || '').toLowerCase().trim();
  const state = (college.state || '').toLowerCase().trim();
  const address = (college.address || '').toLowerCase().trim();

  // 1. Direct alias match
  if (ALIASES[loc]) return { ...ALIASES[loc], zoom: 14 };
  if (ALIASES[`${loc}, ${state}`]) return { ...ALIASES[`${loc}, ${state}`], zoom: 14 };

  // 2. Direct India coordinate dictionary match
  if (indiaCoords[loc]) return formatLookupResult(indiaCoords[loc], 14);
  if (indiaCoords[`${loc}, ${state}`]) return formatLookupResult(indiaCoords[`${loc}, ${state}`], 14);

  // 3. Check address words against aliases
  for (const [key, coords] of Object.entries(ALIASES)) {
    if (address.includes(key) || loc.includes(key)) {
      return { ...coords, zoom: 14 };
    }
  }

  // 4. Split city/district from comma/hyphen if formatted as "City, District"
  const cityParts = loc.split(/[,/-]/).map(p => p.trim());
  for (const part of cityParts) {
    if (ALIASES[part]) return { ...ALIASES[part], zoom: 14 };
    if (indiaCoords[part]) return formatLookupResult(indiaCoords[part], 14);
  }

  // 5. State fallback
  if (ALIASES[state]) return { ...ALIASES[state], zoom: 10 };
  if (indiaCoords[state]) return formatLookupResult(indiaCoords[state], 10);

  return DEFAULT_COORDS;
}
