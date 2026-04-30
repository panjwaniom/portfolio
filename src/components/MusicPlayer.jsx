import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Default to false, let the play event set it
  const [volume, setVolume] = useState(0.12);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Initial play attempt
    audio.play().catch(() => {
      // If blocked, wait for first click
      const startAudio = () => {
        audio.play().catch(() => {});
        window.removeEventListener('click', startAudio);
      };
      window.addEventListener('click', startAudio);
    });

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
    }
  };

  const handleNext = () => {
    if (audioRef.current) {
      audioRef.current.src = "https://stream.zeno.fm/f3wvbbqmdg8uv";
      audioRef.current.play().catch(() => {});
    }
  };

  const handlePrev = () => {
    handleNext();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="music-player-container-vertical"
    >
      <audio ref={audioRef} src="https://stream.zeno.fm/f3wvbbqmdg8uv" loop autoPlay />
      
      {/* Turntable / Vinyl Art */}
      <div className="music-player-turntable">
        <div className={`music-player-vinyl ${isPlaying ? 'spinning' : ''}`}>
          <div className="music-player-vinyl-label">
            <div className="music-player-vinyl-hole"></div>
          </div>
        </div>
        <div className={`music-player-tonearm ${isPlaying ? 'playing' : ''}`}></div>
      </div>

      {/* Controls */}
      <div className="music-player-controls-vertical">
        <button onClick={handlePrev} className="music-player-btn-next">
          <SkipBack size={14} />
        </button>
        <button onClick={togglePlay} className="music-player-btn-play">
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} />}
        </button>
        <button onClick={handleNext} className="music-player-btn-next">
          <SkipForward size={14} />
        </button>
      </div>
      
      {/* Volume */}
      <div className="music-player-volume-vertical">
        <Volume2 size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="music-player-slider-stacked"
        />
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
