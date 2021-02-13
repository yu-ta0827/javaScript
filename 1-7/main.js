// class human {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// let yamada = new human('yamada',25);

// console.log(yamada.name)

//Humanクラスを作成
// class Human {
//     constructor(name, height, weight, gender, age) {
//         //受け取った値をこのクラスで使えるようにしています。
//         this.name = name;
//         this.height = height;
//         this.weight = weight;
//         this.gender = gender;
//         this.age = age;
//         }

//         walk() {
//             console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました。`);
//         }
    
// }
// //「山田」オブジェクト作成
// let yamada = new Human('yamada', 170, 60, '男', 30);
// //「鈴木」オブジェクト作成
// let suzuki = new Human('suzuki', 180, 70, '男', 35);

// suzuki.walk();


// 課題

class Taiyaki {
    constructor(nakami){
        this.nakami = nakami;
    }

    create() {
        console.log(`中身は${this.nakami}です。`)
    }
}

let anko =new Taiyaki('あんこ');
let cream =new Taiyaki('クリーム');
let cheese =new Taiyaki('チーズ');

anko.create();
cream.create();
cheese.create();