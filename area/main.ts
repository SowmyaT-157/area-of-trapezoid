console.log("challenge 2 third time...")

import promptSync from 'prompt-sync';
const prompt = promptSync();

function divideByTwo(value:number): number{
    return value/2
}

const input = Number(prompt('Enter a value to divide by 2: '));

if (isNaN(input)) {
  console.log('Please enter a valid number.');
} else {
  const byTwovalue = divideByTwo(input);
  console.log(`Output: ${byTwovalue}`);
}


function add(a: number, b: number): number {
  return a + b;
}

const a = Number(prompt("Enter value for a: "));
const b = Number(prompt("Enter value for b: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Please enter valid numbers.");
} else {
  const result = add(a, b);
  console.log(`Output: ${result}`);
}