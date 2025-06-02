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