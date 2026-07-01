import React, { useState, useEffect } from 'react';

const CollegeImg = ({ college, className, style, alt, ...props }) => {
  const DEFAULT_CAMPUS_IMAGE = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800';
  const [imgSrc, setImgSrc] = useState(college?.img || DEFAULT_CAMPUS_IMAGE);

  useEffect(() => {
    setImgSrc(college?.img || DEFAULT_CAMPUS_IMAGE);
  }, [college?.img]);

  const handleError = () => {
    if (imgSrc !== DEFAULT_CAMPUS_IMAGE) {
      setImgSrc(DEFAULT_CAMPUS_IMAGE);
    }
  };

  return (
    <div className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '150px' }}>
      <img
        src={imgSrc}
        className={className}
        style={{ ...style, objectFit: 'cover', width: '100%', height: '100%', transition: 'all 0.3s ease' }}
        alt={alt || college?.name || 'College Campus'}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default CollegeImg;
