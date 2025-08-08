import { useState, useMemo } from 'react';
import { TimelineItem } from '../data/timelineItems';
import { assignLanes } from '../utils/assignLanes';
import { useZoom } from './useZoom';

export interface UseTimelineReturn {
  items: TimelineItem[];
  lanes: TimelineItem[][];
  dateRange: { start: Date; end: Date };
  updateItem: (id: number, updates: Partial<TimelineItem>) => void;
  zoomLevel: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  handleWheel: (event: WheelEvent) => void;
  isZooming: boolean;
}

export function useTimeline(initialItems: TimelineItem[]): UseTimelineReturn {
  const [items, setItems] = useState<TimelineItem[]>(initialItems);
  const { zoomLevel, zoomIn, zoomOut, setZoomLevel, handleWheel, isZooming } = useZoom();

  const lanes = useMemo(() => assignLanes(items), [items]);

  const dateRange = useMemo(() => {
    if (items.length === 0) {
      return { start: new Date(), end: new Date() };
    }

    const dates = items.flatMap(item => [new Date(item.start), new Date(item.end)]);
    const start = new Date(Math.min(...dates.map(d => d.getTime())));
    const end = new Date(Math.max(...dates.map(d => d.getTime())));

    return { start, end };
  }, [items]);

  const updateItem = (id: number, updates: Partial<TimelineItem>) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  return {
    items,
    lanes,
    dateRange,
    updateItem,
    zoomLevel,
    zoomIn,
    zoomOut,
    resetZoom,
    handleWheel,
    isZooming,
  };
}
