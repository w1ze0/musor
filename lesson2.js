// const hello = "I like javascript"

// alert(hello)  //povidomlenya


// const bye = confirm("You want to leave this site")

// console.log(bye)

// const count = prompt("How many kg of sugar do you want")

// console.log(count)

// const str = "bye"
// const num = 15
// const flag = true
// const txt = "hello"

// console.log(typeof str)

// const me = 14
// const friend = 1489

// console.log(me + friend)

// const cours = "javascript"

// alert("ya viv4ay " + cours)

// const rokiv = prompt("How many years old are you")

// console.log(rokiv)

//Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвойте змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвой товару нову ціну - 20000. Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'

// const macBook = "mcBook"
// let money = 10000

// console.log("obrano " + macBook + "цina " + money)

// money = 20000

// console.log("obrano " + macBook + "цina " + money)

// const aPlant = 5
// const bPlant = 10

// console.log(aPlant + bPlant)
// console.log(aPlant - bPlant)
// console.log(aPlant * bPlant)
// console.log(aPlant / bPlant) // dilenya
// console.log(aPlant % bPlant)

// let c = 0

// c++
// c--

// console.log(c)


// console.log(===) //sTr0gO porivnyanya
// console.log(==) //ne sTr0gO


// console.log("!=" != 5)
// console.log("!==" !== 5)

// console.log("===", "5" === 5) //false
// console.log("!==" "5" !== 5) //true


// console.log(typeof a)

// const a = "3.14dbor"
// console.log(Number.parseInt(a))
// console.log(Number.parseFloat(a))

// const validNumber = Number('51');
// const invalidNumber = Number('qweqwe');
// console.log(Number.isNaN(validNumber))
// console.log(Number.isNaN(invalidNumber))

// parsInt peretvorie z rydka cile 4islo
//nan = non a number

// console.log(0.30000000000000004 === .30000000000000004)
// console.log(0.1 + 0.2 )

// console.log(Math.floor(1.7)) //do menshogo
// console.log(Math.ceil(1.7)) //do bilshogo
// console.log(Math.round(1.7)) //do blis4ogo

// console.log(Math.max(1, 5, -10, 15, 0, 10000)) //znaide naibilshe 4islo
// console.log(Math.min(1, 5, -10, 15, 0, 10000)) //znaide naimenshe 4islo

// console.log(Math.pow(2, 4)) //v stepeni
// console.log(2 ** 4) //v stepeni

// console.log(Math.sqrt(9)) //v korini

// console.log(Math.random()) //ce random debil cej elementarno
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 5 * 21));

// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних.  Значення площі повинно зберігається в числовій змінній.

// const height = 23
// const width = 10
// const sqr = height * width 

// console.log(sqr, 'cm')

//Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м , результат та дані повинні зберігатися в змінних.

// const height = 10
// const d = 4
// const r = d/2
// const V = Math.PI * r**2 * height       

// console.log(V)

// У прямокутного трикутника дві сторони зі значенням 3 і 4. Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **). Результат та дані повинні зберігатися в змінних.

// const b = 3 
// const a = 4 
// const i = Math.sqrt(b**2 + a**2)

// console.log(i)

// const isEqual = 0 == false

// console.log(isEqual)

// const isEqual = 0 != false

// console.log(isEqual)

// const isEqual = '12' == 12;

// console.log(isEqual)

//  У змінну random згенеруйте випадкове число від 3 до 19 включно. Результат виведіть в консоль

// console.log(Math.floor(Math.random() *17 + 3))

// console.log(Math.max (2, 34, 99, 3, 22, 36, 733, 18))


// let celsius = 25;
// let fahrenheit = (celsius * 9) / 5 + 32;
// console.log(`${celsius}°C дорівнює ${fahrenheit}°F`);

// let daysInMonth = 30;
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log(`У місяці з ${daysInMonth} днями: ${hoursInMonth} годин та ${minutesInMonth} хвилин`);

// let health = 100;
// let energy = 80;
// health -= 20;
// energy -= 15;
// console.log(`Після ушкодження та дій: Здоров'я = ${health}, Енергія = ${energy}`);

