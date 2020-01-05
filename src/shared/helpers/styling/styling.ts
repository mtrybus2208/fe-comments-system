export const pixelify = (value: number | string): number | string =>
  typeof value === 'number' ? `${value}px` : value;
