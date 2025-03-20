export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  let delimiter: RegExp = /[,\n]/;
  let input = numbers;

  // Check if there's a custom delimiter format: //x\n
  if (numbers.startsWith("//")) {
    // Find the end of the delimiter line
    const newlineIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, newlineIndex);
    input = numbers.substring(newlineIndex + 1);
  
    // Convert delimiter to a regex if it's just a single char
    delimiter = new RegExp(`[${customDelimiter}\n,]`);
  }

  // Replace \n with commas or handle via regex
  // But if we have a custom delimiter in 'delimiter', we can do a split via that
  const parts = input.split(delimiter);
  const ints = parts.map(str => parseInt(str, 10) || 0);
  return ints.reduce((acc, curr) => acc + curr, 0);
}
