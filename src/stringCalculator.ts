export function add(numbers: string): number {
  // 1. If the input is empty, return 0 immediately
  if (!numbers) {
    return 0;
  }

  // Replace newlines with commas so we can split on a single delimiter
  const unified = numbers.replace(/\n/g, ",");
  const parts = unified.split(",");
  const ints = parts.map(str => parseInt(str, 10) || 0);
  return ints.reduce((acc, curr) => acc + curr, 0);
}
