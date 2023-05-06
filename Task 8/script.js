function compareVal() {
    var num1 = parseInt(document.getElementById("firstNo").value);
    var num2 = parseInt(document.getElementById("secondNo").value);


    if(num1 == num2){
        document.getElementById("result").value = "Both numbers are equal.";
    }
    else if(num1 > num2){
        document.getElementById("result").value = "The greater value is " + num1;
    }
    else{
        document.getElementById("result").value =  "The greater value is " + num2;
    }

}