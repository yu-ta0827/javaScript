// let number =1;

// while (number <= 100) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log(number);
//     number++;
// }while (number <= 100);

// for (let number =1; number <= 100; number++) {
//     console.log(number);
// }

// let number = 0;
// while (number < 5) {
//     if (number === 3) {
//         break;
//     }
//     console.log(number);
//     number++;
// }

// let number = 0;
// while (number < 5) {
//     if (number === 3) {
//         number++;
//         continue;
//     }
//     console.log(number);
//     number++;
// }

// 課題

let num = 1;

while (num <= 100) {
    // ３と５の倍数の場合
    if(num%3 === 0 && num%5 === 0) {
        console.log('FizzBuzz!!');
    } else if(num%3 === 0) {
    // ３の倍数の場合
        console.log('Fizz');
    } else if(num%5 === 0) {
    // ５の倍数の場合
        console.log('Buzz');
    } else {
        console.log(num);
    }
    num++;
}