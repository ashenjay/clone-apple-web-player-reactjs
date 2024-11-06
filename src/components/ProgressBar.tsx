import React from 'react';
import { formatTime } from '../utils/timeFormat';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, duration, onSeek }) => (
  <div className="mt-8">
    <div 
      className="h-1 bg-gray-800 rounded-full cursor-pointer"
      onClick={onSeek}
    >
      <div 
        className="h-full bg-white rounded-full transition-all duration-100"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      />
    </div>
    
    <div className="flex justify-between text-sm mt-2 text-gray-400">
      <span>{formatTime(currentTime)}</span>
      <span>{formatTime(duration)}</span>
    </div>
  </div>
);

export default ProgressBar;