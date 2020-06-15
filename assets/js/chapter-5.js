jQuery(document).ready(function($) {
    
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



});