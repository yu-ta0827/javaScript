let num1 = 10;
let num2 = 4;
let result;
// 足し算
result = num1 + num2;
console.log(result);
// 引き算
result = num1 - num2;
console.log(result);
// 掛け算
result = num1 * num2;
console.log(result);
// 割り算
result = num1 / num2;
console.log(result);
// あまり値
result = num1 % num2;
console.log(result);

let lastName = '田中';
let firstName= '一郎';
let fullName = lastName + firstName;
console.log(fullName);

// let x =10;
// x++;
// console.log(x);
// let y = 20;
// y--;
// console.log(y);

console.log(10 === 10); //true        「両辺が等しい」という条件 → 正しいのでtrue
console.log(10 === 5); //false        「両辺が等しい」という条件 → 正しくないのでfalse
console.log(10 !== 5); //true        「10と5は等しくない」という条件 → 正しいので true
console.log(10 > 20); //false        「10と20を比べて、10の方が大きい」という条件 → 正しくないのでfalse
console.log(10 <= 10); //true        「左辺の10は右辺の10という値以上か」という条件 → 正しいのでtrue

console.log('10' === 10); //false
console.log('10' == 10); //true

let score = 0;

if (score >=70) {
    console.log('合格');
} else if(score === 0) {
    console.log('０点はまずいです。');
} else {
    console.log('不合格');
}

// let a = 15
// if(a>=10 && a<=20) {
//     console.log(a);
// }

// let b = 10;
// let c = 15;
// // 偶数のif文
// if (b % 2 ===0) {
//     console.log(b)
// }
// // 奇数のif文
// if (c % 2 !==0){
//     console.log(c)
// }


// 課題1
let a =11;
let b =18;

if (a !== 10) {
    console.log('１０ではない');
}

if(b>10 && b<20 && b%2 === 0){
    console.log('bは１０以上２０未満でありさらに偶数である。');
}
// 課題２
let x = 10;

if (x>=10 && x<=20){
    console.log('成功です');
} else {
    console.log('失敗です');
}
// 課題３
let y = 0;

if (y%2 === 0) {
    console.log('偶数です');
} else if(y%2 !== 0) {
    console.log('奇数です');
}