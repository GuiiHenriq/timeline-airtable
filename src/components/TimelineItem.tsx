import { TimelineItem } from '../data/timelineItems';
import { getItemColor, formatDate, calculateDurationInDays } from '../utils/timelineUtils';

interface TimelineItemComponentProps {
  item: TimelineItem;
  startDate: Date;
  endDate: Date;
}

export function TimelineItemComponent({
  item,
  startDate,
  endDate
}: TimelineItemComponentProps) {
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const itemStartDate = new Date(item.start);
  
  const startDaysFromBeginning = Math.ceil((itemStartDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const duration = calculateDurationInDays(item.start, item.end);

  const leftPercentage = (startDaysFromBeginning / totalDays) * 100;
  const widthPercentage = (duration / totalDays) * 100;

  const { bg, text } = getItemColor(item.id);

  return (
    <div
      className={`absolute h-8 rounded-md shadow-sm border border-white/20 flex items-center px-2 ${bg} ${text} text-sm font-medium hover:shadow-md transition-all duration-200 cursor-pointer group`}
      style={{
        left: `${leftPercentage}%`,
        width: `${widthPercentage}%`,
        minWidth: '80px'
      }}
      title={`${item.name}\n${formatDate(item.start)} to ${formatDate(item.end)}\nDuration: ${duration} days`}
    >
      <span className="truncate">{item.name}</span>
      
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          {item.name}<br />
          {formatDate(item.start)} - {formatDate(item.end)}<br />
          {duration} days
        </div>
      </div>
    </div>
  );
}
