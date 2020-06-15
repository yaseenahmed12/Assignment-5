jQuery(document).ready(function($) {
    
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

});