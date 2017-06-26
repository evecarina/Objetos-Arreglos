//Primer ejercicio
function Area(x,y){
  this.x=x;
  this.y=y;
 document.write(x*y);
}

var a_rec=new Area(30,89);
// segundo ejercicio
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
