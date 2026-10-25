import React from 'react';

/**
 * DataShield: Wraps sensitive data components (Fee tables, Placement CTCs, Cutoffs)
 * to prevent bulk text selection, automated scraping, and copy-paste theft.
 */
const DataShield = ({ children, className = '', watermark = true }) => {
  return (
    <div 
      className={`secure-data-table position-relative ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
      onCopy={(e) => {
        e.preventDefault();
      }}
    >
      {children}
      {watermark && (
        <div 
          className="position-absolute end-0 bottom-0 p-1 pe-2 text-muted opacity-25 small"
          style={{ fontSize: '0.65rem', pointerEvents: 'none', userSelect: 'none' }}
        >
          Protected by College Compass Shield
        </div>
      )}
    </div>
  );
};

export default DataShield;
