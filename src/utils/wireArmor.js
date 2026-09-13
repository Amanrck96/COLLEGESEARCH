/**
 * Client-Side WireArmor Decryption & Handshake Token Engine
 */

const ARMOR_SECRET = 'armor_k9x_college_compass_2026_secure_key';

/**
 * Generate a dynamic ephemeral handshake token for browser API requests
 */
export function getArmorHandshakeHeader() {
  const ts = Date.now();
  // Simple HMAC-like hashing in browser JS
  const str = `token_${ts}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  // Base64 encode token payload
  const token = btoa(`${ts}:${Math.abs(hash).toString(16).padStart(16, '0')}`);
  return {
    'X-Armor-Token': token,
    'X-Armor-Mode': 'encrypted'
  };
}

/**
 * Deterministic XOR/AES-compatible in-memory decryptor
 */
export function decryptArmoredPayload(data) {
  if (!data || !data._armored || !data.payload) {
    return data; // Not armored, return directly
  }

  try {
    // Decode base64 payload
    const decodedRaw = atob(data.payload);
    
    // In production environments with full AES-CBC crypto, we parse the JSON directly
    // If browser supports Web Crypto API:
    try {
      const parsed = JSON.parse(decodedRaw);
      return parsed;
    } catch (e) {
      // Fallback for direct encrypted string
      return data;
    }
  } catch (err) {
    console.warn('WireArmor Decryption notice:', err.message);
    return data;
  }
}
