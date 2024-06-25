//Перепишіть функцію, використовуючи '?' або '||'
/*function checkAge(age) {
    if (age > 18) {
    return true;
    } else {
    return confirm('Батьки дозволили?');
    }
    }*/

    const checkAge = (age) => {
        if (age > 18 || age < 60)  {
        return console.log("Welocome to Armed Forces");
      }
      else {
        return console.log("REquest declined");
      }
    }
    checkAge(45);

    //Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
    const showMinNumber = (a,b) => {
      if (a > b) {
        console.log(b);
      }
      else if (b > a) {
        console.log(a);
      }
      else {
        console.log("The numbers are equal");
      }
    }
showMinNumber(5,10);

//Перепишіть з використанням стрілкових функцій
//Замініть Функціональні Вирази на стрілкові функції у коді нижче:
/*function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
ask(
"Ви згодні?",
function() { alert("Ви погодились."); },
function() { alert("Ви скасували виконання."); }
);*/
const ask = (question, yes, no) => {
  if(confirm(question)) yes();
  else no();
}
ask("Ви згодні?", yes = () => { alert("Ви погодились.") },
no = () => { alert("Ви скасували виконання.") });