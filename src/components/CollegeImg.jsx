import React, { useState, useEffect } from 'react';

// Curated high-resolution genuine architectural university campus photos for graceful fallback
const CAMPUS_BUILDING_FALLBACKS = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=80'
];

const getCampusFallback = (name = '') => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return CAMPUS_BUILDING_FALLBACKS[Math.abs(hash) % CAMPUS_BUILDING_FALLBACKS.length];
};

const CollegeImg = ({ college, className, style, alt, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(college?.img || '');
  const [retryStage, setRetryStage] = useState(0); // 0 = direct, 1 = weserv proxy, 2 = campus building fallback

  useEffect(() => {
    setCurrentSrc(college?.img || getCampusFallback(college?.name));
    setRetryStage(0);
  }, [college?.img, college?.name]);

  const handleError = () => {
    if (retryStage === 0 && college?.img) {
      // Stage 1: Try bypassing CDN hotlink blocking via high-speed image proxy
      const cleanUrl = college.img.replace(/^https?:\/\//, '');
      const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=900&q=80&output=jpg`;
      setRetryStage(1);
      setCurrentSrc(proxyUrl);
    } else if (retryStage === 1 || !college?.img) {
      // Stage 2: Fall back to high-res real architectural campus photo
      setRetryStage(2);
      setCurrentSrc(getCampusFallback(college?.name));
    }
  };

  return (
    <div 
      className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center bg-light" 
      style={{ minHeight: '150px' }}
    >
      <img
        src={currentSrc || getCampusFallback(college?.name)}
        className={className}
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{ 
          ...style, 
          objectFit: 'cover', 
          width: '100%', 
          height: '100%', 
          transition: 'all 0.3s ease' 
        }}
        alt={alt || college?.name || 'College Campus Building'}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default CollegeImg;
