
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


//Primer ejercicio de objetos
function Area(x,y){
  this.x=x;
  this.y=y;
 document.write(x*y);
}

var a_rec=new Area(30,89);
// segundo ejercicio de objetos
function Persona (nombre,dia,mes,anio){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anio=anio;
  var today = new Date();
  var anio_actual = today.getFullYear();
  var mes_actual = today.getMonth();
  var dia_actual = today.getUTCDate();
  var edad;

  if ( mes_actual>=mes && dia_actual>=this.dia){
    edad=anio_actual-anio;
  }else{
    edad=anio_actual-anio-1;
  }
  document.write("La edad actual de "+ nombre+" es "+ edad);

}

var edad_actual=new Persona("Evelyn",30,7,1994);
