export function add(numbers: string): number {
  // 1. If the input is empty, return 0 immediately
  if (!numbers) {
    return 0;
  }

  // 2. If the input is a single number, return the number itself
  if (!numbers.includes(",")) {
    return parseInt(numbers);
  }

  return parseInt(numbers);
}
