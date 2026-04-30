import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Search } from 'lucide-react';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).replace(/,/g, '');
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-item font-bold"> Om Panjwani</span>
        <span className="topbar-item hoverable">File</span>
        <span className="topbar-item hoverable">Edit</span>
        <span className="topbar-item hoverable">View</span>
        <span className="topbar-item hoverable">Go</span>
        <span className="topbar-item hoverable">Window</span>
        <span className="topbar-item hoverable">Help</span>
      </div>

      <div className="topbar-right">
        <Search size={14} className="topbar-icon" />
        <Wifi size={14} className="topbar-icon" />
        <BatteryMedium size={16} className="topbar-icon" />
        <span className="topbar-item">{formatTime(time)}</span>
      </div>
    </div>
  );
};

export default TopBar;
