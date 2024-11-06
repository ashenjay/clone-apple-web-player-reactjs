import React from 'react';
import { Song } from '../types/music';

interface SongInfoProps {
  song: Song;
}

const SongInfo: React.FC<SongInfoProps> = ({ song }) => (
  <div className="flex items-center gap-8">
    <img 
      src={song.cover} 
      alt={song.title}
      className="w-32 h-32 rounded-lg object-cover shadow-lg"
    />
    <div className="flex-1">
      <h2 className="text-2xl font-bold">{song.title}</h2>
      <p className="text-gray-400">{song.artist}</p>
    </div>
  </div>
);

export default SongInfo;