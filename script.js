// function storeUserDetails() {
//     // Get input values
//     var name = document.getElementById('nameInput').value;
//     var email = document.getElementById('emailInput').value;
//     var number = document.getElementById('numberInput').value;
  
//     // Create a user object
//     var user = {
//       name: name,
//       email: email,
//       number : number
//     };
  
//     // Get existing user details from local storage
//     var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
//     // Add the new user to the array
//     storedUsers.push(user);
  
//     // Store updated user details back to local storage
//     localStorage.setItem('users', JSON.stringify(storedUsers));
  
//     // Clear input fields
//     document.getElementById('nameInput').value = '';
//     document.getElementById('emailInput').value = '';
//     document.getElementById('numberInput').value = '';
  
//     // Display stored user details
//     displayStoredUsers();
//   }
  

//   function displayStoredUsers() {
//     // Get the user list element
//     var userList = document.getElementById('userList');
  
//     // Clear existing list items
//     userList.innerHTML = '';
     
//     // Get stored user details from local storage
//     var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
//     // Loop through the stored users and create list items
//     storedUsers.forEach(function(user) {
//       var listItem = document.createElement('li');
//       listItem.textContent = 'Name: ' + user.name + ' , E-mail: ' + user.email + ' , PhoneNumber :' + user.number;
//       userList.appendChild(listItem);
//     });

//       var deleteButton = document.createElement('input')
//       deleteButton.type = 'button';
//       deleteButton.value = 'Delete';

//       deleteButton.onclick = () => {
//         localStorage.removeItem(user.email);
//         userList.appendChild(listItem);
//       }

//       listItem.appendChild(deleteButton);
//       userList.appendChild(listItem);
//   }
  
//   // Call the display function when the page loads to show any existing stored users
//   displayStoredUsers();

  
//   let a = document.querySelector(".box");

//   a.addEventListener("click", function change(){
//     a.innerHTML = " HELLO CODERS !";
//     a.style.color = "crimson";
//     a.style.background = "black";
//   });

let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

let  flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        document.querySelector("button").innerHTML = "OFF";
        bulb.style.backgroundColor = "yellow";
        flag =1;
        }
    else{
        document.querySelector("button").innerHTML = "ON";
        bulb.style.backgroundColor = "transparent";
        flag =0;
        }
    })

