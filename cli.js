"use strict";
var fs = require("fs");
var bluebird = require("bluebird");
bluebird.promisifyAll(fs);

var escreverArquivo = function escreverArquivo(fileName) {
	var listaDeNumeros = [];
	for (let i = 0; i < 1000; i++) {
		listaDeNumeros.push(parseInt(Math.random() * 20));
	}
	var texto = listaDeNumeros.reduce(function (acc, elem) {
		return acc + "\n" + elem;
	}, "");

	var writePromise = fs.writeFileAsync(fileName, texto);
	return writePromise.then(function () {
		return fileName;
	});
};

var lerArquivo = function lerArquivo(fileName) {
	var readPromise = fs.readFileAsync(fileName);
	readPromise = readPromise.then(function (data) {
		var listaDeNumeros = data.toString().split("\n");
		var resultado = listaDeNumeros.map(function (element) {
			return parseInt(element);
		}).map(function (element) {
			if (element == 0) {
				throw new Error("divideByZero");
			}
			return 30 / element;
		});
		return resultado;
	});
	return readPromise;
};

module.exports.escreverArquivo = escreverArquivo;
module.exports.lerArquivo = lerArquivo;
