window.addEventListener("DOMContentLoaded", (event) => {

	// function Compare(a, b) {
	// 	if (a < b) {
	// 		return -1;
	// 	} else if (a > b) {
	// 		return 1;
	// 	} else if (a == b) {
	// 		return 0;
	// 	} else {
	// 		return "Вы ошиблись при вводе чисел";
	// 	}
	// }
	// alert('Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.');
	// let x = +prompt("Введите первое число для сравнения ");
	// let y = +prompt("Введите второе число для сравнения ");
	// alert(Compare(x, y));


	// function Factorial(n) {
	// 	if (n == 1) return 1;
	// 	return n * Factorial(n - 1);
	// }
	// alert("Задание 2: Написать функцию, которая вычисляет факториал переданного числа");
	// let x = 1;
	// do {
	// 	x = Math.trunc(+prompt("Для вычисления факториала введите положительное число от 1: "));
	// } while (x < 1);
	// alert(Factorial(x));


	// function Splitter(a, b, c) {
	// 	return a * 100 + b * 10 + c;
	// }
	// alert('Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.Например: цифры 1, 4, 9 превратятся в число 149.');
	// let x = 0;
	// let y = 0;
	// let z = 0;
	// do {
	// 	x = Math.trunc(Math.abs(+prompt("Введите первое число: ")));
	// 	y = Math.trunc(Math.abs(+prompt("Введите второе число: ")));
	// 	z = Math.trunc(Math.abs(+prompt("Введите третье число: ")));
	// } while (x > 9 || y > 9 || z > 9);
	// alert(Splitter(x, y, z));


	// function Square(a, b) {
	// 	if (arguments.length == 1) {
	// 		return a * a;
	// 	}
	// 	return a * b;
	// }
	// alert('Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.');
	// alert(Square(3, 4));
	// alert(Square(3));


	// function PerfectNumber(a) {
	// 	let summ = 0;
	// 	for (let i = 1; i < a; i++) {
	// 		if (a % i == 0) {
	// 			summ += i;
	// 		}
	// 	}
	// 	if (summ == a) {
	// 		return "ДА! Это совершенное число!";
	// 	}
	// 	return "НЕТ! Это не совершенное число!";
	// }
	// alert('Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.');
	// let x = Math.trunc(+prompt("Введите число: "));
	// alert(PerfectNumber(x));


	// function PerfectNumber(a) {
	// 	let summ = 0;
	// 	a = Math.abs(a);
	// 	for (let i = 1; i < a; i++) {
	// 		if (a % i == 0) {
	// 			summ += i;
	// 		}
	// 	}
	// 	if (summ == a) {
	// 		return 1;
	// 	}
	// 	return 0;
	// }
	// alert('Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать,	совершенное число или нет.');
	// let x = 0;
	// let y = 0;
	// let result = "";
	// let perfectNumber = 0;
	// do {
	// 	x = Math.trunc(+prompt("Введите первое число диапазона: "));
	// 	y = Math.trunc(+prompt("Введите конечное число диапазона: "));
	// }
	// while (x != +x || y != +y);
	// for (let j = x; j <= y; j++) {
	// 	perfectNumber = PerfectNumber(j);
	// 	if (perfectNumber == 1) { result += j + ", "; }
	// }
	// if (result == "") {
	// 	alert("В данном диапазоне совершенных чисел нет");
	// }
	// else {
	// 	alert(result);
	// }


	// function Time(a, b = 0, c = 0) {
	// 	if
	// 		(a < 10) {
	// 		a = "0" + a;
	// 	}
	// 	if
	// 		(b < 10) {
	// 		b = "0" + b;
	// 	}
	// 	if
	// 		(c < 10) {
	// 		c = "0" + c;
	// 	}
	// 	return `${a}:${b}:${c}`;
	// }
	// alert('Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». 2 Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00.');
	// let x = 0;
	// let y = 0;
	// let z = 0;
	// do {
	// 	x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
	// 	y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
	// 	z = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
	// } while (x > 23 || y > 59 || z > 59);
	// alert("Текущее время: " + Time(x, y, z));


	// function TimeToSeconds(a, b = 0, c = 0) {
	// 	let timeToSeconds = a * 3600 + b * 60 + c;
	// 	return timeToSeconds;
	// }
	// alert('Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах');
	// let x = 0;
	// let y = 0;
	// let z = 0;

	// do {
	// 	x = Math.abs(Math.trunc(+prompt("Введите часы от 0 до 23: ")));
	// 	y = Math.abs(Math.trunc(+prompt("Введите минуты от 0 до 59: ")));
	// 	z = Math.abs(Math.trunc(+prompt("Введите секунды от 0 до 59: ")));
	// } while (x > 23 || y > 59 || z > 59);

	// alert("От начала суток это составляет " + TimeToSeconds(x, y, z) + " секунд.");


	// function SecondsToTime(a) {
	// 	let hours = Math.trunc(a / 3600);
	// 	let minutes = Math.trunc((a - hours * 3600) / 60);
	// 	let seconds = Math.trunc(a - hours * 3600 - minutes * 60);
	// 	if
	// 		(hours < 10) {
	// 		hours = "0" + hours;
	// 	}
	// 	if
	// 		(minutes < 10) {
	// 		minutes = "0" + minutes;
	// 	}
	// 	if
	// 		(seconds < 10) {
	// 		seconds = "0" + seconds;
	// 	}
	// 	let current_time = `${hours}:${minutes}:${seconds}`;
	// 	return current_time;
	// }
	// alert('Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч: мм: сс».');
	// let input_seconds = 0;
	// do {
	// 	input_seconds = Math.abs(Math.trunc(+prompt("Введите секунды для перевода их в текущее время: ")));
	// }
	// while (input_seconds != +input_seconds);
	// alert(SecondsToTime(input_seconds));


	function TimeToSeconds(a, b = 0, c = 0) {
		let timeToSeconds = a * 3600 + b * 60 + c;
		return timeToSeconds;
	}
	function SecondsToTime(a) {
		let hours = Math.trunc(a / 3600);
		let minutes = Math.trunc((a - hours * 3600) / 60);
		let seconds = Math.trunc(a - hours * 3600 - minutes * 60);
		if
			(hours < 10) {
			hours = "0" + hours;
		}
		if
			(minutes < 10) {
			minutes = "0" + minutes;
		}
		if
			(seconds < 10) {
			seconds = "0" + seconds;
		}
		let current_time = `${hours}:${minutes}:${seconds}`;
		return current_time;
	}
	function DifferenceTime(a1, b1, c1, a2, b2, c2) {
		return SecondsToTime(24 * 60 * 60 - TimeToSeconds(a1, b1, c1) + TimeToSeconds(a2, b2, c2));
	}
	alert('Написатьфункцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч: мм: сс». При выполнении задания используйте функции из предыдущих 2 - х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч: мм: сс».');
	let x1 = 0;
	let y1 = 0;
	let z1 = 0;
	let x2 = 0;
	let y2 = 0;
	let z2 = 0;
	do {
		x1 = Math.abs(Math.trunc(+prompt("Введите часы более ранней даты от 0 до 23: ")));
		y1 = Math.abs(Math.trunc(+prompt("Введите минуты более ранней даты от 0 до 59: ")));
		z1 = Math.abs(Math.trunc(+prompt("Введите секунды более ранней даты от 0 до 59: ")));
		x2 = Math.abs(Math.trunc(+prompt("Введите часы более поздней даты от 0 до 23: ")));
		y2 = Math.abs(Math.trunc(+prompt("Введите минуты более поздней даты от 0 до 59: ")));
		z2 = Math.abs(Math.trunc(+prompt("Введите секунды более поздней даты от 0 до 59: ")));
	}
	while (x1 > 23 || y1 > 59 || z1 > 59 || x2 > 23 || y2 > 59 || z2 > 59);
	alert("Разница между сегодняшним и завтрашним событием составляет: " + DifferenceTime(x1, y1, z1, x2, y2, z2));
});
