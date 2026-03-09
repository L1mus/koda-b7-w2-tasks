export function cetakTabel(angka){
    if(typeof angka === "number" && angka > 0){
        for(let i = 1; i <= 10; i++){
        console.log(`${angka} x ${i} = ${angka*i}`);
    }
    }else{
        console.log("Parameter harus bertipe data nomor dan harus nomor positif"); 
    }
}

cetakTabel(10);
