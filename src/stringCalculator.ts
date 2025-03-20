export function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }

  let delimiters: string[] = [",", "\n"];
  let input = numbers;

  // Check if there's a custom delimiter format: //x\n
  if (numbers.startsWith("//")) {
    // Find the end of the delimiter line
    const newlineIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, newlineIndex);
    input = numbers.substring(newlineIndex + 1);

    const bracketRegex = /\[([^\]]+)\]/;
    const match = bracketRegex.exec(customDelimiter);

    if (match) {
      // e.g. [***]
      delimiters.push(match[1]);
    } else {
      // single char
      delimiters.push(customDelimiter);
    }
  }

  // Build a regex that splits by all delimiters
  // Escape special chars in the delimiter
  const escaped = delimiters.map((d) =>
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const delimiterRegex = new RegExp(escaped.join("|"), "g");

  const parts = input.split(delimiterRegex);
  const ints = parts.map((str) => parseInt(str, 10) || 0);
  
  // Collect negatives
  const negatives = ints.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return ints.filter((num) => num <= 1000).reduce((acc, curr) => acc + curr, 0);
}
