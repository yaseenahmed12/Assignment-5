jQuery(document).ready(function($) {

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
});