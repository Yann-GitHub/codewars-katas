/*
  Title:
  Even or Odd

  Description:
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  
  Kata Link:
    https://www.codewars.com/kata/multiply

  Solutions Link:
    https://www.codewars.com/kata/multiply/solutions
*/

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
