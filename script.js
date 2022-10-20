var perem1 = 18,
    perem2 = 45;

let additions = perem1 + perem2;

let subtraction = perem1 - perem2;

let multiplications = perem1 * perem2;

let division = perem1 / perem2;

let Division_by_modulus = perem1 % perem2;

let Exponentiation = perem1 ** 2;

let Increment = ++perem1;

let Decrement = --perem1;

let comparisons1 = perem1 == 14;
let comparisons2 = perem1 === 14;
let comparisons3 = perem1 != 14;
let comparisons4 = perem1 !== 14;
let comparisons5 = perem1 > 14;
let comparisons6 = perem1 < 14;
let comparisons7 = perem1 >= 14;
let comparisons8 = perem1 <= 14;

let Logical_operations1 = perem1 <14 && perem2 < 40;
let Logical_operations2 = perem1 <14 || perem2 == true;
let Logical_operations3 = !(perem1 <14);

let Assignment_Operations1 = perem1 = 14;
let Assignment_Operations2 = perem1 += 40;
let Assignment_Operations3 = perem1 -= 40;
let Assignment_Operations4 = perem1 *= 40;
let Assignment_Operations5 = perem1 **= 4;
let Assignment_Operations6 = perem1 /= 4;
let Assignment_Operations7 = perem1 %= 40;
let Assignment_Operations8 = perem1 &&= perem2;
let Assignment_Operations9 = perem1 ||= perem2;


document.write('Первое число: ', perem1);
document.write('<br> Второе число: ', perem2);
document.write('<br> Сумма чисел: ', additions);

document.write('<br><br> Вычитание: ', subtraction);
document.write('<br> Умножение: ', multiplications);
document.write('<br> Деление: ', division);
document.write('<br> Деление по модулю: ', Division_by_modulus);
document.write('<br> Возведение в степень: ', Exponentiation);
document.write('<br> Инкремент: ', Increment);
document.write('<br> Декремент: ', Decrement);

document.write('<br><br> Сравнение: ', comparisons1);
document.write('<br> Тождественность: ', comparisons2);
document.write('<br> Сравнение значений: ', comparisons3);
document.write('<br> Сравнение типов: ', comparisons4);
document.write('<br> Сравнение >: ', comparisons5);
document.write('<br> Сравнение <: ', comparisons6);
document.write('<br> Сравнение >=: ', comparisons7);
document.write('<br> Сравнение <=: ', comparisons8);

document.write('<br><br> Логические операции &&: ', Logical_operations1);
document.write('<br> Логические операции ||: ', Logical_operations2);
document.write('<br> Логические операции !: ', Logical_operations3);

document.write('<br><br> Приравнивает переменной значение: ', Assignment_Operations1);
document.write('<br> Сложение c присвоением результата: ', Assignment_Operations2);
document.write('<br> Вычитание с присвоением результата: ', Assignment_Operations3);
document.write('<br> Умножение с присвоением результата: ', Assignment_Operations4);
document.write('<br> Возведение в степень с присвоением результата: ', Assignment_Operations5);
document.write('<br> Деление с присвоением результата: ', Assignment_Operations6);
document.write('<br> Получение остатка от деления с присвоением результата: ', Assignment_Operations7);
document.write('<br> Присваивание &&=: ', Assignment_Operations8);
document.write('<br> Присваивание ||=: ', Assignment_Operations9);



var str = "lab7",
    str2 =  "LAB7";

var newString = str.toUpperCase();
var newString2 = str2.toLowerCase();
document.write('<br><br> Строка была с нижним регистром: ', newString);
document.write('<br> Строка была с верхним регистром: ', newString2);

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


document.getElementById('body').appendChild(table);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "1";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "2";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "3";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "4";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "5";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "6";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "7";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "8";
let heading_10 = document.createElement('th');
heading_10.innerHTML = "9";
let heading_11 = document.createElement('th');
heading_11.innerHTML = "10";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
row_1.appendChild(heading_10);
row_1.appendChild(heading_11);
thead.appendChild(row_1);



