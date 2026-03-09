/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

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

/**
 * Task Naufal
 */

import naufal from "./tasks/naufal/index.js";

console.log("===========================================");
// Use IIFE here

(function taskNaufal() {

  // manual Map function
   try {
    const arr = [1,2,3,4,5];
    const timesByTwo = naufal.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arr = 5;
    const timesByTwo = naufal.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch (error) {
    console.log(error.message);
  }

  // manual Filter function
   try {
    const arr = [1,2,3,4,5,6];
    const evenNumbers = naufal.manualFilter(arr, (n) => n % 2 === 0);
    console.log(evenNumbers);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arr = 5;
    const evenNumbers = naufal.manualFilter(arr, (n) => n * 2);
    console.log(evenNumbers);
  } catch (error) {
    console.log(error.message);
  }

  // cetakTabel
  // Success
  try {
    const cetakTabel = naufal.cetakTabel(3);
    console.log(cetakTabel);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const cetakTabel = naufal.cetakTabel("abc");
    console.log(cetakTabel);
  } catch (error) {
    console.log(error.message);
  }

  // countArray
  // Success
  try {
    const arr = [1,2,3,4,5];
    const countArray = naufal.countArray(arr);
    console.log(countArray);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const countArray = naufal.countArray(["abc", "a"]);
    console.log(countArray);
  } catch (error) {
    console.log(error.message);
  }
  
})();
console.log("===========================================");

/**
 * Task Rafi
 */

import rafi from "./tasks/rafi/index.js";

console.log("===========================================");
(function taskRafi() {

  console.log("-----Manual Map------");
  //manual map
  try {
    const arr =  [1,2,3,4,5];
    const timesByTwo = rafi.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  }catch(error) {
    console.error(error.message);
  }

  console.log("-----Manual Map GAGAL------");
  // manual map
  // gagal
  try {
    const arr = 5;
    const timesByTwo = rafi.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch(error){
    console.error(error.message);
  }

  console.log("-------Manual Filter-------");
  //manual filter
  try {
    const arr = [1,2,3,4,5];
    const takeGenap = rafi.manualFilter(arr, (n) => n % 2 === 0);
    console.log(takeGenap);
  } catch(error) {
    console.error(error.message);
  }

  console.log("-------Manual Filter GAGAL--------");
  //manual filter
  //gagal
  try {
    const arr = "Bukan array";
    const takeGenap = rafi.manualFilter(arr, (n) => n % 2 === 0);
    console.log(takeGenap);
  } catch(error){
    console.error(error.message);
  }

  console.log("-------Count Tabel--------");
  //cetak table
  try {
    rafi.cetakTable(3);
  } catch(error){
    console.error(error.message);
  }

  console.log("-------Count Tabel GAGAL---------");
  //cetak table
  //gagal
  try {
    rafi.cetakTable("abc");
  } catch(error){
    console.error(error.message);
  }


  console.log("--------Count Array-----------");
  // Count Array
  try {
    const hasilCount = rafi.countArray([1,2,3,4,5]);
    console.log(hasilCount);
  } catch(error) {
    console.error(error.message);
  }

  console.log("-------Count Array GAGAL-----------");
  //count array
  //gagal
  try {
    const hasilCount = rafi.countArray(123);
    console.log(hasilCount);
  } catch(error){
    console.error(error.message);
  }
})();

console.log("===========================================");