import './App.css';
import { Timeline } from './components/Timeline';
import { TimelineStats } from './components/TimelineStats';
import { useTimeline } from './hooks/useTimeline';
import timelineItems from './data/timelineItems';

function App() {
  const { lanes, dateRange } = useTimeline(timelineItems);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl text-center font-bold text-gray-900 mb-2">
            Timeline
          </h1>
        </header>
        
        <TimelineStats lanes={lanes} dateRange={dateRange} />
        <Timeline lanes={lanes} dateRange={dateRange} />
      </div>
    </div>
  );
}

export default App;
