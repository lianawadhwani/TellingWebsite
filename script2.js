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

let urL = new URL("http://127.0.0.1:61585/TellingWebsite/invitation.html");
console.log("https://"+urL.hostname+"/api/email_invitation");


function post(){
if (valid()==true){
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "https://"+urL.hostname+"/api/email_invitation",
    data:{
      "email": document.getElementById("email").value ,
      "deviceInfo": platform.description,
     },

    success: function(result){
      console.log(result);
    },

    error: function (){
      alert("error loading results");
    },

    dataType: "json"
  });
}

}
