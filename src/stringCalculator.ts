export function add(numbers: string): number {
  // 1. If the input is empty, return 0 immediately
  if (!numbers) {
    return 0;
  }
  return parseInt(numbers);
}
