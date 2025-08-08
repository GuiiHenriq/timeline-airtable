interface TimelineStatsProps {
  lanes: any[][];
  dateRange: { start: Date; end: Date };
}

export function TimelineStats({ lanes, dateRange }: TimelineStatsProps) {
  const totalItems = lanes.reduce((sum, lane) => sum + lane.length, 0);
  const totalDays = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / (1000 * 60 * 60 * 24));
  const averageItemsPerLane = lanes.length > 0 ? (totalItems / lanes.length).toFixed(1) : 0;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-blue-600">{totalItems}</div>
        <div className="text-sm text-gray-600">Total Items</div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-green-600">{lanes.length}</div>
        <div className="text-sm text-gray-600">Lanes Used</div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-purple-600">{totalDays}</div>
        <div className="text-sm text-gray-600">Total Days</div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-orange-600">{averageItemsPerLane}</div>
        <div className="text-sm text-gray-600">Avg Items/Lane</div>
      </div>
    </div>
  );
}
