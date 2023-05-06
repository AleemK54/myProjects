function add_number() {
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    ans = num1 + num2;
    document.getElementById("answer").value= "= " + ans;
}
function subtract_number(){
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    ans = num1 - num2;
    document.getElementById("answer").value= "= " + ans;
}
function multiplyBy(){
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    ans = num1 * num2;
    document.getElementById("answer").value= "= " + ans;
}
function divideBy(){
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    ans = num1 / num2;
    document.getElementById("answer").value= "= " + ans;
}
