window.addEventListener("DOMContentLoaded", (event) => {
	//Task_1
	// let strin = 'hsefi234uyr983yf9h(*&@#$*^$%$';
	// letterStr = 'zaqwsxcderfvbgtyhnmjuiklopяфйцычсвукамипенртьогшлбюдщзжэхъё',
	// 	specChar = `'"~!@#$%^&*()_+=-/?.,<>[]{}|;:`,
	// 	arrLetterStr = letterStr.split(''),
	// 	arrSpecChar = specChar.split('');
	// console.log(getInfo(strin));

	//Task_2
	// console.log(intToWords(10));
	// console.log(intToWords(12));
	// console.log(intToWords(23));
	// console.log(intToWords(99));
	// console.log(intToWords(48));
	// console.log(intToWords(51));
	// console.log(intToWords(90));


	//Task_3
	// console.log(getLine("SdSkSkmOKJokjIOOJ6578KJjjk977")); //вызов функции


	//Task_4
	// console.log(getCamelCase('text-align'));
	// console.log(getCamelCase('background-color'));
	// console.log(getCamelCase('font-size'));


	//Task_5
	// console.log(getAbbr('объектно-ориентированное программирование'));
	// console.log(getAbbr('cascading style sheets'));


	//Task_6
	// console.log(getMerger());


	//Task_7
	// console.log(calc('1 + 2'));
	// console.log(calc('36/6'));
	// console.log(calc('144*2'));
	// console.log(calc('2-10'));
	// console.log(calc('44*55'));
	// console.log(calc('12 + 2'));


	//Task_8
	// console.log(getUrl());

	//Task_9
	// console.log(split());



	//Task_10
	console.log(template());







});

function getInfo(a) {

	let letter = 0,
		num = 0,
		char = 0,
		arrString = [];

	arrString = a.split('');

	for (let i = 0; i < arrString.length; i++) {
		if (isFinite(arrString[i]) == true) {
			num++;
		}
		for (let j = 0; j < arrLetterStr.length; j++) {
			if (arrString[i] == arrLetterStr[j]) {
				letter++;
			}
		}
		for (let k = 0; k < arrSpecChar.length; k++) {
			if (arrString[i] == arrSpecChar[k]) {
				char++;
			}
		}
	}

	return `В переданной строке ${letter} букв; ${num} цифр; ${char} спецсимволов`;
}

function intToWords(int) {
	let numStr = '';
	let from0To19 = [null, 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
	let tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
	let num = int;
	if (num < 20) {
		for (let i = 0; i <= from0To19.length; i++) {
			if (i == num) {
				return from0To19[i];
			}
		}
	}
	num = int % 10;
	int = Math.floor(int / 10);
	for (let j = 0; j <= tens.length; j++) {
		if (int == j) { numStr = tens[j] + ' '; }
	}
	if (num == null) {
		return numStr;
	}
	for (let k = 1; k <= from0To19.length; k++) {
		if (k == num) { numStr += from0To19[k]; }
	}
	return numStr;
}

function getLine(line) {
	console.log(line);
	let arrLine = line.split(''), strLine;
	for (let i = 0; i < arrLine.length; i++) {
		if (arrLine[i].toUpperCase() === arrLine[i]) {
			arrLine[i] = arrLine[i].toLowerCase();
		} else {
			arrLine[i] = arrLine[i].toUpperCase();
		}
		if (isFinite(arrLine[i]) == true) {
			arrLine[i] = '_';
		}
	}
	strLine = arrLine.join('');
	return strLine;
}

function getCamelCase(str) {
	let arrStr = str.split('-'),
		str2 = arrStr[1],
		arrStr2 = str2.split('');
	arrStr2[0] = arrStr2[0].toUpperCase();
	str2 = arrStr2.join('');
	arrStr[1] = str2;
	let str3 = arrStr.join('');
	return str3;
}

function getAbbr(str) {
	let arrStr = str.split('');
	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i] == '-') {
			arrStr[i] = ' ';
		}
	}
	let text = arrStr.join(''), abbr = '';
	abbr = (text[0] != " ") ? text[0].toUpperCase() : "";
	for (let i = 0; i < text.length - 1; i++) {
		abbr += (text[i] == " " && text[i + 1] != " ") ? text[i + 1].toUpperCase() : "";
	}
	return abbr;

}

function getMerger() {
	let text = '';
	while (confirm('хотите ввести еще что-нибудь?') == true) {
		text += prompt('введите строку: ') + ' ';
	}
	return text;
}

function calc(str) {
	let arrStr, result;
	if (str.includes('+')) {
		arrStr = str.split('+')
		result = Number(arrStr[0]) + Number(arrStr[1]);
	} else if (str.includes('-')) {
		arrStr = str.split('-')
		result = Number(arrStr[0]) - Number(arrStr[1]);
	} else if (str.includes('*')) {
		arrStr = str.split('*')
		result = Number(arrStr[0]) * Number(arrStr[1]);
	} else if (str.includes('/')) {
		arrStr = str.split('/')
		result = Number(arrStr[0]) / Number(arrStr[1]);
	} else {
		return 'неверное значение';
	}
	return `${str} = ${result}`;
}

function getUrl() {
	const url = prompt('Input URL:', 'htttp://mySite.com/dom/ua/work');
	const arrUrl = url.split('/');
	const newArr = arrUrl.filter(elem => elem != '');
	const prot = newArr[0];
	const dom = newArr[1];
	newArr.shift();
	newArr.shift();
	const str = newArr.join('/');
	const path = '/' + str;
	return `
        Протокол: ${prot}\n
        Домен: ${dom}\n
        Путь: ${path}`
}


function split() {
	const str = prompt('Введите строку: ', '20/10/2020');
	const separ = prompt('Введите разделитель: ', '/');
	const len = str.length;
	const arr = [];
	let ind = 0;
	for (let i = 0; i < len; i++) {
		if (str[i] == separ) {
			let l = str.slice(ind, i);
			arr.push(l);
			ind = i + 1;
		} else if (i == (len - 1)) {
			let k = str.slice(ind)
			arr.push(k);
		}
	}
	return arr;
}

function template() {
	let template = prompt("Введите шаблон в котором не больше 9-ти параметров!"),
		len = template.length,
		sep = "%",
		numOpt = 0,
		arrOptions = [],
		msg = "",
		ind = 0,
		ind1 = 0;
	for (let i = 0; i < len; i++) {
		(template[i] == sep) ? numOpt++ : false;
	}
	for (let j = 1; j <= numOpt; j++) {
		arrOptions.push(prompt(`Введите ${j}-й параметр`));
	}
	for (let k = 0; k < numOpt; k++) {
		ind = template.indexOf(sep, ind1);
		msg += template.slice(ind1, ind) + arrOptions[Number(template[ind + 1]) - 1];
		ind1 = ind + 2;
	}
	return msg;
}