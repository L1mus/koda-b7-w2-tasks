/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import ali from "./tasks/ali/index.js"

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

(function taskAli() {
  const data = [
  { id: 1, name: "Ali Mustadji", hobbies: ["running", "gaming", "swimming", "programming", "soccer", "basketball",]},
  { id: 2, name: "John Doe", hobbies: ["running", "programming", "sketting"] },
  { id: 3, name: "John Takeuchi", hobbies: ["gaming", "fishing", "swimming"] },
  { id: 4, name: "Sir Alex Ferguson ", hobbies: ["running", "basketball", "coaching"] },
  { id: 5, name: "Cristiano Messi", hobbies: ["running", "soccer", "swimming"],
  },
];
  try {
    const manualMap = ali.manualBuilInMap(data,...information);
    console.log(manualMap);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const manualFilter = ali.manualBuilInFilter(data,search);
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


