let count = 0;
let countElement = document.getElementById("count");
updateCounter();

function plus(){
  count++;
  countElement.value = count;
  updateCounter();
}

function minus(){
  count--;
  countElement.value = count;
  updateCounter();
}

function updateCounter(){
  countElement.innerHTML = "Il conteggio aggiornato è : "+count;
}
