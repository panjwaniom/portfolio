import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { playPopSound } from '../utils/sounds';

const Window = ({ window, appId, onClose, onFocus, children }) => {
  const windowRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    playPopSound();
  }, []);

  const toggleMaximize = (e) => {
    e.stopPropagation();
    if (appId === 'resume') {
      setIsMaximized(!isMaximized);
    }
  };

  return (
    <motion.div
      ref={windowRef}
      drag={!isMaximized}
      dragMomentum={false}
      dragConstraints={{ top: 28, left: -500, right: 1000, bottom: 800 }}
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      onMouseDown={() => onFocus(window.id)}
      className={`mac-window window-${appId} ${isMaximized ? 'maximized' : ''}`}
      style={isMaximized ? {
        width: '100vw',
        height: 'calc(100vh - 28px)',
        zIndex: window.zIndex,
        top: 28,
        left: 0,
        position: 'absolute',
        borderRadius: 0
      } : {
        width: window.width || 600,
        height: window.height || 400,
        zIndex: window.zIndex,
        top: window.y || 100,
        left: window.x || 100,
        position: 'absolute'
      }}
    >
      {/* MacOS Window Header */}
      <div className="window-header">
        <div className="window-buttons">
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(window.id); }}
            className="window-btn btn-close"
          >
            <span>✕</span>
          </button>
          <button className="window-btn btn-min">
             <span>−</span>
          </button>
          <button 
            onClick={toggleMaximize}
            className="window-btn btn-max"
          >
             <span>＋</span>
          </button>
        </div>
        <div className="window-title">
          <span>{window.title}</span>
        </div>
        <div style={{ width: 44 }}></div> {/* Spacer */}
      </div>

      {/* Window Content */}
      <div className="window-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
