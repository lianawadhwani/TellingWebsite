
function helloWorld(){
alert("helloWorld");
}

var events= ["cough", "wheeze"];
let divList= document.getElementById('listHolder');
function message(){
  let word = document.getElementById("text").value;
  console.log(word);
  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.innerHTML = word;
  ul.appendChild(li);
  events.push(word);
}
