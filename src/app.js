let quien = ["Un duende", "El vecino", "Mi hermano", "Un fantasma", "El presidente"];
let verbo = ["destruyó", "escondió", "hizo desaparecer", "incineró", "saboteó"];
let que = ["las llaves", "el informe", "el documento", "la presentación", "el dinero"];
let cuando = ["ayer en la noche.", "el fin de semana pasado.", "justo antes de salir.", "hace un momento.", "en la madrugada."];


function excusa(quien, verbo, que, cuando) {
  
  const aleatorio= Math.floor(Math.random() * 5);
  
  let quien_salida = quien[aleatorio];
  let verbo_salida= verbo[aleatorio];
  let que_salida = que[aleatorio];
  let cuando_salida = cuando[aleatorio];

  const oracion = quien_salida  + " " + verbo_salida + " " + que_salida + " " + cuando_salida;

  return oracion;
}

const excusa_completa = excusa(quien, verbo, que, cuando);
console.log(excusa_completa);

document.getElementById("excusa").innerHTML = 
  excusa_completa;
