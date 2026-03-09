export const countArray = (arr) => {
  if (Array.isArray(arr) && arr.every(v => typeof v === "number")) {
    console.log("\n---- 3. Multiplication Values on Array Program ----");
    return arr.reduce((acc, curr) => acc * curr, 1);
  }
  
  throw new Error("Parameter harus bertipe Array berisi nomor");
};