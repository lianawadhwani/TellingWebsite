


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


function valid(){
let email = document.getElementById("email").value;
let validRegex =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (email.match(validRegex)){
  return (true);
} else{
  alert("Your email is not valid. Please enter in a new email");
  return (false);
}

}

function post(){
if (valid()==true){
  $.ajax({
    type: "POST",
    url: "https://reqbin.com/echo/post/json",
    data:{
      "email": document.getElementById("email").value ,
      "deviceInfo": platform.description,
     },

    success: function(result){
      console.log(result);
    },

    dataType: "json"
  });
}

}
