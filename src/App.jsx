import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Window from './components/Window';
import MusicPlayer from './components/MusicPlayer';
import { apps } from './utils/apps';

// App contents
import AboutMe from './apps/AboutMe';
import Projects from './apps/Projects';
import Skills from './apps/Skills';
import Contact from './apps/Contact';
import Resume from './apps/Resume';

// Map app IDs to their components
const appComponents = {
  about: AboutMe,
  projects: Projects,
  skills: Skills,
  contact: Contact,
  resume: Resume
};

const App = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeZIndex, setActiveZIndex] = useState(10);

  const openApp = (appId) => {
    const existingWindow = openWindows.find(w => w.id === appId);
    if (existingWindow) {
      focusWindow(appId);
      return;
    }

    const appConfig = apps.find(a => a.id === appId);
    if (!appConfig) return;

    const offset = openWindows.length * 20;
    
    const newWindow = {
      id: appId,
      title: appConfig.title,
      zIndex: activeZIndex + 1,
      x: 100 + offset,
      y: 100 + offset,
      width: appId === 'contact' ? 400 : (appId === 'resume' ? 500 : 650),
      height: appId === 'contact' ? 550 : (appId === 'resume' ? 700 : 450),
    };

    setOpenWindows([...openWindows, newWindow]);
    setActiveZIndex(activeZIndex + 1);
  };

  const closeWindow = (appId) => {
    setOpenWindows(openWindows.filter(w => w.id !== appId));
  };

  const focusWindow = (appId) => {
    setOpenWindows(openWindows.map(w => {
      if (w.id === appId) {
        return { ...w, zIndex: activeZIndex + 1 };
      }
      return w;
    }));
    setActiveZIndex(activeZIndex + 1);
  };

  return (
    <div className="app-container">
      {/* MacOS Big Sur / Sonoma style dynamic gradient wallpaper */}
      <div className="desktop-bg" />
      
      <TopBar />
      
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {apps.filter(app => app.id === 'about').map(app => (
          <div 
            key={`desktop-${app.id}`}
            className="desktop-icon-wrapper"
            onDoubleClick={() => openApp(app.id)}
          >
            <div className="desktop-icon">
              <app.icon size={28} />
            </div>
            <span className="desktop-icon-label">
              {app.title}
            </span>
          </div>
        ))}
      </div>

      <MusicPlayer />

      {/* Windows Area */}
      <div className="windows-area">
        <AnimatePresence>
          {openWindows.map(window => {
            const Content = appComponents[window.id];
            return (
              <div key={window.id} className="window-container">
                <Window
                  window={window}
                  appId={window.id}
                  onClose={closeWindow}
                  onFocus={focusWindow}
                >
                  {Content && <Content />}
                </Window>
              </div>
            );
          })}
        </AnimatePresence>
      </div>

      <Dock openApps={openWindows} openApp={openApp} />
    </div>
  );
};

export default App;
