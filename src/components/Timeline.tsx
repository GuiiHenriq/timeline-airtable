import { TimelineItem } from '../data/timelineItems';
import { TimelineItemComponent } from './TimelineItem';
import { formatDate } from '../utils/timelineUtils';

interface TimelineProps {
  lanes: TimelineItem[][];
  dateRange: { start: Date; end: Date };
}

const LANE_HEIGHT = 56;
const LANE_MARGIN = 8; 

export function Timeline({ lanes, dateRange }: TimelineProps) {
  const totalHeight = lanes.length * (LANE_HEIGHT + LANE_MARGIN);

  const generateDateLabels = () => {
    const labels = [];
    const current = new Date(dateRange.start);
    const end = new Date(dateRange.end);
    
    current.setDate(current.getDate() - 1);
    end.setDate(end.getDate() + 1);

    while (current <= end) {
      labels.push(new Date(current));
      current.setDate(current.getDate() + 7);
    }
    
    return labels;
  };

  const dateLabels = generateDateLabels();
  const totalDays = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Timeline</h2>
        <div className="relative h-12 border-b-2 border-gray-300">
          {dateLabels.map((date, index) => {
            const daysFromStart = Math.ceil((date.getTime() - dateRange.start.getTime()) / (1000 * 60 * 60 * 24));
            const leftPercentage = (daysFromStart / totalDays) * 100;
            
            return (
              <div
                key={index}
                className="absolute h-full"
                style={{ left: `${leftPercentage}%` }}
              >
                <div className="w-px h-full bg-gray-300" />
                <div
                  className="absolute top-full mt-2 text-sm text-gray-700 font-medium whitespace-nowrap"
                  style={{ transform: 'translateX(-50%)' }}
                >
                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 relative">
        <div className="absolute inset-6 pointer-events-none">
          {dateLabels.map((date, index) => {
            const daysFromStart = Math.ceil((date.getTime() - dateRange.start.getTime()) / (1000 * 60 * 60 * 24));
            const leftPercentage = (daysFromStart / totalDays) * 100;
            
            return (
              <div
                key={index}
                className="absolute top-0 w-px bg-gray-200"
                style={{ 
                  left: `${leftPercentage}%`,
                  height: `${totalHeight}px`
                }}
              />
            );
          })}
        </div>

        <div 
          className="relative w-full"
          style={{ height: `${totalHeight}px` }}
        >
          {lanes.map((lane, laneIndex) => (
            <div
              key={laneIndex}
              className="absolute w-full"
              style={{
                top: `${laneIndex * (LANE_HEIGHT + LANE_MARGIN)}px`,
                height: `${LANE_HEIGHT}px`
              }}
            >
              <div className="absolute inset-0 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors" />
              
              <div className="absolute left-3 top-3 text-sm text-gray-600 font-semibold">
                Lane {laneIndex + 1}
                <span className="ml-2 text-xs text-gray-400">
                  ({lane.length} item{lane.length !== 1 ? 's' : ''})
                </span>
              </div>

              <div className="relative h-full pt-2">
                {lane.map((item) => (
                  <TimelineItemComponent
                    key={item.id}
                    item={item}
                    startDate={dateRange.start}
                    endDate={dateRange.end}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div>
            <span className="font-medium">Timeline Range:</span> {formatDate(dateRange.start.toISOString().split('T')[0])} to {formatDate(dateRange.end.toISOString().split('T')[0])}
          </div>
          <div>
            <span className="font-medium">Total Duration:</span> {totalDays} days
          </div>
        </div>
      </div>
    </div>
  );
}
