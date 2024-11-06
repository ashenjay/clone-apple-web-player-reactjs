import React from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext
}) => (
  <div className="mt-6 flex items-center justify-center gap-8">
    <button 
      onClick={onPrevious}
      className="p-2 hover:bg-gray-800 rounded-full transition"
    >
      <SkipBack size={24} />
    </button>
    
    <button 
      onClick={onPlayPause}
      className="p-4 bg-white text-black rounded-full hover:scale-105 transition"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
    
    <button 
      onClick={onNext}
      className="p-2 hover:bg-gray-800 rounded-full transition"
    >
      <SkipForward size={24} />
    </button>
  </div>
);

export default Controls;