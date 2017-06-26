
var assert = require('assert');

function totalMultiplicacion(numero,arreglo){
   var total_multi= arreglo.reduce(function(a,b){
      return a*b;
   });
  return total_multi*numero;
}

	function numeroTelefonico(celular,numero){
	var resultado=celular.filter(function(celular){
	tel=celular.toString();
	num=numero.toString();

	if(tel.substr(0,3) == num || tel.substr(-3) == num){
		return true;
	}
 		else{ return false;}
});

return resultado;
}

function multiplo(array,x)
{
	var nuevo_arreglo=[];
	array.forEach( function(elemento) {
		if (elemento%x==0) {
      nuevo_arreglo.push(elemento);}
	});
	return nuevo_arreglo;
}

function dobles_Uno(arreglo){
var doubles = arreglo.map(function(x) {
   return ((x*2) +1);
});
  return doubles;
}

function converFahrenheit(arreglo){
var Fahrenheit = arreglo.map(function(x){
   return (((9/5)*x) + 32);

});
return Fahrenheit;
}

function productoArreglo(arreglo){
   var total= arreglo.reduce(function(a,b){
      return (a*b);
   });
  return total;
}

function fecha(array)
{
	var num=[];
	array.forEach(function(item) {
		if (item>18) num.push(2017-item);
	}
);
	return num;
}


describe('Ejercicio 1', function(){
  it('8640 debe ser el resultado', function(){
    assert.equal(8640, totalMultiplicacion(9,[4,4,10,6]));
  });
});

describe('Ejercicio 2', function(){
  it('Numero de telefonos validos ', function(){
    assert.deepEqual([784203256,333323784], numeroTelefonico([784203256,333323784,453789345],784));
  });
});

describe('Ejercicio 3', function(){
  it('Multiplosss', function(){
    assert.deepEqual([14,21,77,49],multiplo([14,21,44,80,77,49],7));
  });
});

describe( 'Ejercicio 4', function(){
  it('El doble del arreglo + uno', function(){
    assert.deepEqual([5,13,9,7], dobles_Uno([2,6,4,3]));
  });
});

describe('Ejercicio 5', function(){
  it('convertir grados celsius a grado Fahrenheit', function(){
    assert.deepEqual([46.4], converFahrenheit([8]));
  });
});

describe( 'Ejercicio 6', function(){
  it('Multiplicacion de los elementos del arreglo', function(){
    assert.deepEqual(36, productoArreglo([3,6,1,2]));
  });
});

describe('Ejercicio 7', function(){
  it('Año de nacimiento', function(){
    assert.deepEqual([1994,1995], fecha([21,14,80,8]));
  });
});
