import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Spinner } from 'react-bootstrap';
import { CollegeContext } from '../contexts/CollegeContext';

const CollegeImg = ({ college, className, style, alt, ...props }) => {
  const { updateCollege } = useContext(CollegeContext);
  const [imgSrc, setImgSrc] = useState(college?.img || '');
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0); // Track scrape attempts to prevent loops
  const [searchResults, setSearchResults] = useState([]);

  const isPlaceholder = (url) => {
    if (!url) return true;
    return url.includes('unsplash.com') || url.includes('placeholder') || url.includes('college.edu');
  };

  useEffect(() => {
    setImgSrc(college?.img || '');
    setAttempt(0);
  }, [college?.img]);

  const fetchRealImage = useCallback(async () => {
    if (attempt > 2 || loading) return;
    setLoading(true);
    setAttempt(prev => prev + 1);

    try {
      const query = `${college.name} ${college.location || ''}`;
      const response = await fetch(`/api/search-image?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Search failed');
      const images = await response.json();
      
      if (images && images.length > 0) {
        setSearchResults(images);
        const firstImgUrl = images[0].url;
        setImgSrc(firstImgUrl);
        
        // Save in Context State
        updateCollege(college.id, { 
          img: firstImgUrl, 
          gallery: [firstImgUrl, ...(college.gallery || []).slice(1)] 
        });

        // Save to JSON on disk
        fetch('/api/save-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: college.id, img: firstImgUrl })
        }).catch(err => console.error("Error writing to disk:", err));
      }
    } catch (err) {
      console.error('Error fetching image:', err);
    } finally {
      setLoading(false);
    }
  }, [attempt, loading, college, updateCollege]);

  useEffect(() => {
    if (college && isPlaceholder(imgSrc) && attempt === 0) {
      fetchRealImage();
    }
  }, [imgSrc, college, attempt, fetchRealImage]);

  const handleError = () => {
    const campusFallback = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800';
    if (imgSrc === campusFallback) {
      setImgSrc("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23ccc'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23666'>No Image</text></svg>");
      return;
    }
    if (imgSrc.startsWith("data:image/svg+xml")) {
      return; // Stop here
    }

    // If the direct URL failed and we have search results, try the Google CDN thumbnail (preview) which always works
    if (searchResults.length > 0 && attempt === 1) {
      const fallbackUrl = searchResults[0].preview?.url || searchResults[0].url;
      if (fallbackUrl !== imgSrc) {
        setAttempt(2);
        setImgSrc(fallbackUrl);
        updateCollege(college.id, { img: fallbackUrl });
        fetch('/api/save-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: college.id, img: fallbackUrl })
        }).catch(err => console.error("Error writing fallback to disk:", err));
        return;
      }
    }
    
    if (attempt < 2) {
      fetchRealImage();
    } else {
      setImgSrc(campusFallback);
    }
  };

  return (
    <div className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center bg-dark" style={{ minHeight: '150px' }}>
      {loading && (
        <div className="position-absolute d-flex flex-column align-items-center justify-content-center text-white" style={{ zIndex: 1, backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Spinner animation="grow" variant="light" size="sm" className="mb-2" />
          <span className="small opacity-75">Scraping Campus View...</span>
        </div>
      )}
      <img
        src={imgSrc || 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'}
        className={className}
        style={{ ...style, objectFit: 'cover', transition: 'all 0.5s ease' }}
        alt={alt || college?.name}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default CollegeImg;
