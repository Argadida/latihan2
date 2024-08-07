// sub class
// sub class merupakan turunan dari class baik itu properti maupun method

class Smartphone {
    color:string
    brand:string
    model:string
    isTKDN:boolean

    constructor (color:string, brand:string, model:string) {
        this.color = color
        this.brand = brand
        this.model = model
        this.isTKDN = false
    }

    charging ():void {
        console.log(`smartphone ${this.brand} sedang di cassh`);
        
    }
}

// const hp = new Smartphone("red", "samsung", "s22")
// console.log(
//     hp
// );


// // sub class
// // sub class akan menurun kan sifat dan prilaku dari class

// class Android extends Smartphone {
//     splitScreen(){
//         console.log(`smartphone ${this.brand} ini memiliki fitur split screen`);
        
//     }
// }

// const xiomi = new Android("black", "xiomi", "11")
// xiomi.charging()
// xiomi.splitScreen()


// class Ios extends Smartphone {
//     airDrop()  {
//         console.log(`smartphone ${this.brand} ini memiliki fitur air drop`);
        
//     }
// }

// const iphone = new Ios("Pink", "iphone", "15")
// iphone.charging()
// iphone.airDrop()






// menumpahkan suatu keadaan yang dimana sub class ingin mengubah sifat atau prilaku class

class Android extends Smartphone {
    // polymorphism

    layar:number

    constructor(color:string, brend:string, model:string, layar:number) {
        super(color, brend, model)
        this.layar = layar
    }
    splitScreen(){
        console.log(`smartphone ${this.brand} ini memiliki fitur split screen`);
        
    }

    showBrend(){
        console.log(`smartphone ini adalah ${this.brand} dgn ukuran layar ${this.layar}`);
        
    }

    // overiding methode
    // overiding method berfungsi untuk mengubah sifat atau prilaku dari method
    charging(): void {
        // super untuk memanggil methode yang di awal yakni di class smartphone
        super.charging()
        console.log(`smartphone ${this.brand} sedang di cassh dengan super charging`);
    }
}
const xiomi = new Android("black", "xiomi", "11", 6)
xiomi.splitScreen()
xiomi.showBrend()
xiomi.charging()




