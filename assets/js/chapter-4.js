jQuery(document).ready(function($) {

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
});