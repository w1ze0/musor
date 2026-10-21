
let result = 5 + 5 + '5'; 
console.log("Результат:", result); // Виведе: "105"
console.log("Тип змінної result:", typeof result); // Виведе: "string"


let email = "myemail@example.com";
let hasAtSymbol = email.includes('@');
let emailLength = email.length;

console.log(`Чи містить email символ '@': ${hasAtSymbol}`);
console.log(`Загальна кількість символів в email: ${emailLength}`);


let word1 = "My";
let word2 = "name";
let word3 = "is";


let fullName = `${word1} ${word2} ${word3}`; 

fullName += " Viktor"; 
console.log("fullName:", fullName); 


let userName = "Олександра";
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
