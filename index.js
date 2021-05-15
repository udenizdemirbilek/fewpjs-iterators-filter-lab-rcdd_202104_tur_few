// Code your solution here
function findMatching (driverArray, string){
    const upperCaseString = string.charAt(0).toUpperCase () + string.slice(1);
	// console.log(upperCaseString)
    //  const upperCaseDriverArray = driverArray.map(driver => driver.charAt(0).toUpperCase() + driver.slice(1) )
    // console.log(upperCaseDriverArray)
   return driverArray.filter(name => (name.charAt(0).toUpperCase() + name.slice(1)) === upperCaseString)
}
//Letter check for every letter in string 
function fuzzyMatch (driverArray, string) {
    //Beyin bedava kelime başında string olacak şekilde RegEXP
    const regexp = new RegExp("(^" + string +")", 'i');
    return driverArray.filter(driver => regexp.test(driver))
}

//From solution
// function fuzzyMatch (list, partialName) {
//     let lengthOfName = partialName.length;
//     return list.filter(function (driverName) {
//       return driverName.slice(0, lengthOfName) === partialName;
//     });
//   }

function matchName (driverArray, string) {
return driverArray.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}