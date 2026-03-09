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

  
  //manual map
  // Success
  console.log("-----Manual Map Program------");
  try {
    const arr =  [1,2,3,4,5];
    const timesByTwo = rafi.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  }catch(error) {
    console.error(error.message);
  }

  // Failed
  try {
    const arr = 5;
    const timesByTwo = rafi.manualMap(arr, (n) => n * 2);
    console.log(timesByTwo);
  } catch(error){
    console.error(error.message);
  }

  console.log("-----Manual Filter Program------");
  //manual filter
  // Success
  try {
    const arr = [1,2,3,4,5];
    const takeGenap = rafi.manualFilter(arr, (n) => n % 2 === 0);
    console.log(takeGenap);
  } catch(error) {
    console.error(error.message);
  }

  // Failed
  try {
    const arr = "Bukan array";
    const takeGenap = rafi.manualFilter(arr, (n) => n % 2 === 0);
    console.log(takeGenap);
  } catch(error){
    console.error(error.message);
  }

  console.log("-----Manual Cetak Table Program------");
  //cetak table
  // Success
  try {
    rafi.cetakTable(3);
  } catch(error){
    console.error(error.message);
  }

  // cetak table
  // Failed
  try {
    rafi.cetakTable("abc");
  } catch(error){
    console.error(error.message);
  }

  console.log("-----Count Array Program------");
  // Count Array
  // Success
  try {
    const hasilCount = rafi.countArray([1,2,3,4,5]);
    console.log(hasilCount);
  } catch(error) {
    console.error(error.message);
  }

  // Failed
  try {
    const hasilCount = rafi.countArray(123);
    console.log(hasilCount);
  } catch(error){
    console.error(error.message);
  }
})();
console.log("===========================================");

/**
 * Task Dwiki
 */

import dwiki from "./tasks/dwiki/index.js";

console.log("===========================================");
// Use IIFE here

(function taskDwiki() {
  // Tugas 1 map dan filter dwiki
  // Success
  try {
    const angka = [1,2,3];
    const hasil = dwiki.manualMap(angka, (item) => item * 2);

    console.log(hasil);
    const angka2 = [5, 10, 15, 3, 20];
    const hasil2 = dwiki.manualFilter(angka2, (item) => item >= 10);
    console.log(hasil2);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arrBaru = dwiki.manualMap(1,2,3,4,5);
    console.log(arrBaru);
    const hasil = dwiki.manualFilter(12, 5, 8, 130, 44);
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
  // Tugas 2 cetak tabel dwiki
  // Success
  try {
    const hasil = dwiki.cetakTabel(10);
    hasil;
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const hasil = dwiki.cetakTabel("abc");
    hasil;
  } catch (error) {
    console.log(error.message);
  }
  // Tugas 3 count Array dwiki
  // Succes
  try {
    const hasil = dwiki.countArray([1,2,3,4,5]);
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const hasil = dwiki.countArray(1,2,3,4,5);
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
  
})();
console.log("===========================================");
/**
 * Task Angga
 */

import angga from "./tasks/angga/index.js";

console.log("===========================================");
(function taskAngga() {
  // Success Task 1a
  try {
    const task1a = angga.manualMap([1,2,3], function (n) {
      return n * 10;
    });
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

  // Success Task 1b
  try {
    const task1b = angga.manualFilter([1,2,3,4,5,6,7,8,9,10], function (n) {
      return n % 2 === 0;
    });
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

  // Success Task 2
  try {
    const task2 = angga.cetakTabel(3);
    console.table(task2);
  } catch (err) {
    console.log(err.message);
  }

  // Failed Task 2
  try {
    const task2 = angga.cetakTabel("abc");
    console.table(task2);
  } catch (err) {
    console.log(err.message);
  }

  // Failed Task 2
  try {
    const task2 = angga.cetakTabel(-1);
    console.table(task2);
  } catch (err) {
    console.log(err.message);
  }

  // Success Task 3
  try {
    const task3a = angga.countArray([1,2,3,4,5]);
    const task3b = angga.countArray([2,2,2,2,2]);
    console.log(task3a);
    console.log(task3b);
  } catch (err) {
    console.log(err.message);
  }

  // Failed Task 3
  try {
    const task3 = angga.countArray([1,2,3,4,"asd"]);
    console.log(task3);
  } catch (err) {
    console.log(err.message);
  }
})();
console.log("===========================================");
