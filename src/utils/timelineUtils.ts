export function getItemColor(id: number): { bg: string; text: string } {
  const colorPalette = [
    { bg: 'bg-blue-500', text: 'text-white' },
    { bg: 'bg-emerald-500', text: 'text-white' },
    { bg: 'bg-purple-500', text: 'text-white' },
    { bg: 'bg-pink-500', text: 'text-white' },
    { bg: 'bg-amber-500', text: 'text-white' },
    { bg: 'bg-indigo-500', text: 'text-white' },
    { bg: 'bg-red-500', text: 'text-white' },
    { bg: 'bg-orange-500', text: 'text-white' },
    { bg: 'bg-teal-500', text: 'text-white' },
    { bg: 'bg-cyan-500', text: 'text-white' },
    { bg: 'bg-lime-600', text: 'text-white' },
    { bg: 'bg-rose-500', text: 'text-white' },
  ];
  
  return colorPalette[id % colorPalette.length];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

export function calculateDurationInDays(start: string, end: string): number {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}
