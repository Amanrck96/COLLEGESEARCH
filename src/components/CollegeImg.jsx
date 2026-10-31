import React, { useState, useEffect } from 'react';

// Curated high-resolution strictly UNBRANDED architectural university campus photos
// Note: All specific institution buildings are strictly excluded from the fallback pool
// so no college will ever display another institution's building as a fallback.
export const CAMPUS_BUILDING_FALLBACKS = [
  '/images/campuses/campus_architecture_1.jpg',
  '/images/campuses/campus_architecture_2.jpg',
  '/images/campuses/campus_architecture_3.jpg',
  '/images/campuses/campus_architecture_4.jpg',
  '/images/campuses/campus_architecture_5.jpg',
  '/images/campuses/campus_architecture_6.jpg',
  '/images/campuses/campus_architecture_7.jpg',
  '/images/campuses/campus_architecture_8.jpg',
  '/images/campuses/campus_architecture_9.jpg'
];

export const getCampusFallback = (name = '', offset = 0) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const poolIndex = (Math.abs(hash) + (offset || 0)) % CAMPUS_BUILDING_FALLBACKS.length;
  return CAMPUS_BUILDING_FALLBACKS[poolIndex];
};

const CollegeImg = ({ college, index = 0, className, style, alt, ...props }) => {
  const getInitialSrc = () => {
    return college?.img || college?.image || getCampusFallback(college?.name || String(college?.id || ''), index);
  };

  const [currentSrc, setCurrentSrc] = useState(getInitialSrc);
  const [retryStage, setRetryStage] = useState(0);

  useEffect(() => {
    setCurrentSrc(getInitialSrc());
    setRetryStage(0);
  }, [college?.img, college?.image, college?.name, college?.id, index]);

  const handleError = () => {
    const origSrc = college?.img || college?.image || '';
    
    // If it's an external URL (http) and failed on direct load, try image proxy
    if (retryStage === 0 && origSrc.startsWith('http')) {
      const cleanUrl = origSrc.replace(/^https?:\/\//, '');
      const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=900&q=80&output=jpg`;
      setRetryStage(1);
      setCurrentSrc(proxyUrl);
    } else {
      // Fall back to clean, unbranded architectural campus photo with diversity offset
      setRetryStage(2);
      setCurrentSrc(getCampusFallback(college?.name || String(college?.id || ''), index));
    }
  };

  const isGeneric = currentSrc && (
    currentSrc.includes('campus_architecture_') ||
    retryStage === 2
  );

  return (
    <div 
      className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center bg-light" 
      style={{ minHeight: '150px' }}
    >
      <img
        src={currentSrc || getCampusFallback(college?.name || String(college?.id || ''), index)}
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
        alt={alt || (isGeneric ? `${college?.name || 'College'} (Representative Campus View)` : (college?.name || 'College Campus Building'))}
        onError={handleError}
        {...props}
      />
      {isGeneric && (
        <span 
          className="position-absolute bottom-0 start-0 m-2 px-2 py-0.5 rounded text-white bg-dark bg-opacity-75"
          style={{ fontSize: '10px', letterSpacing: '0.3px', zIndex: 1, pointerEvents: 'none', userSelect: 'none' }}
          title="This image represents illustrative campus architecture and is not an authentic photograph of the college campus."
        >
          Representative Image
        </span>
      )}
    </div>
  );
};

export default CollegeImg;
