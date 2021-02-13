// 課題１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    // 配列の数だけループさせる
    for (i = 0; i < num.length; i++) {
        // ループの順番のi番目の配列が偶数か確認する
        if(num[i]%2 === 0) {
            console.log(num[i] + 'は偶数です');
        }
    }
        
}

isEven(numbers);
// 課題２

class getNumGas {
    constructor(gas,number){
        this.gas = gas,
        this.number = number
    }

    create() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です`);
    }
}

let car = new getNumGas(150,12345);

car.create();