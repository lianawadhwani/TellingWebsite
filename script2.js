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
    contentType: "application/json",
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
