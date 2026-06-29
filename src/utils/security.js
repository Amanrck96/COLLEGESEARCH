/**
 * Security & Input Sanitization Utilities
 */

// 1. Simple, safe text/HTML sanitizer to prevent XSS (blocks scripts, onload attributes, javascript: URIs)
export const sanitizeText = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '') // strip <script> tags
    .replace(/on\w+="[^"]*"/gi, '')                     // strip inline event handlers
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:[^\s"']*/gi, '')               // strip javascript: URIs
    .replace(/<\/?[^>]+(>|$)/g, "");                    // strip any other HTML tags for pure plain text
};

// 2. Simple XOR + Base64 storage encryption helper to prevent plaintext localStorage inspection
const SECRET_KEY = "compass_secret_token";

export const encryptState = (data) => {
  if (!data) return '';
  try {
    const jsonString = JSON.stringify(data);
    let result = '';
    for (let i = 0; i < jsonString.length; i++) {
      result += String.fromCharCode(jsonString.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length));
    }
    return btoa(result);
  } catch (err) {
    console.error("Encryption error:", err);
    return '';
  }
};

export const decryptState = (cipher) => {
  if (!cipher) return null;
  try {
    const raw = atob(cipher);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      result += String.fromCharCode(raw.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length));
    }
    return JSON.parse(result);
  } catch (err) {
    console.error("Decryption error:", err);
    return null;
  }
};

// 3. Simple CSRF validation system
export const getCSRFToken = () => {
  let token = sessionStorage.getItem('csrf_token');
  if (!token) {
    token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('csrf_token', token);
  }
  return token;
};
