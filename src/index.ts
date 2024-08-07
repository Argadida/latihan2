// let nama: string = "Dida";
// let umur: number = 17;


// let pelajar: {
//     nama: String,
//     umur: number,
//     isPelajar: boolean,
//     alamat?: string
// }

// pelajar = {
//     nama: "Dida",
//     umur: 17,
//     isPelajar: true,
//     alamat: "jalan raya"
// }

// pelajar = {
//     nama: "arga",
//     umur: 18,
//     isPelajar: false
// }





// let bilangan1: number = 26.3;
// let bilangan2: number = 27.5;

// function tambah(bilangan1: number, bilangan2: number): number {
//     return bilangan1 * bilangan2
// };

// console.log(tambah(bilangan1, bilangan2))





// let angka: (number | string | boolean)[] = [12, "dida", true]



// interface produk {
//     id: number,
//     nama: String,
//     harga: number,
//     price? : number
// };

// const produk1: produk = {
//     id: 1,
//     nama: "Nasi kotak",
//     harga: 10000
// }

// const produk2: produk = {
//     id: 2,
//     nama: "Nasi goreng",
//     harga: 15000,
//     price: 20000
// };



// //nested object

// interface detialProduk {
//     manufacturer: string,
//     year: number
// };

// interface itemProduk {
//     id: number;
//     name: string;
//     price: number;
//     pices?: number;
//     produkDetai: detialProduk;

// };


// const item1: itemProduk = {
//     id: 1,
//     name: "lapoto HP",
//     price: 10000,
//     pices: 12,
//     produkDetai : {
//         manufacturer: "HP Corp",
//         year: 2020
//     },
// }; 



// function volumeBalok (panjang: number, lebar: number, tinggi:number):string{
//   const rumusBalok = panjang * lebar * tinggi
//   return `volume dari sebuah balok nya adalah ${rumusBalok}`;
// };

// const volumeBalok1 = volumeBalok (10,2,5)
// console.log(volumeBalok1);





// // jika ingin  membuat function yang salah satu nilai dr argument nya optional maka menggunakan angka defauld
// // contoh:

// function pertambahan(a:number, b:number, c=0):number {
//     const hasil = a + b + c
//     return hasil
// }
// //  pemanggilan nilai nya harus berurut, tdk berlaku untuk parametr object
// const hasil1 = pertambahan (10,2,4)
// const hasil2 = pertambahan (10,2)

// console.log(hasil1, hasil2)

// //  contoh function yang menggunakan Object
// // parameter object
// function pembagian({a, b, c=1}:{a:number, b:number, c?:number}) {
//   const hasil = (a/b)*c;
//   return hasil
// };

// // untuk pemanggilan nilai dari object nya tidak harus berurutan 
// // seperti contoh pada "jawaban2"
// const jawaban1 = pembagian({a:10, b:2, c:2});
// const jawaban2 = pembagian({b:5, a:10});

// console.log("jawaban1",jawaban1);
// console.log("jawaban2",jawaban2);

// // membuat function yang memiliki return khusus
// // berguna untuk menjaga exitensi kesalahan 
// // contoh

// interface SatuInterface {
//   a:number;
//   b:string
// }

// interface ResponAPI {
//   msg:string;
//   status:string;
// }

// function satu ({a, b}:SatuInterface) : ResponAPI {
//   return {
//     msg : "terkirim",
//     status: "berhasil"
//   }
// }

// satu({a:2, b: "ok"});

// // soal 1
// function soal1 (arrayNya:number[], numNya:number) :boolean {
//   return arrayNya.includes(numNya)
// }

// const arayNya:number[] = [1,2,3,5,6,7,8,10]

// console.log(soal1(arayNya,4));
// console.log(soal1(arayNya,10));

// // cth Class pada TS
// class User {
//   id:number
//   firtsName:string
//   latsName:string

//   // letika kita membuat sebuah class maka harus ada construktor nya
//   // ketika ingin memanggil properti di dalam kelas harus dengan "this"
//   constructor (id:number, firtsName:string, latsName:string) {
//     this.id = id
//     this.firtsName = firtsName
//     this.latsName = latsName
//   }

//   // contoh method nya sama seperti function
//   login () :boolean {
//     if(this.id === 1) {
//       return true
//     }else {
//       return false
//     }
//   }
// }

// const MyUser = new User(1, "Arga", "Dida");
// console.log(MyUser);

// const SecconUser = new User(3, "Lintang", "Kejora");
// console.log(SecconUser);

// console.log(MyUser.login());
// console.log(SecconUser.login());









