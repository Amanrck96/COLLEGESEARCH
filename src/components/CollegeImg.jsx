import React, { useState, useEffect } from 'react';

// Curated high-resolution genuine Indian architectural university campus photos for graceful fallback
const CAMPUS_BUILDING_FALLBACKS = [
  '/images/campuses/iim_bangalore.jpg',
  '/images/campuses/iiit_bangalore_campus.jpg',
  '/images/campuses/bangalore_university.jpg',
  '/images/campuses/bms_bangalore.jpg',
  '/images/campuses/pes_bangalore.jpg',
  '/images/campuses/ramaiah_bangalore.jpg',
  '/images/campuses/weschool_matunga_mumbai.jpeg',
  '/images/campuses/pibm_pune.webp',
  '/images/campuses/campus_coep_pune.png',
  '/images/campuses/vjti_mumbai.jpg',
  '/images/campuses/iit_bombay_powai.jpg',
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
  '/images/campuses/srinivasan_perambalur.jpg',
  '/images/campuses/kv_imis_coimbatore.jpg',
  '/images/campuses/rathinam_campus.jpg',
  '/images/campuses/campus_iit_delhi.jpg',
  '/images/campuses/campus_iit_patna.png'
];

const getCampusFallback = (name = '') => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return CAMPUS_BUILDING_FALLBACKS[Math.abs(hash) % CAMPUS_BUILDING_FALLBACKS.length];
};

const CollegeImg = ({ college, className, style, alt, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(college?.img || college?.image || '');
  const [retryStage, setRetryStage] = useState(0);

  useEffect(() => {
    const src = college?.img || college?.image || getCampusFallback(college?.name);
    setCurrentSrc(src);
    setRetryStage(0);
  }, [college?.img, college?.image, college?.name]);

  const handleError = () => {
    const origSrc = college?.img || college?.image || '';
    
    // If it's an external URL (http) and failed on direct load, try image proxy
    if (retryStage === 0 && origSrc.startsWith('http')) {
      const cleanUrl = origSrc.replace(/^https?:\/\//, '');
      const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=900&q=80&output=jpg`;
      setRetryStage(1);
      setCurrentSrc(proxyUrl);
    } else {
      // Fall back to verified local Indian campus building
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
