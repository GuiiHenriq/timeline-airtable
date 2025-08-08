import './App.css';
import { Timeline } from './components/Timeline';
import { TimelineStats } from './components/TimelineStats';
import { ZoomControls } from './components/ZoomControls';
import { ZoomIndicator } from './components/ZoomIndicator';
import { useTimeline } from './hooks/useTimeline';
import timelineItems from './data/timelineItems';

function App() {
  const { lanes, dateRange, zoomLevel, zoomIn, zoomOut, resetZoom, handleWheel, isZooming } = useTimeline(timelineItems);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl text-center font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg mb-2">
            Timeline
          </h1>
        </header>
        
        <div className="mb-6">
          <TimelineStats lanes={lanes} dateRange={dateRange} />
        </div>
        
        <div className="mb-6 flex justify-end">
          <ZoomControls 
            zoomLevel={zoomLevel}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={resetZoom}
          />
        </div>
        
        <Timeline 
          lanes={lanes} 
          dateRange={dateRange} 
          zoomLevel={zoomLevel}
          onWheel={handleWheel}
        />
        
        <ZoomIndicator zoomLevel={zoomLevel} show={isZooming} />
      </div>
    </div>
  );
}

export default App;
