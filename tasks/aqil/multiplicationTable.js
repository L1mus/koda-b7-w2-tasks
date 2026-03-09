export function cetakTabel (n) {
    console.log("==========Multiplication Table Number==========");
    if (typeof n !== "number" || n <= 0) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor posistif");
    };
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}