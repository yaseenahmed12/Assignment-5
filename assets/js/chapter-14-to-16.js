jQuery(document).ready(function($) {
    
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