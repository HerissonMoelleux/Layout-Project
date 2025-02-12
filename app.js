// let userName = prompt("Enter your name")
// alert(`Your name is ${userName}`);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12

// let answer = prompt("Какое «официальное» название JavaScript?", "");
// if (answer == "ECMAScript") {
//     alert("Krasava!");
// } else {
//     alert("ECMAScript pridurok");
// }

// let answer = +prompt("Enter number", "");
// if (answer > 0) {
//     alert(1);
// } else if (answer < 0) {
//     alert(-1);
// } else {
//     alert(answer);
// }

// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
//
// result = (a + b < 4) ? "Malo" : "Mnogo";

// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
//
// message = (login == "sotridnik") ? "priv" :
//     (login == "director") ? "zdravstvyite" :
//         (login == " ") ? "Ty chet oxyel" :
//             " ";

// let age = +prompt();
//
// if (age => 14 && age <= 90) {
//     age = true;
// } else {
//     age = false;
// }
// alert(age);

// let age = +prompt();
//
// if (age <= 14 || age >= 90) {
//     age = true;
// } else {
// age = false;
// }
// alert(age);

// if (!(age => 14 && age <= 90))

// let Who = prompt("Who you are?");
// if (Who === " " || Who === null){
//     alert("Cancel");
// } else if (Who == "Admin"){
//     let Password  = prompt("Password?");
//     if (Password === " " || Password === null){
//         alert("Cancel");
//     } else if (Password == "I'm the boss"){
//         alert("Hello!")
//     } else {
//         alert("Wrong Password");
//     }
// } else {
//     alert("I don't know who you are");
// }

// let num1 = 10,
//     num2 = 20,
//     result;
// if (result === null || result === undefined) {
//     if (num1 !== null && num1 !== undefined) {
//         result = num1;
//     } else {
//         result = num2;
//     }
// }
// result ??= num1 ?? num2;

// for (let i = 2; i <= 10; i++){
//     if (i % 2 == 0){
//         alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// let i = 0
// while (i < 3){
//     alert(`number ${i}!`);
//     i++;
// }

// while (true){
//     let num = prompt();
//     if (num > 100 ||){
//         alert("Krasava!");
//         break;
//     } else if ( num == " " || num == null){
//         alert("Che vyshel to?");
//     }
// }

// let n = +prompt();
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j ** 2; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
//
//         alert( i ); // простое число
//     }

// function min(a, b){
//     if (a < b){
//         return a;
//     } else {
//         return b;
//     }
// }
// alert(pow(3, 3));
// function pow(a, b){
//     return a ** b;
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );
// ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// )