let count = 0;
let countElement = document.getElementById("count");
let buttonMinus = document.getElementById("minus");
let buttonPlus = document.getElementById("plus");
updateCounter();

buttonMinus.onclick = function(){
  count--;
  countElement.value = count;
  updateCounter();
}

buttonPlus.onclick = function(){
  count++;
  countElement.value = count;
  updateCounter();
}

function updateCounter(){
  countElement.innerHTML = "The updated count is : "+count;
}
