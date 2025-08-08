interface ZoomControlsProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export function ZoomControls({ zoomLevel, onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  const zoomPercentage = Math.round(zoomLevel * 100);
  const isMinZoom = zoomLevel <= 0.25;
  const isMaxZoom = zoomLevel >= 2;

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg shadow-md border border-gray-200 px-4 py-3">
      <span className="text-sm text-gray-600 font-medium">Zoom:</span>
      
      <button
        onClick={onZoomOut}
        disabled={isMinZoom}
        className={`flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 ${
          isMinZoom 
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : 'bg-blue-100 hover:bg-blue-200 text-blue-700 hover:shadow-md active:scale-95'
        }`}
        title="Zoom Out (Ctrl/Cmd + - or Ctrl + Scroll Down)"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"/>
        </svg>
      </button>

      <div 
        className="min-w-[70px] text-center text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md border border-gray-200 transition-colors"
        onClick={onReset}
        title="Reset to 100% (Ctrl/Cmd + 0)"
      >
        {zoomPercentage}%
      </div>

      <button
        onClick={onZoomIn}
        disabled={isMaxZoom}
        className={`flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 ${
          isMaxZoom 
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : 'bg-blue-100 hover:bg-blue-200 text-blue-700 hover:shadow-md active:scale-95'
        }`}
        title="Zoom In (Ctrl/Cmd + + or Ctrl + Scroll Up)"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
        </svg>
      </button>

      <div className="text-xs text-gray-500 ml-2 hidden sm:block">
        <div>Ctrl+Scroll</div>
        <div>Ctrl + / - / 0</div>
      </div>
    </div>
  );
}
