window.addEventListener("DOMContentLoaded", (event) => {
	// alert('Запросите у пользователя его имя и выведите в ответ:«Привет, его имя!».');
	// fname = prompt('Как вас зовут? ');
	// alert('Привет, ' + fname + '!');

	// alert('Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.');
	// var year_of_birth = Number(prompt('В каком году вы родились? '));
	// const this_year = Number(prompt('Какой сейчас год? '));
	// alert('В текущем году вам стукнет ' + (this_year - year_of_birth) + ' лет');

	// alert('Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. ');
	// side_lengh = Number(prompt('Введите длину стороны квадрата: '));
	// alert('Периметр квадрата равен: ' + 4 * side_lengh);

	// alert('Запросите у пользователя радиус окружности и выведите площадь такой окружности.');
	// var radius = Number(prompt('Введите радиус окружности: '));
	// var square = Math.PI * radius ** 2;
	// alert('Площадь окружности: ' + square);

	// alert('Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.');
	// var distance = Number(prompt("Введите расстояние между городами в км: "));
	// var time = Number(prompt('За какое время вы хотите преодолеть это расстояние в часах? '));
	// alert('Вам необходимо двигаться со средней скоростью ' + distance / time + ' км/ч');

	// alert('Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.');
	// const rate = Number(prompt('Введите текущий курс доллара по отношению к евро: '));
	// var dollar = Number(prompt('Введите количество долларов для обмена: '));
	// alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");

	// alert('Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.');
	// const GB_MB = 1024;
	// var flash_drive = Number(prompt('Каков объем вашей флешки в Гб? '));
	// var size = Math.trunc(flash_drive * 1000 / GB_MB);
	// if (size < 0) {
	// 	alert('Ваша флешка перезаполнена, освободите пространство');
	// }
	// else {
	// 	alert('На флешку поместится ' + size + ' файлов объемом 820 Мб');
	// }

	// alert('Пользователь вводит сумму денег в кошельке и цену одной шоколадки.Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.');
	// var sum = prompt("Cколько у вас в бумажнике денег? ");
	// var price = prompt("Цена одной шоколадки ");
	// sum = Number(sum);
	// price = Number(price);
	// var sell = Math.trunc(sum / price);
	// var change = sum - price * sell;
	// if (sell < 1) {
	// 	alert('Сегодня вы на нуле. приходите в другой раз');
	// }
	// else {
	// 	alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ');
	// }

	// alert('Запросите у пользователя трехзначное число и выведите его задом наперед.Для решения задачи вам понадобится оператор % (остаток от деления).');
	// nmb = prompt('Введите трехзначное число: ');
	// var a = Number(nmb % 10);
	// var b = Number((nmb - a) / 10 % 10);
	// var c = Number((nmb - a - b * 10) / 100);
	// alert('Перевертыш: ' + (a * 100 + b * 10 + c));

	alert('Запросите у пользователя целое число и выведите в ответ, четное число или нет.В задании используйте логические операторы.В задании не надо использовать if или switch.');
	var a = prompt('Введите число для проверки на четность: ');
	a = Number(a);
	alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");
});