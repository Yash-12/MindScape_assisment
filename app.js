const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// function validateForm(){
//   const name = document.getElementById('name').value;
//   const username = document.getElementById('user').value;

//   if(name == ""){
//     document.getElementById('name1').innerHTML= "Please fill the name";
//     return false;
//   }
  
//   if(username == ""){
//     document.getElementById('user').innerHTML = "please fill the username";
//     return false;
//   }

// };








