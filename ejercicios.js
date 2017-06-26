
//ejercicio 1
function multiplo (a,divisor){
var array_nuevo=[];
a.forEach(function(a){
  if(a % divisor==0){
    array_nuevo.push(a);
  }
});
  return array_nuevo;

}


//ejercicio 3
function multi(array,num){
 var m=array.reduce(function(valorAnterior, valorActual){
 return valorAnterior * valorActual;
});
  return  multi_total=m*num;

}
multi([2,2,3],3);
//ejercicio 4

function numero_doble(numbers){
return numbers.map(function(x) {
   return (x * 2)+1;
});
}

//ejercicio 5
function con_temperaturas(arr_celsius){
 return arr_celsius.map(function(c){
   return (9/5 *c)+32;
 });
}
//ejercicio 6

function acumulador(array){
 return array.reduce(function(valorAnterior, valorActual){
 return valorAnterior * valorActual;
});
}
multi([2,2,3]);
//ejercicio 7

 function edades(edad){
  var today = new Date();
  var year = today.getFullYear();
  var año= edad.map(function(x){
    if(x%2==0 && x>18){
   return año_nacimiento=year-x;
    }

  });
  document.write(año);
}
edades([16,88,23,5]);

// ejercicio 2
function EjerciciosArray()
{
  this.ejercicio1 = function(_arr, _num)
  {
      var res = 0;
      if(Array.isArray(_arr))
      {
        res = _arr.reduce(function(_total, _actual){
          return _total * _actual;
        });
      }else{
        if(!isNaN(_arr)){
          res = _arr;
        }
      }


     if(!isNaN(_num)){
       res = res * _num;
     }

     return res;
  }

  var ejercicios = new EjerciciosArray();
