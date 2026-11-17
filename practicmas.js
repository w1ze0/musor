// // // // // // // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// // // // // // // // for(let i = 0; i < cart.length; i += 1) {
// // // // // // // //     console.log(cart[i]);
    
// // // // // // // // }
// // // // // // // // let sum = 0
// // // // // // // // for(let num of cart) {
// // // // // // // //     sum += num
// // // // // // // // }
// // // // // // // // console.log(sum);
// // // // // // // let sum = 0
// // // // // // // for(let num of cart) {
// // // // // // //     if(num % 2 === 0) {
// // // // // // //         sum += num
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(sum);
// // // // // // .

// // // // // //  Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// // // // // const numbers = [51, 18, 13, 24, 7, 85, 19];
// // // // // let smallestNumber = numbers[0]

// // // // // for(let s of numbers) {
// // // // //     if(smallestNumber >= s) {
// // // // //     smallestNumber = s
// // // // //     }
// // // // // }

// // // // // console.log(smallestNumber);

// // // // const array1 = [5, 10, 15, 20];
// // // // const array2 = [10, 20, 30];
// // // // let sum = 0
// // // // for(let item of array1) {
// // // //     sum += item
// // // // }  
// // // // for(let item of array2) {
// // // //     sum += item
// // // // } 
// // // // console.log(sum);

// // // const numbers = [-5, 10, -3, 20, 7, -8, 15];
// // // let sum = 0
// // // for(let num of numbers) {
// // //     if(num > 0) {
// // //         sum += num
// // //     }
// // // }
// // // console.log(sum);

// // // 1000-7

// // const letters = ['a', 'b', 'e', 'k', 'i', 'm', 'o', 't', 'u']
// // console.log(letters.length);
// // 1000-7

const grades = [85, 92, 78, 100, 65, 90, 88, 1000-7];
let sum = 0
for(let medio of grades) {
    sum += medio
}
const midle = Math.round(sum / grades.length)
console.log(midle);
let count = 0
for(let kill of grades) {
    if(kill >= 90) {
        count += 1
    }
}

console.log(count);

let grade = grades[0]
for(let kill of grades) {
    if(kill <= grade ) {
        grade = kill
    }
}

console.log(grade);





