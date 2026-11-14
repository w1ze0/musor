//Напиши скрипт перевірки підписки користувачапід час доступу до контенту. Єтри типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip

// const subcribe = "pro";
// let messege = "";
// switch (subcribe) {
//   case "pro":
//   case "vip":
//     messege = "e dostup";
//     break;
//   case "free":
//     messege = "dostupa ne mae kupi pidpisku (meni)";
//     break;
//   default:
//     messege = "ne me takogo";
// }
// console.log(messege)

// let browser = "Edge"
// let textContent = ""
// // if(browser == 'Edge') {
// //   textContent = "You've got the Edge!";
// // } else if (browser == 'Chrome'|| browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera') {
// //   textContent = 'Ми підтримуємо і ці браузери' ;
// // } else {
// //  textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
// // } 
// switch(browser) {
//     case "Chrome":
//     case "Safari":
//     case "Opera":
//     case "Firefox":
//     textContent = 'Ми підтримуємо і ці браузери' ;
//     break
//     case "Edge":
//     textContent = "You've got the Edge!";
//     break
//     default:textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }
// console.log(textContent);

// let a = 0;

// // if (a === 0) {
// //    p.textContent = 0;
// // }
// // if (a === 1) {
// //   p.textContent = 1;
// // }

// // if (a === 2 || a === 3) {
// //   p.textContent = '2,3';
// // }

// switch(a) {
//     case 0:
//     textContent = 0;
//     break
//     case 1:
//     textContent = 1;
//     break
//     case 2:
//     case 3:
//     textContent = `2,3`;    
//     break
//     default:textContent = "not found"
// }

// console.log(textContent);

// Написати програму яка перевіряє чи введене число через input потрапляє в діапазон від 55 до 99 включно. 
// Якщо так, вивести на екран 
// "Число потрапляє в діапазон". Якщо ні, вивести "Число не потрапляє в діапазон".

// const input = 53

// if(input >= 55 && input <= 99) {
//     console.log("Число потрапляє в діапазон");
// } else {
//     console.log("Число не потрапляє в діапазон"); 
// }

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100). 
// До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.

// let group
// const age = 53

// switch(true) {
//     case age > 0 && age < 16:
//     group = "diti"
//     break
//     case age > 16 && age < 60:
//     group = "dorosli"
//     break
//     case age > 60:
//     group = "pensioneri"
//     break
//     default:group = "ne narodjeni"
// }
// console.log(group);

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі
// букв імені і 
// прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, 
// Сташко - 6 літер. Виводимо 12. Використовувати вбудований метод length.

// const name = "up"
// const secondName = "s"
// let sumLength

// switch(true) {
//     case name.length >= 4 && secondName.length >= 5:
//     sumLength = name.length + secondName.length
//     break
//     default:sumLength = "Ups"
// }

// console.log(sumLength);

