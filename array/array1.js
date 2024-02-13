//this function is for getting middle values using array
function getMiddleNumber(array) {

    var lengthOfArray = array.length;
    var remainder = lengthOfArray%2;
    var median = 0;
    
    if (remainder === 0) {
      var middleName = [];
      median = lengthOfArray/2;
     middleName.push(array[median-1]);
     middleName.push(array[median]);
    } else {
      var middleName = "";
      median = (lengthOfArray+1)/2;
      middleName = array[median-1]
    }
    
    console.log(middleName);
   };
   
   var names = ["Reine", "Ruth", "Emelyne", "Gisele", "Cynthia", "Ange"];
   var otherNames = ["Claudine", "Brendah","Beyla"]
   getMiddleNumber(names);
   getMiddleNumber(otherNames);