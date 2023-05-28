var car = {
	manufacturer: "BMW",
	model: "M5",
	year: 2000,
	averageSpeed: 70
};

function showCarInfo(obj) {
	var str = "Производитель: " + obj.manufacturer + "\n"
		+ "Модель: " + obj.model + "\n"
		+ "Год выпуска: " + obj.year + " г\n"
		+ "Средняя скорость: " + obj.averageSpeed + " км/ч";
	alert(str);
}

function showTravelTime() {
	var length = prompt("Введите расстояние (км)", "");
	var time = computeTravelTime(length)
	alert("Средняя скорость: " + car.averageSpeed + " км/ч\n" + "Расстояние: " + length + " км\n" + "Время для преодоления: " + time + " ч");
}

function computeTravelTime(length) {
	var t = Math.round((length / car.averageSpeed) * 100) / 100;
	var ost = t % 1;
	ost = ost * 0.6;
	t = Math.floor(t) + ost;
	var breakTime = Math.floor(t / 4);
	return (t + breakTime).toFixed(2);
}