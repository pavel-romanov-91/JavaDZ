var fractionOne = {};
fractionOne.numerator = 2;
fractionOne.denomerator = 4;

var fractionTwo = {};
fractionTwo.numerator = 1;
fractionTwo.denomerator = 4;

var fractionAnswer = {};
function showFraction(obj) {
	return obj.numerator + "/" + obj.denomerator;
}

function commonDenom(obj1, obj2) {
	var temp_den = obj1.denomerator;
	obj1.numerator = obj1.numerator * obj2.denomerator;
	obj1.denomerator = obj1.denomerator * obj2.denomerator;
	obj2.numerator = obj2.numerator * temp_den;
	obj2.denomerator = obj2.denomerator * temp_den;
}

function sum(obj1, obj2) {
	var tempFract = {
		numerator: 0,
		denomerator: 0
	};

	if (obj1.denomerator != obj2.denomerator) {
		commonDenom(obj1, obj2);
	}

	tempFract.numerator = obj1.numerator + obj2.numerator;
	tempFract.denomerator = obj1.denomerator;
	return tempFract;
}

function minus(obj1, obj2) {
	var tempFract = {
		numerator: 0,
		denomerator: 0
	};

	if (obj1.denomerator != obj2.denomerator) {
		commonDenom(obj1, obj2);
	}

	tempFract.numerator = obj1.numerator - obj2.numerator;
	tempFract.denomerator = obj1.denomerator;
	return tempFract;
}

function multiply(obj1, obj2) {
	var tempFract = {
		numerator: 0,
		denomerator: 0
	};
	tempFract.numerator = obj1.numerator * obj2.numerator;
	tempFract.denomerator = obj1.denomerator * obj2.denomerator;
	tempFract = reduction(tempFract);
	return tempFract;
}

function divide(obj1, obj2) {
	var tempFract = {
		numerator: 0,
		denomerator: 0
	};

	tempFract.numerator = obj1.numerator * obj2.denomerator;
	tempFract.denomerator = obj1.denomerator * obj2.numerator;
	tempFract = reduction(tempFract);
	return tempFract;
}

function reduction(obj) {
	var nod = 1;
	var tempFract = {
		numerator: obj.numerator,
		denomerator: obj.denomerator
	};
	for (var i = tempFract.numerator; i > 1; i--) {
		if ((tempFract.numerator % i == 0) &&
			(tempFract.denomerator % i == 0)) {
			tempFract.numerator /= i;
			tempFract.denomerator /= i;
			nod = i;
		}
	} return tempFract;
}

function showCompute(sign) {
	switch (sign) {
		case '+': fractionAnswer = sum(fractionOne, fractionTwo);
			break;
		case '-': fractionAnswer = minus(fractionOne, fractionTwo);
			break;
		case '*': fractionAnswer = multiply(fractionOne, fractionTwo);
			break;
		case '/': fractionAnswer = divide(fractionOne, fractionTwo);
			break;
		case '=': fractionAnswer = reduction(fractionOne);
			showReductionResult(fractionOne, fractionAnswer);
			return;
		default:
			alert("[error] недопустимый знак вычисения!")
			return;
	}

	alert(showFraction(fractionOne) + " " + sign + " " + showFraction(fractionTwo) + " = " + showFraction(fractionAnswer));
}

function showReductionResult(obj1, objAnswer) {
	alert(showFraction(obj1) + " = " + showFraction(objAnswer));
}