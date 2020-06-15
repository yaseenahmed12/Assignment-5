jQuery(document).ready(function($) {
    
    // Write a program that takes a character (number or string)
    // in a variable & checks whether the given input is a
    // number, uppercase letter or lower case letter. (Hint: ASCII
    // codes:- A=65, Z=90, a=97, z=122).
    var input = parseInt( prompt("Enter number") );
    var A = "65";
    var Z = "90";
    var a = "97";
    var z = "122";

    if ( input = "65" ) {
        document.write("Uppercase letter" , "<br>");
    }else if( input = "90" ) {
        document.write("Uppercase letter" , "<br>");
    }else {
       document.write("Lowercase letter" , "<br>"); 
    }  

    // Write a JavaScript program that accept two integers and
    // display the larger. Also show if the two integers are equal.
    var num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");
                                                     
    if(parseInt(num1, 10) > parseInt(num2, 10)) 
      { 
        document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ "." , "<br>");
      }   
    else
      if(parseInt(num2, 10) > parseInt(num1, 10)) 
      {
        document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ "." , "<br>");
      }                  
    else
      {
       document.write("The values "+ num1+ " and "+num2+ " are equal." , "<br>");
      }

    //Write a program that takes input a number from user & state whether the number is positive, negative or zero.
    var theNumber = parseInt( prompt("Enter number") );

    if (theNumber < 0) {
       document.write("Postive" , "<br>");
    }
    else {
       document.write("Negative" , "<br>");
    }

    // Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
    // i. Check if user has entered password. If not, then
    // give message “ Please enter your password”
    // ii. Check if both passwords are same. If they are
    // same, show message “Correct! The password you
    // entered matches the original password”. Show
    // “Incorrect password” otherwise.
    var password = "1234567";
    var input = parseInt( prompt("Enter number") );

    if (password == input) {
        document.write("Correct! The password you entered matches the original password" , "<br>");
    } else {
        document.write("Incorrect password" , "<br>");
    }

    // This if/else statement does not work. Try to fix it:
    // var greeting;
    // var hour = 13;
    // if (hour < 18) {
    // greeting = "Good day";
    // else
    // greeting = "Good evening";
    // }
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }

    // Write a program that takes time as input from user in 24
    // hours clock format like: 1900 = 7pm. Implement the
    // following case using if, else & else if statements
    var inputTime = parseInt( prompt("Enter number") );
    if(inputTime >= "00:00" && inputTime < "12:00") {
        document.write("Good Morning" , "<br>");
    }else if (inputTime >= "12:00" && inputTime < "17:00") {
        document.write("Good afternoon" , "<br>");
    }else if (inputTime >= "17:00" && inputTime < "21:00") {
        document.write("Good evening" , "<br>");
    }else if (inputTime >= "21:00" && inputTime < "23:59") {
        document.write("Good night" , "<br>");
    }
});