
// Задание 1

function removeUser () {

}
function createPost () {

}
function addItem () {

}
function readFile () {

}
function getElements () {

}
function createParentElement () {

}
function startGame () {

}
function sendMessage () {

}

removeUser ()
createPost()
addItem()
readFile()
getElements()
createParentElement()
startGame()
sendMessage()


// Задание 2

function text (str) {

}
function num (num) {

}
function greet (text) {

}
function showNumber (number) {

}
function log (nubmer) {

}
function reg(name) {

}
function add(string) {

}
function createFile(num) {

}
function logUser (num) {

}
function logOut(num) {

}
// Задание 3

function text (str) {
    return str
}
function num (num) {
    return num
}
function greet (text) {
    return text
}
function showNumber (number) {
    return number
}
function log (nubmer) {
    return number
}
function reg(name) {
    return name
}
function add(string) {
    return string
}
function createFile(num) {
    return num
}
function logUser (num) {
    return num
}
function logOut(num) {
    return num
}
// Задание 4
function addElement (number) {
    return number * 2
}
addElement(2)
function degree (x) {
    return x * 2
}
degree(3, 4)
function showMessage (num) {
    return num * 2
}
showMessage (10)
function math (y) {
    return y * 2
} 
math(80)
function greeting (number) {
    return number * 2
}
greeting(120)

// Задание 5
let arr = [1, 2, 'text', 'toje-text', 5]

function getArr (arr) {
    return arr[0]
}
console.log(getArr(arr))

// Задание 6

function lastElem (arr) {
    return arr[arr.length - 1]
}
console.log(lastElem(arr))

// Задание 7 

function printMyFullName(firstname, secondname) {
    const fullname = `${firstname} ${secondname}`;
 // возращаем значение константы fullname   
    return fullname;
  }
  
  console.log(printMyFullName('into', 'code'));
  // вывод в консоль элемента printMyFullName
  
  function getSumOfFirstAndLastElement(arr) {
    if(arr.length < 2) {
      return 'леее, минимум два элемента нужно жи есть';
    } else {
      const lastIndex = arr.length - 1;
        // создали функцию с условием выполнения кода внутри тела функции
      return arr[0] + arr[lastIndex];
    }
  }
  
  console.log(getSumOfFirstAndLastElement([]) ;
  // вывод результата функции в консоль
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]);
  // последний вывод элемента в консоль

  // Задание 8

  let text = "css";

  function testVariableScope() {
    let text = "html";
    // создали переменную text внутри тела функци
    return text;
    // возвращаем значение переменной text
  }
  
  console.log(testVariableScope());
  // в консоль выведится 'html', так как функция в первую очередь взаимодействует с локальными переменными

