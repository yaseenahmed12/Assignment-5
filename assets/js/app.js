jQuery(document).ready(function($) {
    
    //Write a script to greet your website visitor using JS alertbox.
    alert("Welcome to your website");

    //Write a script to display following message on your webpage:
    alert("Error! Please enter a valid password.");

    //Write a script to display following message on your webpage: (Hint : Use line break)
    alert("Welcome to Js Land..\n Happy Coding!");

    //Write a script to display following messages in sequence:
    alert("Welcome to Js Land..");

    $( function() {
       $('#dialog').dialog();
    });

    //Generate the following message through browser’s developer console:
    alert("Hello.. I can run JS through my web browser's console");

    //Declare a variable called username.
    var username = "Muhammad Yaseen";

    //Declare a variable called myName & assign to it a string that represents your Full Name.
    var myName = username;

 	// Write script to 
 	// a) Declare a JS variable, titled message.
	// b) Assign “Hello World” to variable message
	// c) Display the message in alert box
	var titled = "Hello World";
	alert(titled);

	//Write a script to save student’s bio data in JS variables and show the data in alert boxes.
	var studentName = "Muhammad Yaseen";
	var studentAge = "26";
	var studentCourseName = "Certified Mobile Application Development";
	alert(studentName);
	alert(studentAge);
	alert(studentCourseName);

	//Write a script to display the following alert using one JS variable:
	alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

	// Declare a variable called email and assign to it a string that represents your Email 
    // Address(e.g. example@example.com). Show the blow mentioned message in an alert box.
    // (Hint: usestring concatenation)
    var userEmail = "yaseenmighty86@gmail.com";
    alert("My email Address is " + userEmail);

    // Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
    // message in an alert box:
    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from the Book " + book);

    //Write a script to display this in browser through Js
   	document.write("Yah! I can write HTML content through JavaScript");

    //Store following string in a variable and show in alert and browser through JS
    var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);

     //Declare a variable called age & assign to it your age. Showyour age in an alert box.
    var age = "26";

    // Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
    // number of visits on your web page. For example: “You have visited this site N times”.
    function nameDefined(ckie,nme) {
       var splitValues
       var i
       for (i=0;i<ckie.length;++i) {
          splitValues=ckie[i].split("=")
          if (splitValues[0]==nme) return true
       }
       return false
    }

    function delBlanks(strng) {
       var result=""
       var i
       var chrn
       for (i=0;i<strng.length;++i) {
          chrn=strng.charAt(i)
          if (chrn!=" ") result += chrn
       }
       return result
    }
    function getCookieValue(ckie,nme) {
       var splitValues
       var i
       for(i=0;i<ckie.length;++i) {
          splitValues=ckie[i].split("=")
          if(splitValues[0]==nme) return splitValues[1]
       }
       return ""
    }
    function insertCounter() {
         readCookie()
         displayCounter()
    }
    function displayCounter() {
        alert("You've visited this page " + counter+" times.")
    }
    function readCookie() {
         var cookie=document.cookie
         counter=0
         var chkdCookie=delBlanks(cookie)  //are on the client computer
         var nvpair=chkdCookie.split(";")
         if(nameDefined(nvpair,"pageCount"))
         counter=parseInt(getCookieValue(nvpair,"pageCount"))
         ++counter
         var futdate = new Date()
         var expdate = futdate.getTime()
         expdate += 3600000 * 24 *30  //expires in 1 hour
         futdate.setTime(expdate)

         var newCookie="pageCount="+counter
         newCookie += "; expires=" + futdate.toGMTString()
         window.document.cookie=newCookie
    }
    insertCounter();

    //Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
    var birthYear = "23-10-1993";
    document.write("My birth year is " + birthYear + "<br>");
    document.write("Data type of my declare variable is number");

     //Declare 3 variables in one statement.
    var firstName = "Muhammad";
    var lastName = "Yaseen";
    var jobPosition = "Web Guru";

    document.write("My name is" + " " + firstName + " " +  lastName + "and I am" + " " + jobPosition + "<br>" );

    // Declare 5 legal & 5 illegal variable names
    // Legal Varibales
    var firstName = "Muhammad";
    var lastName = "Yaseen";
    var jobPosition = "Web Guru";
    var Age = "26";
    var city = "karachi";

    //Illegal
    var P2_a%88$;
  	var $_;
    var _jobPosition = "Web Guru";
    var A+ge = "26";
    var city% = "karachi";

 	// Display this in your browser
	// a) A heading stating “Rules for naming JS variables”
	// b) Variable names can only contain ______, ______,
	// ______ and ______.
	// For example $my_1stVariable
	// c) Variables must begin with a ______, ______ or
	// _____. For example $name, _name or name
	// d) Variable names are case _________
	// e) Variable names should not be JS _________

	document.write("Rules for naming JS variables" + "<br>" );
	var number = "1st";
	var dollar = "$";
	var underScore =  "_";
	var combineWords = dollar+"my"+underScore+number+"Variable";

	document.write("Variable names can only contain, " + "numbers" + ", " + dollar + " and " + underScore + " . " + " For Example : " + combineWords + "<br>");

	// Variables must begin with a ______, ______ or _____. For example $name, _name or name
	var dollarName = "$Yaseen";
	var underScoreName = "_Yaseen";
	var name = "Yaseen";
	document.write("Variables must begin with a" + " " + dollarName + " , " + underScoreName  + " , " +  name);

	// Variable names are case
	var variblaenames = "sensitive";
	document.write("Variable names are case" + variblaenames);

	// Variable names should not be JS 
	var jsWords = "JS keywords";
	document.write("Variable names should not be JS " + jsWords);

	// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
   var number1 = 3;
   var number2 = 5;
   var total = number1 + number2;
   document.write("Sum of " + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " : " + total + "<br>");

   var number1 = 5;
   var number2 = 3;
   var total = number1 - number2;
   document.write("Subtraction of " + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " : " + total + "<br>");


   var number1 = 5;
   var number2 = 3;
   var total = number1 * number2;
   document.write(" Multiplication of " + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " : " + total + "<br>");


   var number1 = 5;
   var number2 = 3;
   var total = number1 / number2;
   document.write("Division of " + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " : " + total + "<br>");

   var number1 = 5;
   var number2 = 3;
   var total = number1 % number2;
   document.write("Modulus of " + " " + number1 + " " + "and" + " " + number2 + " " + "is" + " : " + total + "<br>");

    //Do the following using JS Mathematic Expressions
    // a. Declare a variable.
    // b. Show the value of variable in your browser like “Value
    // after variable declaration is: ??”.
    // c. Initialize the variable with some number.
    // d. Show the value of variable in your browser like “Initial
    // value: 5”.
    // e. Increment the variable.
    // f. Show the value of variable in your browser like “Value
    // after increment is: 6”.
    // g. Add 7 to the variable.
    // h. Show the value of variable in your browser like “Value
    // MATH EXPRESSIONS | JAVASCRIPT
    // Page 2 of 9
    // after addition is: 13”.
    // i. Decrement the variable.
    // j. Show the value of variable in your browser like “Value
    // after decrement is: 12”.
    // k. Show the remainder after dividing the variable’s value
    // by 3.
    // l. Output : “The remainder is : 0”.

    var message;
    var message = "Value after variable declaration is: undefined";
    document.write(message + "<br>");
    var initialNumber = 5;
    document.write("Initial Value" +  " : " + initialNumber + "<br>");
    initialNumber = ++initialNumber;
    document.write("Value after increment" +  " : " + initialNumber + "<br>");
    additionIncrementValue = initialNumber + 7;
    document.write("Value after addition" +  " : " + additionIncrementValue + "<br>");
    decrementValue = --additionIncrementValue;
    document.write("Value after decrement" +  " : " + decrementValue + "<br>");
    decrementValueDivion = decrementValue % 3;
    document.write("The remainder is " +  " : " + decrementValueDivion + "<br>");

    // Cost of one movie ticket is 600 PKR. Write a script to store
    // ticket price in a variable & calculate the cost of buying 5
    // tickets to a movie. Example output:

    var costOfOneTicket = 600;
    var buyingPerson = 5;
    var totalTicketPrice = costOfOneTicket * buyingPerson;  
    document.write("Total Cost to buy " + " " + buyingPerson + " " + "tickets to movie is " + " " + totalTicketPrice + "PKR" + "<br>");

    //Write a script to display multiplication table of any number in your browser. E.g
    document.write("Table of 4 <br>")
    d = 4;  
    n = 1;
    while(d<5) {
        document.write(d+ "x" + n + "=" + d*n + "<BR>")
        if (++n == 11) {
            n = 1;
            d++;
        }
    }

    // The Temperature Converter: It’s hot out! Let’s make a
    // converter based on the steps here.
    // a. Store a Celsius temperature into a variable.
    // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    // c. Now store a Fahrenheit temperature into a variable.
    // d. Convert it to Celsius & output “NNoF is NNoC”.
    // Conversion Formulae:


    function cToF(celsius)  {
      var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        document.write(message + "<br>");
    }

    function fToC(fahrenheit) {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
        document.write(message + "<br>");
    } 
    cToF(60);
    fToC(45);

    // Write a program to implement checkout process of a
    // shopping cart system for an e-commerce website. Store
    // the following in variables
    // MATH EXPRESSIONS | JAVASCRIPT
    // Page 5 of 9
    // a. Price of item 1
    // b. Price of item 2
    // c. Ordered quantity of item 1
    // d. Ordered Quantity of item 2
    // e. Shipping charges
    // Compute the total cost & show the receipt in your browser.
    var priceOfItem1 = 650;
    var priceOfItem2 = 100;
    var quantityOfItem1 = 3;
    var quantityOfItem2 = 7;
    var ShippingCharges = 100;
    var totalCharges = priceOfItem1 * quantityOfItem1 + priceOfItem2 * quantityOfItem2 + ShippingCharges;
    document.write("Total Cost of your order" + " " + totalCharges + "<br>");

    //Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
    var totalMarks = 980;
    var obtMarks = 804;
    var percentage = obtMarks/totalMarks*100;
    document.write("Percentage:" + " " + percentage + "%");

    // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
    // script to convert the total currency to Pakistani Rupees.
    // Perform all calculations in a single expression.
    // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
    // and 1 Saudi Riyal = 28 Pakistani Rupee)
    document.write("<h2>Currency in PKR</h2>");
    var dollar = 10 * 104.80;
    var saudiRiyal = 25 * 28;
    var totalCurrencyPrice = dollar + saudiRiyal;
    document.write("Total Currency in PKR: " + " " + totalCurrencyPrice);

    // Write a program to initialize a variable with some
    // number and do arithmetic in following sequence:
    // a. Add 5
    // b. Multiply by 10
    // c. Divide the result by 2
    // Perform all calculations in a single expression
    var number = 5;
    var multiplication = number * 10;
    var divide = multiplication /2;

    // The Age Calculator: Forgot how old someone is?
    // Calculate it!
    // a. Store the current year in a variable.
    // b. Store their birth year in a variable.
    // c. Calculate their 2 possible ages based on the stored
    // values.
    // Output them to the screen like so: “They are either NN or NN
    // years old”.
    document.write("<h2>Age Calculator</h2>");
    dobYear = '1993-10-23';
    dob = new Date(dobYear);
    var today = new Date();
    var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
    document.write("Your Age is " + " " + age + "<br>");

    // The Geometrizer: Calculate properties of a circle.
    // a. Store a radius into a variable.
    // MATH EXPRESSIONS | JAVASCRIPT
    // Page 8 of 9
    // b. Calculate the circumference based on the radius, and
    // output “The circumference is NN”.
    // (Hint : Circumference of a circle = 2 π r , π = 3.142)
    // Calculate the area based on the radius, and output “The
    // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
    document.write("<h2>The Geometrizer</h2>");
    function circle(radius) {
        this.radius = radius;
        // area method
        this.area = function () {
            return Math.PI * this.radius * this.radius;
        };
        // perimeter method
        this.perimeter = function () {
            return 2*Math.PI*this.radius;
        };
    }
    var c = new circle(20);
    document.write('Area =', c.area().toFixed(2), "<br>");
    document.write('perimeter =', c.perimeter().toFixed(2) , "<br>");

    // The Lifetime Supply Calculator: Ever wonder how
    // much a “lifetime supply” of your favorite snack is?
    // Wonder no more.
    // a. Store your favorite snack into a variable
    // b. Store your current age into a variable.
    // c. Store a maximum age into a variable.
    // d. Store an estimated amount per day (as a number).
    // e. Calculate how many would you eat total for the rest of
    // your life.
    // Output the result to the screen like so: “You will need
    // NNNN to last you until the ripe old age of NN”
    document.write("<h2>Life Time Supply Calculator</h2>");
    var favourtieSnack = "Choclate Chip";
    var currentAge = "26";
    var EstimatedAge = "65";
    var snackPerDay = "3";
    document.write("Favorite Snack:" + " " + favourtieSnack + "<br>");
    document.write("Current Age:" + " " + currentAge + "<br>");
    document.write("Estimated Maximum Age:" + " " + EstimatedAge + "<br>");
    document.write("Amount of Snacks per day:" + " " + snackPerDay + "<br>");
    document.write("You will need 150 choclate chip to last you until the ripe old age of" +  " " + EstimatedAge)

     // Write a program to take a number in a variable, do the required arithmetic to display the following result in your
    // browser:
    var number = 10;
    document.write("<p>Result</p>" + "<br>");
    document.write("The value of a is:" + "" + number + "<br>");
    document.write("<br>");
    number = ++number;
    document.write("The value of ++a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
    number = ++number;
    document.write("The value of ++a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
     number = --number;
    document.write("The value of --a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");
     number = --number;
    document.write("The value of --a is:" + "" + number + "<br>");
    document.write("Now the value of a is:" + "" + number + "<br>");
    document.write("<br>");

    // // What will be the output in variables a, b & result after
    // // execution of the following script:
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;
    // Explain the output at each stage:
    // --a;
    // --a - --b;
    // --a - --b + ++b;
    // --a - --b + ++b + b--;

    var a = 2;
    var b = 1;
    var result =  --a - --b + ++b + b--;
    document.write("a is " + " " + a + "<br>");
    document.write("b is " + " " + b + "<br>");
    document.write("result is " + " " + result + "<br>");

    // // Write a program that takes input a name from user & greet the user.
    var person = prompt("Please enter your name");
    if (person != null) {
      alert("Greet" + " " + person);
    }

    // Write a program to take input a number from user &
    // display it’s multiplication table on your browser. If user
    // does not enter a new number, multiplication table of 5
    // should be displayed by default.
    var a = prompt ("please enter a number");
    var b;
    if(a == "") {
        document.write("Table of 5 <br>")
        d = 5;  
        n = 1;
        while(d<6) {
            document.write(d+ "x" + n + "=" + d*n + "<BR>")
            if (++n == 11) {
                n = 1;
                d++;
            }
        }
    }else {
        for (var i = 1; i <= 9; i++){
            b= a*i
            document.write("" + a + "*" + i + "=", + b +"<br>");
        }
    }
    // Take
    // a) Take three subjects name from user and store them in 3
    // different variables.
    // b) Total marks for each subject is 100, store it in another
    // variable.
    // c) Take obtained marks for first subject from user and
    // stored it in different variable.
    // ALERTS | JAVASCRIPT
    // Page 3 of 3
    // d) Take obtained marks for remaining 2 subjects from user
    // and store them in variables.
    // e) Now calculate total marks and percentage and show the
    // result in browser like this.(Hint: user table)

    var subject1 = prompt ("Please enter subject name");
    var subject2 = prompt ("Please enter subject name");
    var subject3 = prompt ("Please enter subject name");

    var totalMarks = 100;
    var obtainedMarks1 = prompt ("Please enter obtain marks subject number one");
    var obtainedMarks2 = prompt ("Please enter obtain marks subject number two");
    var obtainedMarks3 = prompt ("Please enter obtain marks subject number three");

    var subject1Percentage = obtainedMarks1/totalMarks*100 + "%";
    var subject2Percentage = obtainedMarks2/totalMarks*100 + "%";
    var subject3Percentage = obtainedMarks3/totalMarks*100 + "%";

    var table = '<table><tr><th>Firstname</th><th>TotalMarks</th><th>ObtainMarks</th><th>Percentage</th></tr><tr><td>'+subject1+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks1+'</td><td>'+subject1Percentage+'</td></tr><tr><td>'+subject2+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks2+'</td><td>'+subject2Percentage+'</td></tr><tr><td>'+subject3+'</td><td>'+totalMarks +'</td><td>'+obtainedMarks3+'</td><td>'+subject3Percentage+'</td></tr></table>';
    document.write(table);

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

    //Declare an empty array using JS literal notation to store student names in future.
    var studentName = ["asad", "hamza","farhan"];

    //Declare and initialize a strings array.
    var stringArray = ["alif", "baa", "taaa"];

    // Declare and initialize a numbers array
    var numbersArray = [1,2,3,4,5];

    //Declare and initialize a mixed array.
    var mixedArray = ["Abbas", 49];
    // Declare and Initialize an array and store available
    // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
    // BS, BCOM, MS, M. Phil., PhD). Show the listed
    // qualifications in your browser like:

    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MPhil", "PhD"];
    document.write("Qualifications");

    var mainList = document.getElementById("navp");
    for(var i=0;i<qualifications.length;i++){
        var item = qualifications[i];
        console.log(item);
        var elem = document.createElement("li");
        elem.value=item[0];
        // elem.innerHTML=item[1];
        mainList.appendChild(elem);
    }
});