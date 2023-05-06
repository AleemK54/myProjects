const form = document.getElementById('form');
const errorElement = document.getElementById('error'); 

var specialChars = "<>@!#$%^&*()_+[]{}?:;|',./~`-=";
var checkForSpecialChar = function(string){
 for(i = 0; i < specialChars.length;i++){
   if(string.indexOf(specialChars[i]) > -1){
       return false
    }
 }
 return true;
}


form.addEventListener('submit', (e) => {
    var specialChars = "<>@!#$%^&*()_+[]{}?:;|',./~`-=";
    var p = document.getElementById('psw').value,
    errors = [];
if(checkForSpecialChar(p)){
    errors.push("Your password must contain at least one special character.")
}
if (p.length < 8) {
    errors.push("Your password must be at least 8 characters");
}
if (p.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter."); 
}
if (p.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
}
if(p.search()){
    errors.push("Your password must contain at least one special character.")
}
if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
}
return true;
}) 


