import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="d-flex flex-column min-vh-100 bg-light">
        <main className="flex-grow-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1" style={{paddingTop: '120px', minHeight: 'calc(100vh - 120px)'}}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating Chat Widget */}
      <div 
        className="position-fixed shadow-lg rounded p-3 text-white text-decoration-none d-flex align-items-center"
        style={{
          bottom: '20px', 
          right: '20px', 
          backgroundColor: '#0d6efd', 
          zIndex: 1050, 
          width: '320px',
          cursor: 'pointer',
          borderRadius: '10px'
        }}
      >
        <button 
          className="btn-close btn-close-white position-absolute" 
          style={{top: '10px', right: '10px', fontSize: '10px'}} 
          aria-label="Close"
        />
        <div className="flex-grow-1 pe-4">
          <div style={{fontSize: '12px', fontWeight: '500', marginBottom: '2px'}}>Get Instant Answer to your queries</div>
          <div style={{fontSize: '16px', fontWeight: 'bold'}}>Ask Now</div>
        </div>
        <div 
          className="position-relative bg-white rounded-circle d-flex align-items-center justify-content-center text-primary shadow"
          style={{width: '45px', height: '45px', border: '2px solid #0d6efd', fontSize: '20px'}}
        >
          ⚡
          <span 
            className="position-absolute translate-middle badge rounded-pill bg-danger"
            style={{top: '5px', right: '-15px', border: '2px solid white'}}
          >
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
