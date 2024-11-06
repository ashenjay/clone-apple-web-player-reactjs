import React, { useState, useRef, useEffect } from 'react';
import { songs } from '../types/music';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import VolumeControl from './VolumeControl';

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = pos * duration;
    }
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl bg-black text-white rounded-xl overflow-hidden shadow-2xl">
      <div className="p-8">
        <SongInfo song={currentSong} />
        
        <div ref={progressBarRef}>
          <ProgressBar 
            currentTime={currentTime}
            duration={duration}
            onSeek={handleProgressBarClick}
          />
        </div>

        <Controls 
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onPrevious={handlePrevSong}
          onNext={handleNextSong}
        />

        <VolumeControl />
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextSong}
      />
    </div>
  );
};

export default MusicPlayer;