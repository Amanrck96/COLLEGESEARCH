import React, { useState } from 'react';
import { getCollegeCoordinates } from '../utils/geoCoords';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';

export default function CollegeMapView({ college, height = '240px' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!college) return null;

  const coords = getCollegeCoordinates(college);
  const lat = coords.lat;
  const lon = coords.lon;
  const delta = 0.025; // Zoom scale for locality

  const bbox = `${lon - delta}%2C${lat - delta}%2C${lon + delta}%2C${lat + delta}`;
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    college.name + ' ' + (college.address || college.location || '') + ' ' + (college.state || '')
  )}`;

  const handleOpenMap = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="position-relative overflow-hidden rounded-3 border shadow-sm college-map-container" 
      style={{ height, width: '100%', cursor: 'pointer', backgroundColor: '#f1f5f9' }}
      onClick={handleOpenMap}
      title="Click to open directions in Google Maps"
    >
      {/* Live Map Iframe */}
      <iframe
        title={`${college.name} Location Map`}
        src={osmUrl}
        width="100%"
        height="100%"
        style={{ border: 0, pointerEvents: 'none', filter: isLoaded ? 'none' : 'blur(2px)', transition: 'filter 0.3s' }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />

      {/* Floating Expand Icon Button (Top Right) */}
      <div 
        className="position-absolute shadow-sm d-flex align-items-center justify-content-center"
        style={{
          top: '12px',
          right: '12px',
          width: '32px',
          height: '32px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '50%',
          zIndex: 3,
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onClick={handleOpenMap}
        title="Open Fullscreen in Google Maps"
      >
        <FaExpand size={13} />
      </div>

      {/* Location Badge (Top Left) */}
      <div 
        className="position-absolute d-flex align-items-center gap-1 shadow-sm px-2 py-1 rounded-pill"
        style={{
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          fontSize: '11px',
          fontWeight: 600,
          color: '#334155',
          zIndex: 3
        }}
      >
        <FaMapMarkerAlt className="text-danger" size={11} />
        <span className="text-truncate" style={{ maxWidth: '140px' }}>
          {college.location || college.state || 'India'}
        </span>
      </div>

      {/* Map Attribution (Bottom Right) */}
      <div 
        className="position-absolute px-2 py-0.5"
        style={{
          bottom: '2px',
          right: '4px',
          fontSize: '9px',
          color: '#64748b',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '3px',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      >
        © OpenStreetMap • Click to navigate
      </div>

      {/* Hover Overlay Hint */}
      <div 
        className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center map-hover-overlay"
        style={{
          top: 0,
          left: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.08)',
          zIndex: 2,
          transition: 'background-color 0.2s'
        }}
      />
    </div>
  );
}
