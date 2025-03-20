# String Calculator Kata (Node.js + TypeScript)

This repository contains a step-by-step Test-Driven Development (TDD) implementation of the famous [String Calculator Kata](https://osherove.com/tdd-kata-1). The kata is designed to practice TDD, clean code, and incremental development.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Running Tests](#running-tests)
- [Step-by-Step TDD Commit History](#step-by-step-tdd-commit-history)
- [Kata Features](#kata-features)
- [References](#references)

---

## Overview

The **String Calculator** has a simple `add(string numbers)` function, which:

1. Returns a sum of numbers in a string.
2. Handles various delimiters (comma, newline, custom delimiters).
3. Throws exceptions for negative numbers.
4. Ignores numbers larger than 1000.
5. Supports multiple/custom-length delimiters.

The goal is to implement and **continuously test** each small requirement, committing each step to demonstrate your TDD process.

---

## Requirements

- **Node.js** (version 20 or higher recommended)
- **npm** or **yarn** (for package management)
- **TypeScript**, **Jest**, and related dev dependencies

---

## Installation and Setup

1. **Clone** this repository:
   ```bash
   git clone https://github.com/yuvi76/string-calculator.git
   cd string-calculator
   ```

2. **Install** dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. Verify your **TypeScript** and **Jest** setup by running the tests (see [Running Tests](#running-tests) below).

---

## Running Tests

To run the test suite (using Jest):

```bash
npm test
```
or
```bash
yarn test
```

If all the requirements are implemented correctly, you should see all tests **passing**.

---

## Kata Features

1. **Empty String**  
   Returns `0` when called with `""`.
2. **Single Number**  
   Returns the number itself (e.g., `"5"` => `5`).
3. **Two Numbers**  
   Splits on comma and sums them (e.g., `"1,2"` => `3`).
4. **Unknown Amount of Numbers**  
   Can handle multiple comma-separated numbers (`"1,2,3,4"` => `10`).
5. **Newline Delimiters**  
   Treats `\n` as a valid delimiter as well (e.g., `"1\n2,3"` => `6`).
6. **Custom Delimiter**  
   Defined with `//;\n1;2;3` => `6`.  
7. **Negative Numbers**  
   Throws an error listing all negative numbers: `negatives not allowed: -2, -4`.
8. **Numbers Larger Than 1000**  
   Ignored in the sum (`"2,1001"` => `2`).
9. **Any-Length Delimiter**  
   `//[***]\n1***2***3` => `6`.
10. **Multiple Delimiters**  
   `//[*][%]\n1*2%3` => `6`.  
   Also supports multi-char: `//[aa][bbb]\n1aa2bbb3` => `6`.

---

## References

- [TDD Kata: String Calculator](https://osherove.com/tdd-kata-1)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)

---

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).