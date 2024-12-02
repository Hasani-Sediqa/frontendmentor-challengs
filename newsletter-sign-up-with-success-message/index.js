document.addEventListener("DOMContentLoaded", function (){ 

const form = document.getElementById("container");
const successMessage= document.getElementById("message");
const invalidMsg = document.getElementById("invalid");
const emailinput = document.getElementById("email");
const userEmail = document.getElementById("user-email");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailinput.value.trim(); 
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 if (emailRegex.test(email)) {
    form.style.display="none";
    successMessage.style.display="block"
    invalidMsg.classList.add("hidden");
    userEmail.innerHTML=email
  } else {
    invalidMsg.classList.remove("hidden");
    invalidMsg.style.color="hsl(4,100%,67%)";
    emailinput.style.backgroundColor = "rgb(255,232,230)";
    emailinput.style.color = "hsl(4,100%,67%)"; 
  }
});

//reset the input field
const messageBtn=document.getElementById("dismiss-btn");
messageBtn.addEventListener('click', function(){
  successMessage.style.display="none";
  form.style.display="block";
  emailinput.value = ""; // Clear the email input field 
  emailinput.style.backgroundColor = ""; // Reset background color 
  emailinput.style.color = ""; // Reset text color 
  invalidMsg.classList.add("hidden"); // Hide the invalid email message
})
});




























