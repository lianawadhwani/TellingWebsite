
function helloWorld(){
alert("helloWorld");
}

var events= ["cough", "wheeze"];
let divList= document.getElementById('listHolder');
function message(){
  let word = document.getElementById("text").value;
  let form = document.getElementById('list');
  let input = document.createElement('input');
  let label = document.createElement("label");
  label.setAttribute("for", word);
  label.innerHTML=word;
  input.setAttribute("type", "radio");
  input.setAttribute("id", word);
  input.setAttribute("value", word);
  console.log(input);
  form.appendChild(input);
  form.appendChild(label);
  events.push(word);
}
