jQuery(document).ready(function($) {
    
    // Write a program to take “city” name as input from user. If
    // user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
    var cityName = prompt("Please enter city name").toLowerCase();
    if(cityName == "karachi") {
        alert("Welcome to city of lights");
    }else {
        alert("Type karachi");
    }

    // Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
    // user is female, give the message: Good Morning Ma’am.
    var cityName = prompt("Please enter Gender name").toLowerCase();
    if(cityName == "male") {
        alert("Good Morning Sir.");
    }else if("female") {
        alert(" Good Morning Madam.");
    }

    // Write a program to take input color of road traffic signal from the user & 
    // show the message according to this table:
    var signalColor1 = prompt("Please enter color of road traffic signal").toLowerCase();
    var signalColor2 = prompt("Please enter color of road traffic signal").toLowerCase();
    var signalColor3 = prompt("Please enter color of road traffic signal").toLowerCase();

    var signalColorMessage1 = prompt("Please enter traffic signal message").toLowerCase();
    var signalColorMessage2 = prompt("Please enter traffic signal message").toLowerCase();
    var signalColorMessage3 = prompt("Please enter traffic signal message").toLowerCase();

    var table = '<table class="traffic-single-table"><tr><th>Signal color</th><th>Message</th></tr><tr><td>'+signalColor1+'</td><td>'+signalColorMessage1+'</td></tr><tr><td>'+signalColor2+'</td><td>'+signalColorMessage2+'</td></tr><tr><td>'+signalColor3+'</td><td>'+signalColorMessage3+'</td></tr></table>';
    document.write(table);

    // Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
    // show the message “Please refill the fuel in your car”
    var fuel = prompt("Please enter fuel").toLowerCase();
    if( fuel == "0.25litres") {
        alert("Please refill the fuel in your car");
    }else {
        alert("The fuel in your car is full");
    }

    //Run this script, & check whether alert message would be displayed or not. Record the outputs.
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if(c === 14){
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    }
    if (true){
        alert("True");
    }
    if (false){
        alert("False");
    }
    if("car" < "cat"){
        alert("car is smaller than cat");
    }

    // Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
    // percentage on your page. Take percentage & compute grade as per following table:
    var subjects1 = parseInt( prompt("Enter first subject number") )
    var subjects2 = parseInt( prompt("Enter second subject  number") )
    var subjects3 = parseInt( prompt("Enter third subject  number") )
    var totalSubjectNumber = subjects1 + subjects2 + subjects3;
    var totalMarks = 100 * 3;
    var Finalpercentage = totalSubjectNumber / totalMarks * 100;
    console.log(Finalpercentage);

    document.write("<h2>Marks Sheet</h2>");
    
    if (Finalpercentage > 80) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "A-one" , "<br>");
        document.write("Remarks:", "Excellent" , "<br>");
    } else if(Finalpercentage > 70) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "A" , "<br>");
        document.write("Remarks:", "Good" , "<br>");
    }else if(Finalpercentage > 60) {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "B" , "<br>");
        document.write("Remarks:", "You need to improve" , "<br>");
    }else {
        document.write("Total Marks:", totalMarks , "<br>");
        document.write("Marks obtained:", totalSubjectNumber , "<br>");
        document.write("Percentage:", Finalpercentage , "%" , "<br>");
        document.write("Grade:", "F" , "<br>");
        document.write("Remarks:", "Sorry" , "<br>");
    }

    // Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
    // a. If user guesses the same number, show “Bingo! Correct
    // answer”.
    // b. If the guessed number +1 is the secret number, show
    // “Close enough to the correct answer”

    var randomNumber = Math.floor(Math.random() * 10 ) + 1;
    var guess = prompt('I am thinking of a random number between 1 and 10. What is it?');
    if (parseInt(guess) === randomNumber ) {
        document.write('<p>Close enough to the correct answer</p>');
    }  else {
        document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
    }

    // Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
    // is divisible by 3.

    var value_number = Number(prompt("Enter a Number : "));
 
    if(value_number % 3 == 0) {
        document.write("<font face='arial' size='4'> ");
        document.write("The number " +value_number+
                    " is divisible by 3. </font>");
    }
    else {
        document.write("<font face='arial' size='4'> ");
        document.write("The number " + value_number+ 
                " is not divisible by 3. </font>");
    }

    //Write a program that checks whether the given input is an even number or an odd number

    var num = Number(prompt("Enter a Number : "));
    if ( num % 2 == 0) {
        document.write("<h2>Even Number</h2> ");
    }else{
        document.write("<h2>Odd Number</h2> ");
    }

    // Write a program that takes temperature as input and
    // shows a message based on following criteria
    // a. T > 40 then “It is too hot outside.”
    // b. T > 30 then “The Weather today is Normal.”
    // c. T > 20 then “Today’s Weather is cool.”
    // d. T > 10 then “OMG! Today’s weather is so Cool.”
    var weather = parseInt( prompt("Enter first subject number") )

    if (weather > 40) {
        document.write("It is too hot outside." , "<br>");
        
    } else if(weather > 30) {
        document.write("The Weather today is Normal.", "<br>");
        
    }else if(weather > 20) {
        document.write("Today’s Weather is cool." , "<br>");
        
    }else {
        document.write("“OMG! Today’s weather is so Cool." , "<br>");
    }

    // Write a program to create a calculator for +,-,*, / & %
    // using if statements. Take the following input:
    // a. First number
    // b. Second number
    // c. Operation (+, -, *, /, %)
    // Compute & show the calculated result to user.
    var expression = "-30--20";
    match = expression.match(/^(-?\d+)([-+*/])(-?\d+)$/);

    if (match === null) {
        alert("invalid expression");
        return;
    }

    var number1 = match[1];
    var operand = match[2];
    var number2 = match[3];

    switch(operand){
        case "+" : alert(number1 + number2);  break;
        case "-" : alert(number1 - number2);  break;
        case "*" : alert(number1 * number2);  break;
        case "/" : alert(number1 / number2);  break;
        default : alert("Not a correct operation");
    }

    //Write a program to create a calculator for +,-,*, / & %
    // using if statements. Take the following input:
    // a. First number
    // b. Second number
    // c. Operation (+, -, *, /, %)
    // Compute & show the calculated result to user.

    function myFunction() {
      var x,y,z,oper;
      x=prompt("Type first number");
      y=prompt("Type second number");
      oper=prompt("Type an operator");
      
      if(oper=="+"){
        z=Number(x)+Number(y);
      }
      else if(oper=!null){
        z="Error"
      }
      else if(x=!null){
        z="Error"
      }
      else if(y=!null){
        z="Error"
      }
      else if(oper=="/"){
        z=Number(x)/Number(y);
      }
      else if(oper=="*"){
        z=Number(x)*Number(y);
      }
      else if(oper=="-"){
        z=Number(x)-Number(y);
      }
      
      return z;
    }
    document.getElementById("demo").innerHTML =myFunction();



});