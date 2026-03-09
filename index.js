/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import angga from "./tasks/angga/index.js";

console.log("===========================================");
// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");
(function taskAngga() {
  // Success Task 1a
  try {
    const calculator = {
      num: 10,
      count(number) {
        return number * this.num; // 'this' merujuk ke objek kalkulator
      }
    };
    const task1a = angga.manualMap([1,2,3], function (n) {
      return this.count(n);
    }, calculator);
    console.log(task1a);
  } catch (err) {
    console.log(err.message);
  }

  // Failed 1: Param 1 is not an Array
  try {
    const task1a = angga.manualMap("not an array", (n) => {
      return n * 10;
    });
    console.log(task1a);
  } catch (err) {
    console.log(err.message);
  }
  
  // Failed 2: Param 2 is not a Function
  try {
    const task1a = angga.manualMap([1,2,3], "not a function");
    console.log(task1a);
  } catch (err) {
    console.log(err.message);
  }
  
  // Failed 3: Param 3 (optional) is not an Object
  try {
    const calculator = "try for error";
    const task1a = angga.manualMap([1,2,3], (n) => {
      return this.count(n);
    }, calculator);
    console.log(task1a);
  } catch (err) {
    console.log(err.message);
  }

  // Success Task 1b
  try {
    const condition = {
      num: 2,
      check(number) {
        return number % this.num === 0; // 'this' merujuk ke objek kalkulator
      }
    };
    const task1b = angga.manualFilter([1,2,3,4,5,6,7,8,9,10], function (n) {
      return this.check(n);
    }, condition);
    console.log(task1b);
  } catch (err) {
    console.log(err.message);
  }

  // Failed 1: Param 1 is not an Array
  try {
    const task1b = angga.manualFilter("not an array", (n) => {
      return n % 2 === 0;
    });
    console.log(task1b);
  } catch (err) {
    console.log(err.message);
  }
  
  // Failed 2: Param 2 is not a Function
  try {
    const task1b = angga.manualFilter([1,2,3,4,5,6,7,8,9,10], "not a function");
    console.log(task1b);
  } catch (err) {
    console.log(err.message);
  }
  
  // Failed 3: Param 3 (optional) is not an Object
  try {
    const calculator = "try for error";
    const task1b = angga.manualFilter([1,2,3,4,5,6,7,8,9,10], (n) => {
      return this.count(n);
    }, calculator);
    console.log(task1b);
  } catch (err) {
    console.log(err.message);
  }
})();
