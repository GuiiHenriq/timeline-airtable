import { useState, useEffect } from 'react';

interface ZoomIndicatorProps {
  zoomLevel: number;
  show: boolean;
}

export function ZoomIndicator({ zoomLevel, show }: ZoomIndicatorProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [show, zoomLevel]);

  if (!visible) return null;

  const percentage = Math.round(zoomLevel * 100);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            <path d="m13 6.5 3 3"/>
          </svg>
          <span className="font-semibold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
