let quien = ["Un duende", "El vecino", "Mi hermano", "Un fantasma", "El presidente"];
let verbo = ["destruyó", "escondió", "hizo desaparecer", "incineró", "saboteó"];
let que = ["las llaves", "el informe", "el documento", "la presentación", "el dinero"];
let cuando = ["ayer en la noche.", "el fin de semana pasado.", "justo antes de salir.", "hace un momento.", "en la madrugada."];


function excusa() {
  let quienRandom = quien[Math.floor(Math.random()*quien.length)];
  let verboRandom= verbo[Math.floor(Math.random() * verbo.length)];
  let queRandom = que[Math.floor(Math.random() * que.length)];
  let cuandoRandom = cuando[Math.floor(Math.random() * cuando.length)];

  let oracion = `${quienRandom} ${verboRandom} ${queRandom} ${cuandoRandom}`;

  return oracion;
}

const excusaCompleta = excusa(quien, verbo, que, cuando);
console.log(excusaCompleta);

document.getElementById("excusa").innerHTML = 
  excusaCompleta;
