// let scores = [50, 60, 70, 80, 90];

// console.log(scores,length);

// let scores = [50, 60, 70, 80, 90];
// for (let i = 0; i < scores.length; i++) {
//     console.log("得点は" + scores[i] + "点です");
// }

// let human = {
//     name: 'yamada',
//     height: 170,
//     weight: 60,
//     gender: '男',
//     age: 30,
// };

// console.log(human['name']);

// 課題1
let scores = [10,15,20,25];
console.log(scores);
for (let i = 0; i <scores.length; i++) {
    if(scores[i]%2 === 0) {
        console.log(scores[i]+'は偶数です。');
    }
}

// 課題2

let car = {
    gass: 20.5,
    num: 1234,
}
console.log(car);
console.log('ガソリンは'+car['gass']+'です。');
console.log('ナンバーは'+car['num']+'です。');