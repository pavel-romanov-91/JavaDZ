window.addEventListener("DOMContentLoaded", (event) => {
	// alert('Подсчитать сумму всех чисел в заданном пользователем диапазоне.');
	// let a = Math.trunc(+prompt("Задайте целое число, которое будет началом диапазона: "));
	// let a1 = a;
	// let b;
	// do {
	// 	b = Math.trunc(+prompt("Задайте целое число, которое будет концом диапазона: "));
	// } while (a >= b);
	// let summa = 0;
	// while (a <= b) { summa += a; a++; }
	// alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);

	// alert('Запросить 2 числа и найти только наибольший общий делитель.');
	// let n = +prompt("Введите первое число: ");
	// let m = +prompt("Введите второе число: ");
	// let new_n = Math.abs(n);
	// let new_m = Math.abs(m);
	// let max_divisor = 1;
	// let i = 1;
	// while (i <= new_n && i <= new_m) {
	// 	if (new_n % i == 0 && new_m % i == 0) { max_divisor = i; } i++;
	// }
	// alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);

	// alert('Запросить у пользователя число и вывести все делители этого числа.');
	// let n = +prompt("Введите число: ");
	// let new_n = Math.abs(n);
	// let divisors = "";
	// let i = 1;
	// do {
	// 	if (new_n % i == 0) { divisors += i + ","; } i++;
	// } while (i <= new_n);
	// alert(`У числа ${n} следующие делители: ${divisors}`);

	// alert('Определить количество цифр в введенном числе.');
	// let n = Math.abs(+prompt("Введите число: "));
	// let counter = 0;
	// while
	// 	(n > 0) {
	// 	n = Math.trunc(n / 10);
	// 	counter++;
	// }
	// alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);

	// alert('Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.При этом также посчитать, сколько четных и нечетных.Вывести статистику на экран.Учтите, что достаточно одной переменной(не 10) для ввода чисел пользователем.');
	// let n = 0;
	// let positive_number = 0;
	// let negative_number = 0;
	// let null_number = 0;
	// let even_number = 0;
	// let odd_number = 0;
	// for (let i = 0; i < 10; i++) {
	// 	n = +prompt("Введите число: ");
	// 	if (n > 0) { positive_number += 1; }
	// 	else if (n < 0) { negative_number += 1; }
	// 	else { null_number += 1; }
	// 	!(n % 2) ? (even_number += 1) : (odd_number += 1);
	// }
	// alert(
	// 	`Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
	// );

	// alert('Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.И так до тех пор, пока пользователь не откажется');
	// let numberA = 0;
	// let numberB = 0;
	// let result = true;
	// let action_sign = "";
	// do {
	// 	numberA = +prompt("Введите первое число: ");
	// 	numberB = +prompt("Введите второе число: ");
	// 	action_sign = prompt("Введите знак операции (*, /, + либо -): ");
	// 	switch (action_sign) {
	// 		case "+":
	// 			alert(
	// 				`${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
	// 			); break;
	// 		case "-":
	// 			alert(
	// 				`${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
	// 			); break;
	// 		case "*":
	// 			alert(
	// 				`${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
	// 			); break;
	// 		case "/":
	// 			alert(
	// 				`${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
	// 			); break;
	// 		default:
	// 			alert(`Вы не ввели знак математической операции!`);
	// 			break;
	// 	}
	// 	result = confirm("Хотите выполнить еще одну математическую операцию?");
	// } while (result == true);

	// alert('Запросить у пользователя число и на сколько цифр его сдвинуть.Сдвинуть цифрычисла и вывести результат(если число 123456 сдвинуть на 2 цифры, то получится 345612).');
	// let base_number = Math.abs(Math.trunc(+prompt("Введите число, которое будем трансформировать: ")));
	// let jump = Math.abs(Math.trunc(+prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")));
	// let array = [];
	// let new_base_number = base_number;
	// while (base_number > 0) {
	// 	array.unshift(base_number % 10);
	// 	base_number = Math.trunc(base_number / 10);
	// }
	// let new_jump = jump;
	// jump = jump % array.length;
	// let arrJumpLeft_L = [];
	// let arrJumpLeft_R = [];
	// let arrJumpRight_L = [];
	// let arrJumpRight_R = [];
	// for (let i = 0; i < array.length; i++) {
	// 	if (i < jump) {
	// 		arrJumpLeft_L[i] = array[i];
	// 	}
	// 	else {
	// 		arrJumpLeft_R[i] = array[i];
	// 	}
	// 	if (i < array.length - jump) {
	// 		arrJumpRight_L[i] = array[i];
	// 	}
	// 	else {
	// 		arrJumpRight_R[i] = array[i];
	// 	}
	// }
	// alert(`Сдвиг вправо "${new_base_number}" на ${new_jump} позиции: ` + arrJumpRight_R.concat(arrJumpRight_L).join(""));
	// alert(`Сдвиг влево "${new_base_number}" на ${new_jump} позиции: ` + arrJumpLeft_R.concat(arrJumpLeft_L).join(""));

	// alert('Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день ?» и так до тех пор, пока пользователь нажимает OK.');
	// let arr_Week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
	// let i = 0;
	// let stop = true;
	// while (stop == true) {
	// 	stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
	// 	i++;
	// 	if (i > 6) {
	// 		i = 0;
	// 	}
	// }
	// alert("Вывод дней недели окончен!");

	// alert('Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.');
	// let table = "";
	// for (let i = 2; i <= 9; i++) {
	// 	for (let j = 1; j <= 10; j++) {
	// 		table += `${i} x ${j} = ` + i * j + ", ";
	// 	}
	// }
	// alert(table);

	alert('Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N ?».В зависимости от того что указал пользователь, уменьшаете диапазон.Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.');
	let N = 0;
	do {
		N = Math.trunc(+prompt("Введите целое число в диапазоне от 0 до 100 включительно: "));
	}
	while
		(N < 0 || N > 100);
	alert(`Итак, будем играться с числом ${N}.`);
	let counter = 0;
	let low = 0;
	let middle = 0;
	let high = 100;
	let condition = "";
	while
		(low <= high) {
		middle = Math.trunc((low + high) / 2);
		condition = prompt(`Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`);
		if
			(condition != "=" && condition != "<" && condition != ">") {
			alert("Вы вводите посторонние символы, я вас не понимаю! Будьте внимательнее!");
			continue;
		}
		if
			(
			(condition != "=" && middle == N) || (condition == "<" && middle < N) || (condition == ">" && middle > N) || (condition == "=" && middle != N)) {
			alert(`Кто-то мухлюет! Знак "${condition}" здесь совсем неуместен! Попробуйте снова!`);
			continue;
		}
		if
			(condition == ">") {
			low = middle + 1;
		}
		else if (condition == "<") {
			high = middle - 1;
		}
		else {
			low = high + 1;
		}
		counter++;
	}
	alert(`Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`);

});