// Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
// Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
// Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
// Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
// Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".

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
    console.log{"Сума менша або дорівнює 10"}
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