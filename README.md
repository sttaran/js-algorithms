# js-algorithms
 This readme files is generated with copilot.

Big O Notation, Data Structures, Algorithms, and Sorting Algorithms in JavaScript.

## Big O Notation

Big O Notation is a way to formalize fuzzy counting. 
It allows us to talk formally about how the runtime of an algorithm grows 
as the input grows.

We say that an algorithm is O(f(n)) if the number of simple operations the 
computer has to do is eventually less than a constant times f(n), as n increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!
```json
{
  "O(1)": "Constant Time",
  "O(n)": "Linear Time",
  "O(n^2)": "Quadratic Time",
  "O(n!)": "Factorial Time"
}
```

Examples

Next function has a time complexity of O(1) because it doesn't matter the size of the input, the number of operations is always the same.
```json
const addUpTo = (n) => {
    return n * (n + 1) / 2;
}
```

Next function has a time complexity of O(n) because the number of operations grows 
linearly with the size of the input.
```json
const addUpTo = (n) => {
      let total = 0;
      for (let i = 1; i <= n; i++) {
      total += i;
  }
return total;
}
```

Next function has a time complexity of O(n^2) because the number of operations grows
quadratically with the size of the input.
```json
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

## Simplifying Big O Expressions

**Constants Don't Matter**

- O(2n) is O(n)
- O(500) is O(1)
- O(13n^2) is O(n^2)

**Smaller Terms Don't Matter**

- O(n + 10) is O(n)
- O(1000n + 50) is O(n)
- O(n^2 + 5n + 8) is O(n^2)

**Big O Shorthands**

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

A couple of examples:

Next function has a time complexity of O(n) because the number of operations grows linearly with the size of the input.

```json
const logAtLeast5 = (n) => {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
```

This function has a time complexity of O(1) because the number of operations is always the same.

```json
const logAtMost5 = (n) => {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
```

**Space Complexity**

The amount of memory that an algorithm uses to store data and get the job done.

Auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs.

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

An Example:

```json
const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

The space complexity of the function above is O(1) because the amount of memory used by the algorithm is always the same, 
regardless of the size of the input.

Another example:

```json
const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
```

The space complexity of the function above is O(n) because the amount of memory used by the algorithm grows linearly 
with the size of the input.

As the input grows, the amount of memory used by the algorithm grows.

### Logarithms

A logarithm is the inverse of exponentiation.

- log2(8) = 3  -> 2^3 = 8
- log2(value) = exponent  -> 2^exponent = value

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

Examples:
- log2(8) = 3  -> 2^3 = 8
- log2(25) = 4.64  -> 2^4.64 ≈ 25
- log2(1) = 0  -> 2^0 = 1
- log2(2) = 1  -> 2^1 = 2
- log2(4) = 2  -> 2^2 = 4
- log2(16) = 4  -> 2^4 = 16
- log2(32) = 5  -> 2^5 = 32
- log2(64) = 6  -> 2^6 = 64

Certain algorithms have logarithmic time complexity.
- searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve logarithms
- recursion sometimes involves logarithmic space complexity

### Recap

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high-level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get used to it!