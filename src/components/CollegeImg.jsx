import React, { useState, useEffect } from 'react';

// Curated high-resolution clean architectural university campus photos for graceful fallback
// Note: DTU, KVIM, Osmania, BITS, and any institution with visible name signage are STRICTLY EXCLUDED
// so no college will ever display another college's name or sign on its card.
export const CAMPUS_BUILDING_FALLBACKS = [
  '/images/campuses/campus_architecture_1.jpg',
  '/images/campuses/campus_architecture_2.jpg',
  '/images/campuses/campus_architecture_3.jpg',
  '/images/campuses/campus_architecture_4.jpg',
  '/images/campuses/campus_architecture_5.jpg',
  '/images/campuses/campus_architecture_6.jpg',
  '/images/campuses/campus_architecture_7.jpg',
  '/images/campuses/campus_architecture_8.jpg',
  '/images/campuses/campus_architecture_9.jpg',
  '/images/campuses/campus_coep_pune.png',
  '/images/campuses/vjti_mumbai.jpg',
  '/images/campuses/bangalore_university.jpg',
  '/images/campuses/bms_bangalore.jpg',
  '/images/campuses/pes_bangalore.jpg',
  '/images/campuses/ramaiah_bangalore.jpg',
  '/images/campuses/weschool_matunga_mumbai.jpeg',
  '/images/campuses/pibm_pune.webp',
  '/images/campuses/iiit_bangalore_campus.jpg',
  '/images/campuses/svims_wadala_mumbai.jpeg',
  '/images/campuses/bharati_vidyapeeth_navimumbai.jpg',
  '/images/campuses/atharva_complex_malad.jpg',
  '/images/campuses/thakur_complex_kandivali.webp',
  '/images/campuses/bunts_sangha_mumbai.jpeg',
  '/images/campuses/chetana_bandra.jpg',
  '/images/campuses/kes_shroff_kandivali.jpg',
  '/images/campuses/sailee_college_borivali.jpg',
  '/images/campuses/sheila_raheja_bandra.webp',
  '/images/campuses/maniben_mp_shah_matunga.jpg',
  '/images/campuses/riim_pune.jpeg',
  '/images/campuses/campus_vnit_nagpur.jpeg',
  '/images/campuses/campus_cu_shah_mumbai.png',
  '/images/campuses/campus_mgm_navi_mumbai.jpg',
  '/images/campuses/valia_andheri.jpeg'
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
        alt={alt || college?.name || 'College Campus Building'}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default CollegeImg;
