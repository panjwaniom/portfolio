import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { apps } from '../utils/apps';
import { playClickSound } from '../utils/sounds';

const DockItem = ({ app, mouseX, onClick, isOpen }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = () => {
    playClickSound();
    onClick(app.id);
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={handleClick}
      className="dock-item-wrapper"
    >
      <motion.div
        className="dock-icon"
        whileTap={{ scale: 0.85 }}
      >
        <app.icon size="50%" />
      </motion.div>
      
      {/* App title tooltip */}
      <div className="dock-tooltip">
        {app.title}
      </div>

      {/* Active indicator */}
      {isOpen && (
        <div className="dock-active-dot" />
      )}
    </motion.div>
  );
};

const Dock = ({ openApps, openApp }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="dock-wrapper">
      <div 
        className="dock"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {apps.map((app) => (
          <DockItem 
            key={app.id} 
            app={app} 
            mouseX={mouseX} 
            onClick={openApp}
            isOpen={openApps.some(w => w.id === app.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
