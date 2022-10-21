// oppgave 1

/* var myarray = [6, 2, 12, "abc", 5, 9]

function findFirstElement(array) {
    return array[0]
}

document.write(findFirstElement(myarray))
*/

// oppgave 2

/* var myarray = [6, 2, 12, "abc", 5, 9]

function findLastElement(array) {
    return array[array.length - 1]
}

document.write(findLastElement(myarray))
*/

// oppgave 3

/* var myarray = [6, 2, 12, 83, 5, 9]

var sum = 0
var multiplySum = 0

function sumAndMultiply(array) {

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        multiplySum = array.reduce((accumulator, current) => accumulator*current,1);

    }

    return sum + "<br>" + multiplySum
} 
document.write(sumAndMultiply(myarray))
*/

// oppgave 4

/* var myarray = [6, 2, 12, 83, 5, 9]
var myarray2 = [7, 1, 2, 6, 4, 12]

function arraySum(array1, array2) {
  var result = [];
  var ctr = 0;
  var x = 0;

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

document.write(arraySum(myarray, myarray2));
*/
