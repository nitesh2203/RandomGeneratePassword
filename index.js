const passwordBox = document.getElementById("password");
const lenght = 16;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@!#$%^&*()[]{}<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    password+= uppercase[Math.floor(Math.random()*uppercase.length)];
    password+= lowercase[Math.floor(Math.random()*lowercase.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];
    password+= number[Math.floor(Math.random()*number.length)];

    while(length > password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)];
    }
   passwordBox.value = password;
}