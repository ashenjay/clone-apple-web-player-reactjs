import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControl: React.FC = () => (
  <div className="mt-6 flex items-center gap-2 text-gray-400">
    <Volume2 size={20} />
    <div className="flex-1 h-1 bg-gray-800 rounded-full">
      <div className="w-1/2 h-full bg-white rounded-full" />
    </div>
  </div>
);

export default VolumeControl;