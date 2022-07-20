
function helloWorld(){
alert("helloWorld");
}

var events= ["cough", "wheeze"];
function message(){
  console.log("hidden message");
  let word = document.getElementById("text").value;
  console.log(word);
  events.push(word);
  document.write(<label for="new"> word </label> <br>)
}
