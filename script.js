// Number of Characters

// var main = function (input) {
// var myOutputValue = 'hello world';
// var counter =0;
//   while (counter < input){
//   myOutputValue = myOutputValue +`😘`
//   return myOutputValue;
// };
// }

// // Square
// var main = function (input) {
//   var myOutputValue = "";

//   var counter = 0;
//   while (counter < input) {
//     var innerCounter = 0;
//     while (innerCounter < input) {
//       myOutputValue = myOutputValue + `😘`;
//       innerCounter = innerCounter + 1;
//     }
//     myOutputValue = myOutputValue + `<br>`;
//     counter = counter + 1;
//   }
//     return myOutputValue;
// };

// // Triangle (right angled triangle)
// var main = function (input) {
//   var myOutputValue = "";

//   var outerCounter = 0;
//   while (outerCounter < input) {

//     var innerCounter = 0;
//     while (innerCounter < (outerCounter+1)){
//       myOutputValue += `😴`;
//       innerCounter += 1;
//     }
//     myOutputValue =  myOutputValue + `<br>`;
//     outerCounter = outerCounter + 1;
//   }
//   return myOutputValue;
// };

//================WRONG (MY ANS FOR OUTLINE SQ)===================

// var main = function (input) {
//   var outerSideLength = input;
//   var myOutputValue = "";

//   var outerSqCounter = 0;

//   if (outerSqCounter == 0) {
//     while (outerSqCounter < outerSideLength) {
//       var innerCounter = 0;
//       while (innerCounter < outerSideLength) {
//         myOutputValue += `😬`;
//         innerCounter += 1;
//       }
//     }
//     myOutputValue += `<br>`;
//   }
//   // Inner square --> to put in if statement as a condition
//   if (outerCounter > 0 && outerCounter < input) {
//       var withinSqCounter = 0;
//       var smallSquare;
//       var smallSquareLines = `😜` + smallSquare + `😜`;
//       while (withinSqCounter < innerSideLength) {
//         var innerSqCounter = 0;
//         while (innerSqCounter < innerSideLength) {
//           smallSquare = `😘`;
//           innerSqCounter += 1;
//         }
//         smallSquareLines += `<br>`;
//         withinSqCounter = withinSqCounter + 1;
      
//         myOutputValue = myOutputValue + `<br>`;
//       }
//     outerCounter = outerCounter + 1;
//   }
//   return myOutputValue;
// };
// ===============================================


/* Solution for Outline Square*/
var outlineSquare = function (input) {
 var myOutputValue = '';
 // sideLength represents the length of each side of the square
 var sideLength = Number(input);
 var outerCounter = 0;
 while (outerCounter < sideLength) {
   var innerCounter = 0;
   while (innerCounter < sideLength) {
     // If current iteration represents a border element, draw ✊ instead.
     if (outerCounter == 0 || outerCounter == sideLength - 1
       || innerCounter == 0 || innerCounter == sideLength - 1) {
       myOutputValue += '✊';
     } else {
       // Add a 👍 to the current row
       myOutputValue += '👍';
     }

     innerCounter += 1;
   }
   // Insert a line break to start a new row
   myOutputValue += '<br>';
   outerCounter += 1;
 }
 return myOutputValue;
};

//** Solution for Center Square*//
  
var CENTRESQ  = function (input) {
 var myOutputValue = '';
 // sideLength represents the length of each side of the square
 var sideLength = Number(input);
 // Do not accept side lengths that are not odd, because
 // non-odd side lengths cannot have a centre character.
 if (sideLength % 2 != 1) {
   return 'Please enter an odd number for side length';
 }
 var outerCounter = 0;
 while (outerCounter < sideLength) {
   var innerCounter = 0;
   while (innerCounter < sideLength) {
     var halfSideLengthIndex = Math.floor(sideLength / 2);
     // If current iteration represents a border element, draw ✊ instead.
     if (outerCounter == 0 || outerCounter == sideLength - 1
       || innerCounter == 0 || innerCounter == sideLength - 1) {
       myOutputValue += '✊';
       // If current iteration represents the middle element, draw 😁.
     } else if (outerCounter === halfSideLengthIndex && innerCounter === halfSideLengthIndex) {
       myOutputValue += '😁';
       // Add a 👍 to the current row
     } else {
       myOutputValue += '👍';
     }
     innerCounter += 1;
   }
   // Insert a line break to start a new row
   myOutputValue += '<br>';
   outerCounter += 1;
 }
 return myOutputValue;
};

//** Solution for Rings (this was hard!)*//
var main = function (input) {
 var myOutputValue = '';
 // sideLength represents the length of each side of the square
 var sideLength = Number(input);
 // Initialise 2D array to represent grid to print
 var grid = [];
 for (let i = 0; i < sideLength; i += 1) {
   // Push sideLength arrays of length sideLength into grid
   grid.push(Array(sideLength));
 }

 // Draw halfSideLengthIndex concentric circles in the grid, starting from the outside
 var halfSideLengthIndex = Math.floor(sideLength / 2);
 for (let i = 0; i < halfSideLengthIndex; i += 1) {
   var emoji = i % 2 == 0 ? '✊' : '👍';
   // Fill top and bottom rows of square
   for (let j = i; j < sideLength - i; j += 1) {
     grid[i][j] = emoji;
     grid[sideLength - 1 - i][j] = emoji;
   }
   // Fill sides of middle rows of square
   for (let j = i + 1; j < sideLength - 1 - i; j += 1) {
     grid[j][i] = emoji;
     grid[j][sideLength - 1 - i] = emoji;
   }
 }

 // Add centre element if side length is odd
 if (sideLength % 2 == 1) {
   if (sideLength % 4 == 1) {
     grid[halfSideLengthIndex][halfSideLengthIndex] = '✊';
   } else if (sideLength % 4 == 3) {
     grid[halfSideLengthIndex][halfSideLengthIndex] = '👍';
   }
 }

 // Translate what's in the grid to myOutputValue
 for (let i = 0; i < sideLength; i += 1) {
   for (let j = 0; j < sideLength; j += 1) {
     myOutputValue += grid[i][j];
   }
   // Insert a line break to start a new row
   myOutputValue += '<br>';
 }
 return myOutputValue;
};

