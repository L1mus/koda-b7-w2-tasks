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
 * Task Ali
 */
import ali from "./tasks/ali/index.js";

console.log("===========================================");

(function taskAli() {
  const data = [1,2,3,4,5];
  const data2 = "string";
  const callbackFnFilter = (element,index,array) => {
    if(element % 2 === 0){
      return element;
    }
};  

const callbackFnMap = (element,index,array) =>{
  return element * 2;
};
//Success
  try {
    const manualMap = ali.manualBuilInMap(data,callbackFnMap);
    console.log(manualMap);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const manualFilter = ali.manualBuilInFilter(data,callbackFnFilter);
    console.log(manualFilter);
  } catch (error) {
    console.log(error.message);
  }
  //EdgeCase / Failed
    try {
    const manualMap = ali.manualBuilInMap(data2,callbackFnMap);
    console.log(manualMap);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const manualFilter = ali.manualBuilInFilter(data2,callbackFnFilter);
    console.log(manualFilter);
  } catch (error) {
    console.log(error.message);
  }
  //success
  try {
    const printTable = ali.printTable(3);
    console.log(printTable);
    console.log(printTableEdgeCase);
  } catch (error) {
    console.log(error.message);
  }
  // edgecase / failed
   try {
    const printTableEdgeCase = ali.printTable("abs");
    console.log(printTableEdgeCase);
  } catch (error) {
    console.log(error.message);
  }
  // success
  try {
    const count = ali.countArray([1,2,3,4,5]);
    console.log(count);
  } catch (error) {
    console.log(error.message);
  }
  // edgecase / failed
    try {
    const countEdgeCase = ali.countArray([1,2,3,4,5,"abc"]);
    console.log(countEdgeCase);
  } catch (error) {
    console.log(error.message);
  }
})();

console.log("===========================================");