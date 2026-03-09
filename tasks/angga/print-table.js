export const cetakTabel = (n) => {
  if (typeof n !== "number" || n < 0) throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");

  console.log("\n---- 2. Multiplication Table Program  ----");
  return [...Array(10)].map((v, i) => {
    return `${n} x ${i+1} = ${n * (i+1)}`;
  });
};