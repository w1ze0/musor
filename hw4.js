const firstZminna = prompt("vedi shos'")
const secondZminna = prompt("vedi shos' 2")

if(firstZminna == null) {
    console.log("apilyaciy ne odobreno"); 
} else {
    console.log("apilyaciy odobreno");
}

const numFirst = prompt("vedi 4islo")
const numSecond = prompt("vedi inshe")
const sum = numFirst + numSecond

if(sum > 10) {
    console.log("Сума більша за 10");
} else if(sum === 10) {
    console.log("Сума rivno дорівнює 10");
} else {
    console.log("Сума менша або дорівнює 10")
}

const tekst = prompt("vedi text'")

if(text.toLowercase(tekst) == text.toLowercase().includes("javascript")) {
    console.log("Текст містить слово JavaScript")
} else {
    console.log("Текст не містить слово JavaScript");
}


const num = 15

if(num > 10 && num < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число ne входить в діапазон від 10 до 20");
}

const name = "Zakaria"
const gmail = "w1ze@cs2.com"
const parol = "w1ze3152"

if(name.length >= 3 && gmail.includes("@") && parol.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}


