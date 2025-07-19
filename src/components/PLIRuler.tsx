import React from 'react';

interface PLIMarker {
  value: number;
  label: string;
  country: string;
  color: string;
}

const pliMarkers: PLIMarker[] = [
  { value: 39, label: 'Egypt', country: 'Egypt', color: 'text-yellow-600' }, // sandy-beige
  { value: 46, label: 'Vietnam', country: 'Vietnam', color: 'text-emerald-500' }, // jade-green
  { value: 100, label: 'World Average', country: 'World Average', color: 'text-slate-400' }, // steel-gray
  { value: 158, label: 'United States', country: 'United States', color: 'text-blue-600' }, // deep blue
  { value: 165, label: 'Norway', country: 'Norway', color: 'text-red-500' }, // Nordic-red
];

export const PLIRuler: React.FC = () => {
  const maxValue = 170;
  const minValue = 0;
  const height = 400; // Total height in pixels

  const getPosition = (value: number) => {
    return ((maxValue - value) / (maxValue - minValue)) * height;
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="relative flex flex-col items-center">
        {/* Title */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-blue-400">Price Level Index (PLI)</span>
        </div>
        
        {/* Ruler container */}
        <div className="relative" style={{ height: `${height}px`, width: '300px' }}>
          {/* Main vertical line */}
          <div className="absolute left-8 top-0 w-1 bg-blue-400/60" style={{ height: `${height}px` }} />
          
          {/* PLI markers */}
          {pliMarkers.map((marker) => {
            const position = getPosition(marker.value);
            const isWorldAverage = marker.value === 100;
            
            return (
              <div key={marker.value} className="absolute left-0 flex items-center" style={{ top: `${position}px` }}>
                {/* Tick mark */}
                <div className={`w-6 h-0.5 ${isWorldAverage ? 'bg-slate-400' : 'bg-blue-400'}`} />
                
                {/* Horizontal bar for world average */}
                {isWorldAverage && (
                  <div className="absolute left-6 w-60 h-0.5 bg-slate-400/40" />
                )}
                
                {/* Label */}
                <div className="ml-3 flex flex-col">
                  <span className={`text-sm font-semibold ${marker.color}`}>
                    {marker.label} ({marker.value})
                  </span>
                </div>
              </div>
            );
          })}
          
          {/* PLI scale labels */}
          <div className="absolute left-0 top-0 flex flex-col justify-between" style={{ height: `${height}px` }}>
            <span className="text-xs text-blue-400 font-mono -mt-2">165</span>
            <span className="text-xs text-blue-400 font-mono -mb-2">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};