// buatlah method register pada class User dengan ketentuan sbg berikut
// 1.a = a, maka akan mengembalikan nilai "register berhasil"\




class Profile {
    user: {
        username: string,
        password: string
    }[]

    constructor() {
        this.user = [{
            username: "ihsan",
            password: "123"
        },
        {
            username: "rayya",
            password: "12345"
        },
        {
            username: "hilmi",
            password: "12356"
        },
        {
            username: "aziz",
            password: "12378"
        }]
    }

    login({ username, password }: { username: string, password: string }) {
        for (const pengguna of this.user) {
            if (pengguna.username === username && pengguna.password === password) {
                return {
                    msg: "berhasil",
                    status: "berhasil login"
                }
            }
        }
        return {
            msg: "gagal",
            status: "gagal login"
        }
    }
}

const arga = new Profile();
console.log(arga.login({ username: "arga", password: "12356" }));


// class profile {
//     user: {
//         ussername : string
//         password : string
//     }[]


//     constructor () {
//         this.user = [{
//             ussername : "ihsan",
//             password : "123"
//         },
//         {
//             ussername : "rayya",
//             password : "12345"
//         },
//         {
//             ussername : "hilmi",
//             password : "12356"
//         },
//         {
//             ussername : "aziz",
//             password : "12378"
//         }]
//     }


//     login ({ussername, password}: {ussername: string, password: string}) {
//         for (let pengguna of this.user) {
//             if(pengguna.ussername === ussername && pengguna.password === password) {
//                 return {
//                     msg:"berhasil",
//                     status:"berhasil login"
//                 }
//             }else {
//                 return {
//                     msg:"gagal",
//                     status:"gagal login"
//                 }
//             }
//         }
//     }

// }


// const arga = new profile
// console.log(arga.login({ussername: "hilmi", password: "12356"}))

