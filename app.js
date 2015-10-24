"use strict";
var dbModule = require("./cli.js");

dbModule.escreverArquivo("numeros.txt")
	.then(dbModule.lerArquivo)
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
	if (error.message == "divideByZero") {
		console.error("Houve uma divisão por zero, reveja sua lista de números");
	} else {
		throw error;
	}
	}).finally(function () {
		console.log("ADEUS");
	});