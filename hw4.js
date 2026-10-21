let textField1 = "Привіт";
let textField2 = "Світ";


if (textField1.trim() !== "" && textField2.trim() !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}



let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}



let text = "Я вивчаю JavaScript з нуля.";

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}



let checkNumber = 15;

if (checkNumber > 10 && checkNumber < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}



let inputName = "Віктор";
let inputEmail = "viktor@example.com";
let inputPassword = "superpassword123";

// 1. Ім'я не менше 3 символів
let isNameValid = inputName.length >= 3;


let isEmailValid = inputEmail.includes('@') && inputEmail.indexOf('.') > inputEmail.indexOf('@');

let isPasswordValid = inputPassword.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}