let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "1";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "2";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "3";
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "4";
let row_2_data_6 = document.createElement('td');
row_2_data_6.innerHTML = "5";
let row_2_data_7 = document.createElement('td');
row_2_data_7.innerHTML = "6";
let row_2_data_8 = document.createElement('td');
row_2_data_8.innerHTML = "7";
let row_2_data_9 = document.createElement('td');
row_2_data_9.innerHTML = "8";
let row_2_data_10 = document.createElement('td');
row_2_data_10.innerHTML = "9";
let row_2_data_11 = document.createElement('td');
row_2_data_11.innerHTML = "10";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
row_2.appendChild(row_2_data_6);
row_2.appendChild(row_2_data_7);
row_2.appendChild(row_2_data_8);
row_2.appendChild(row_2_data_9);
row_2.appendChild(row_2_data_10);
row_2.appendChild(row_2_data_11);
tbody.appendChild(row_2);



let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "2";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "4";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "6";
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "8";
let row_3_data_6 = document.createElement('td');
row_3_data_6.innerHTML = "10";
let row_3_data_7 = document.createElement('td');
row_3_data_7.innerHTML = "12";
let row_3_data_8 = document.createElement('td');
row_3_data_8.innerHTML = "14";
let row_3_data_9 = document.createElement('td');
row_3_data_9.innerHTML = "16";
let row_3_data_10 = document.createElement('td');
row_3_data_10.innerHTML = "18";
let row_3_data_11 = document.createElement('td');
row_3_data_11.innerHTML = "20";


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
row_3.appendChild(row_3_data_6);
row_3.appendChild(row_3_data_7);
row_3.appendChild(row_3_data_8);
row_3.appendChild(row_3_data_9);
row_3.appendChild(row_3_data_10);
row_3.appendChild(row_3_data_11);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "3";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "3";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "6";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "9";
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = "12";
let row_4_data_6 = document.createElement('td');
row_4_data_6.innerHTML = "15";
let row_4_data_7 = document.createElement('td');
row_4_data_7.innerHTML = "18";
let row_4_data_8 = document.createElement('td');
row_4_data_8.innerHTML = "21";
let row_4_data_9 = document.createElement('td');
row_4_data_9.innerHTML = "24";
let row_4_data_10 = document.createElement('td');
row_4_data_10.innerHTML = "27";
let row_4_data_11 = document.createElement('td');
row_4_data_11.innerHTML = "30";


row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
row_4.appendChild(row_4_data_6);
row_4.appendChild(row_4_data_7);
row_4.appendChild(row_4_data_8);
row_4.appendChild(row_4_data_9);
row_4.appendChild(row_4_data_10);
row_4.appendChild(row_4_data_11);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "4";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "4";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "8";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "12";
let row_5_data_5 = document.createElement('td');
row_5_data_5.innerHTML = "16";
let row_5_data_6 = document.createElement('td');
row_5_data_6.innerHTML = "20";
let row_5_data_7 = document.createElement('td');
row_5_data_7.innerHTML = "24";
let row_5_data_8 = document.createElement('td');
row_5_data_8.innerHTML = "28";
let row_5_data_9 = document.createElement('td');
row_5_data_9.innerHTML = "32";
let row_5_data_10 = document.createElement('td');
row_5_data_10.innerHTML = "36";
let row_5_data_11 = document.createElement('td');
row_5_data_11.innerHTML = "40";


row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
row_5.appendChild(row_5_data_5);
row_5.appendChild(row_5_data_6);
row_5.appendChild(row_5_data_7);
row_5.appendChild(row_5_data_8);
row_5.appendChild(row_5_data_9);
row_5.appendChild(row_5_data_10);
row_5.appendChild(row_5_data_11);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "5";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "5";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "10";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "15";
let row_6_data_5 = document.createElement('td');
row_6_data_5.innerHTML = "20";
let row_6_data_6 = document.createElement('td');
row_6_data_6.innerHTML = "25";
let row_6_data_7 = document.createElement('td');
row_6_data_7.innerHTML = "30";
let row_6_data_8 = document.createElement('td');
row_6_data_8.innerHTML = "35";
let row_6_data_9 = document.createElement('td');
row_6_data_9.innerHTML = "40";
let row_6_data_10 = document.createElement('td');
row_6_data_10.innerHTML = "45";
let row_6_data_11 = document.createElement('td');
row_6_data_11.innerHTML = "50";


row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
row_6.appendChild(row_6_data_5);
row_6.appendChild(row_6_data_6);
row_6.appendChild(row_6_data_7);
row_6.appendChild(row_6_data_8);
row_6.appendChild(row_6_data_9);
row_6.appendChild(row_6_data_10);
row_6.appendChild(row_6_data_11);
tbody.appendChild(row_6);