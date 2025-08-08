import { useState, useCallback, useEffect } from 'react';

export interface UseZoomReturn {
  zoomLevel: number;
  zoomIn: () => void;
  zoomOut: () => void;
  setZoomLevel: (level: number) => void;
  handleWheel: (event: WheelEvent) => void;
  isZooming: boolean;
}

const MIN_ZOOM = 0.25; // 25%
const MAX_ZOOM = 2; // 200%
const ZOOM_STEP = 0.1; // 10% per step

export function useZoom(initialZoom: number = 1): UseZoomReturn {
  const [zoomLevel, setZoomLevelState] = useState<number>(initialZoom);
  const [isZooming, setIsZooming] = useState<boolean>(false);

  const triggerZoomIndicator = useCallback(() => {
    setIsZooming(true);
    const timer = setTimeout(() => setIsZooming(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const setZoomLevel = useCallback((level: number) => {
    const clampedLevel = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, level));
    if (clampedLevel !== zoomLevel) {
      setZoomLevelState(clampedLevel);
      triggerZoomIndicator();
    }
  }, [zoomLevel, triggerZoomIndicator]);

  const zoomIn = useCallback(() => {
    setZoomLevel(zoomLevel + ZOOM_STEP);
  }, [zoomLevel, setZoomLevel]);

  const zoomOut = useCallback(() => {
    setZoomLevel(zoomLevel - ZOOM_STEP);
  }, [zoomLevel, setZoomLevel]);

  const handleWheel = useCallback((event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      setZoomLevel(zoomLevel + delta);
    }
  }, [zoomLevel, setZoomLevel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey)) {
        switch (event.key) {
          case '=':
          case '+':
            event.preventDefault();
            zoomIn();
            break;
          case '-':
            event.preventDefault();
            zoomOut();
            break;
          case '0':
            event.preventDefault();
            setZoomLevel(1);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIn, zoomOut, setZoomLevel]);

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    setZoomLevel,
    handleWheel,
    isZooming,
  };
}
