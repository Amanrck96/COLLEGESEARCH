import React, { createContext, useState, useContext, useCallback } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Automatically remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-success" size={18} />;
      case 'warning':
        return <FaExclamationTriangle className="text-warning" size={18} />;
      case 'info':
        return <FaInfoCircle className="text-info" size={18} />;
      case 'error':
        return <FaTimes className="text-danger" size={18} />;
      default:
        return <FaInfoCircle className="text-primary" size={18} />;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Alert Portal / Floating Container */}
      <div className="toast-notification-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast-alert toast-${t.type}`} onClick={() => removeToast(t.id)}>
            {getIcon(t.type)}
            <div className="toast-message">{t.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
