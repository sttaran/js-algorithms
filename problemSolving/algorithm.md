Algorithm is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

Almost everything you do in programming involves some kind of algorithm. It's the foundation of computer science and programming.

### Problem Solving

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor

### Understand the problem

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
- How should I label the important pieces of data that are a part of the problem?

Example:

Write a function which takes two numbers and returns their sum.

1. Can I restate the problem in my own words?
   - Implement addition
2. What are the inputs that go into the problem?
   - Integers?
   - Floats?
   - What about string for large numbers?
3. What are the outputs that should come from the solution to the problem?
    - Integers?
    - Floats?
    - String?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
    - Yes

### Explore concrete examples

Coming up with examples can help you understand the problem better.

Examples also provide sanity checks that your eventual solution works how it should.

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

Example:

Write a function which takes in a string and returns counts of each character in the string.

```json
charCount("aaaa"); // {a: 4}

charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}
```

Do we need to worry about case sensitivity? 
Do we need to worry about spaces?
Do we need to worry about characters that are not letters?
Do we need to worry about characters that are not present in the input?

### Break it down

Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any conceptual issues or misunderstandings before you dive in.

Example:

Write a function which takes in a string and returns counts of each character in the string.

```json
function charCount(str) {
    // make object to return at end
    // loop over string, for each character
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if the char is something else (space, period, etc.) don't do anything
    // return object at end
}

charCount("hello");
/*
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
*/

charCount("Your PIN number is 1234");
/*
{
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
}
*/
```

### Solve/Simplify

If you can't solve the problem, solve a simpler problem.

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

Example:

Write a function which takes in a string and returns counts of each character in the string.

```json
function charCount(str) {
    const obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
```

### Look back and refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

Example:

Write a function which takes in a string and returns counts of each character in the string.

```json
function charCount(str) {
    const obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
```