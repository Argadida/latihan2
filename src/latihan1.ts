// 1
function minimal(a:number, b:number) {
    return a < b ? a : b;
}

const minimal1 = minimal(2, 1)
console.log(minimal1);

// 2
function power(a:number, b:number) {
    return Math.pow(a, 2)*b
}

const power1 = power(3, 3)
console.log(power1);

// 3
function penjumlahanBilangan(a: number[], b: string) {
    return
}


// 4
class Animal {
    name:string
    age:number
    isMammal:boolean

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
        this.isMammal = true
    }
}

class Rabbit extends Animal {
    eat () {
        console.log(`${this.name} yang berumur ${this.age} sedang makan!`);
        
    }
}

class Eagle extends Animal {
    speed:number = 220;
    constructor(name:string, age:number, speed:number) {
        super(name,age)
        this.speed = speed
    }

    fly() {
        console.log(`${this.name} yang berumur ${this.age} sedang terbang!`);
    }

    protected runn() {
        console.log(`${this.name} Berlari dengan kecepatan ${this.speed} km`);
        
    }
}

class eagleRun extends Eagle {
    fly() {
        console.log(`${this.name} yang berumur ${this.age} sedang terbang!`);
        
    }

    runeagle():void {
        super.runn
    }
}

const myRabbit = new Rabbit ("labi",2)
console.log(myRabbit);
myRabbit.eat()

const myEagle = new Eagle ("ello",4,220)
console.log(myEagle);
myEagle.fly()
// myEagle.runn()  //error access modifier protected
