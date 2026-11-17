let num = [52, 67, 1488];
num[1] = 1000-7;

console.log(num)



let strings = [52, 42, 1488];
strings.push(1000-7)

console.log(strings);




const numbers = [52, 42, 67, 1488, 1000-7];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}



const mems = ["pashalko", "ww", "medni", "bi4ok", "fafawwhe"];

for (let i = 0; i < mems.length; i += 1) {
  if (mems[i].length > 5) {
    console.log(mems[i])
  }
}


const tenNumbers = [67, 52, 1488, 42, 288, 1000-7, 41, 68, 11, 50];
let max = tenNumbers[0];

for (let i = 1; i < tenNumbers.length; i += 1) {
  if (tenNumbers[i] > max) {
    max = tenNumbers[i];
  }
}

console.log("mex zna4enya:", max);


const tennum = [52, 42, 67, 288, 1488, 1000-7, 2, 5, 6, 10];

for (let i = 0; i < tennum.length; i++) {
  if (tennum[i] % 2 === 0) {
    console.log(tennum[i]);
  }
}
