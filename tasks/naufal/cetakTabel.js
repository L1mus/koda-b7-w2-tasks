export const cetakTabel = (n) => {
    console.log("\n---- cetak tabel program ----");
    if(typeof n !== "number" || n < 0){
        throw new Error("Parameter harus bertipe nomor dan harus nomor positif");
    }
    let res = "";
    for (let i = 1; i <= 10; i++) {
        const result = n * i;
        res += `
        ${n} x ${i} = ${result}`;   
    }
    return res;
};