// let totalPrice = 500;
// const discount = 0.1;
// let discountedPrice = totalPrice * (1 - discount);
// console.log(`Початкова ціна: ${totalPrice}, Ціна зі знижкою: ${discountedPrice}`);

// const floatNumber = 12.78;
// let roundedDown = Math.floor(floatNumber);
// console.log(`Округлене до меншого число ${floatNumber} дорівнює ${roundedDown}`);

// const floatString = "45.67";
// let parsedFloat = parseFloat(floatString);
// console.log(`Рядок "${floatString}" перетворено у число: ${parsedFloat}`);


// const intString = "123";
// let parsedInt = parseInt(intString);
// console.log(`Рядок "${intString}" перетворено у ціле число: ${parsedInt}`);


// let number = 64;
// let sqrtNumber = Math.sqrt(number);
// console.log(`Квадратний корінь числа ${number} дорівнює ${sqrtNumber}`);

// const integer = 42;
// const stringNumber = "256";


// let convertedInt = parseInt(stringNumber);
// console.log(`Рядок "${stringNumber}" перетворено в ціле число: ${convertedInt}`);


// let convertedString = integer.toString();
// console.log(`Число ${integer} перетворено в рядок: "${convertedString}"`);


// const userName = "HELENA!  "
// const js = "JavaScript"

// // index po4ianaetsa z 0
// // .lenght po4inaetsa z 1

// console.log(userName.length)
// console.log(userName + " " + js);

// const hi = "my" + " " + "name"

// console.log(hi)

// const result = 5 + 5 + "5" // ce constaktinaciya
// console.log(result);
// console.log(typeof result);
// console.log(js.length)
// // console.log(userName.toLowerCase())
// console.log(userName.toUpperCase())

// console.log(js.includes("Java"));
// console.log(js.toLowerCase().includes("Java".toLowerCase()));


// //.trimz() - obrizae probil na po4atku i kinci

// console.log("                  d                 ".trim())


// padStart() i padEnd

// console.log("3".padStart(2, "0"))
// console.log("3".padEnd(20, "!"))

// console.log(userName.endsWith("!"));
// console.log(userName.indexOf(" ")) // -1 ne znaishov

// const firstName = "Zakaria"
// const lastName = "Khamid"
// // shablonii ryadok - interpolyaciya
// const hello = `my name is ${firstName}, lastName is ${lastName}`

//Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

// const x = "Harry"
// const y = "Potter_"
// const n = "hogvarts"
// const g = "Grifindor"

// const messege = `Гість ${x} ${y} поселяється в ${n} факультет ${g}`

// console.log(messege)


// const userMinutes = 450
// const userHours = userMinutes / 60
// const numHours = Math.floor(userHours % 60)
// const numMinutes = Math.floor(userMinutes % 60)

// console.log(String(numHours).padStart(2 ,"0") + ":" + String(numMinutes).padStart(2, "0") )

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// console.log(string1.toLowerCase().includes(blacklistedWord1.toLowerCase()) || string1.toLowerCase().includes(blacklistedWord2.toLowerCase()))
// console.log(string2.toLowerCase().includes(blacklistedWord1.toLowerCase()) || string2.toLowerCase().includes(blacklistedWord2.toLowerCase()))
// console.log(string3.toLowerCase().includes(blacklistedWord1.toLowerCase()) || string3.toLowerCase().includes(blacklistedWord2.toLowerCase()))



// const orderMsg = "Ви замовляєте 15 тістечок.";
// console.log(orderMsg.includes(15));
// console.log(orderMsg.indexOf('1'));

// Створи змінну яка буде зберігати рядок “Ваш баланс поповнено на 1”. Додай в кінець рядка довільну кількість нулів. Довжину рядка дізнайся за допомогою властивості.

// const bank24 = "Ваш баланс поповнено на 1"
// const bank242 = bank24.padEnd(1000, "0")

// console.log(bank242)
// console.log(bank242.length)


// const name = "Zakaria"

// console.log(name.replace("a", "@"))

// console.log(name.toUpperCase())
