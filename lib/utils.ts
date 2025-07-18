import { Camera } from '@/types/canvas';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777'];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera,
  svg: SVGSVGElement | null
) {
  const rect = svg?.getBoundingClientRect();

  const x = e.clientX - (rect?.left ?? 0) - camera.x;
  const y = e.clientY - (rect?.top ?? 0) - camera.y;

  return { x, y };
}
