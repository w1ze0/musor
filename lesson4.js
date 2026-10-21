// 0 false
// 1 true

// if якщо
// if(умова) {
//     блок діл (наприелад console.log)
// }

// const age = 14

//if...else
// if (умова) {
//   блок дії коли тру
// } else {
//   блок дії коли фолс
// }

// const n = 7

// if(n === 5) {
//     console.log("no perfect")
// }

// if(n === 6) {
//     console.log("no perfect")
// }

// if(n === 7) {
//     console.log("perfect")
// }

// const isRain = true
// if(isRain)  {
//     console.log("vizmi parasolku")
// } else {
//     console.log("ne beri parasolku")
// }


// const age = 14

// if(age >= 18) {
//     console.log("ti mojesh voditi mashidnu");
// } else {
//     console.log("ti ne mojesh vodditi");
// }



// без ліміт - 0%
// студентський - 15%
// ранковий - 20%
// з тренером + 50%

// let price = 70
// let sale = 0

// let status = "з тренером"

// if(status === "з тренером") {
//     console.log((price += (price * 50) / 100))
// } else if(status === "ранковий") {
//     console.log((price -= (price * 20) / 100))
// }else if(status === "студентський") {
//     console.log((price -= (price * 15) / 100))
// } else {
//     console.log(price)
// }

//напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 45;

// if(number >= x1 && number <= x2) {
//     console.log("popav")
// } else {
//     console.log("mimo")
// }

// const zarplata = 3000

// if(zarplata >= 1000 && zarplata < 2000) {
//     console.log("1 riven")
// } else if(zarplata >= 2000 && zarplata < 3000) {
//     console.log("2 riven")
// } else if(zarplata >= 3000) {
//     console.log("3 riven")  
// } else {
//     console.log("ne dam groshei")
// }

// if ("0") {
//  console.log( 'Привіт' );
// }



// Використовуючи if..else, напишіть код, що отримує число з інпуту і потім виводить повідомлення на екран:
// 1, якщо значення більше нуля,
// -1, якщо меньше нуля,
// 0, якщо дорівнює нулю.

const number = Number(prompt("write 1 number"))

if(number > 0) {
    console.log(1)
} else if(number == 0) {
    console.log(0);
} else {
    console.log(-1)
}