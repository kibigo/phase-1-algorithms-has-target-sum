function hasTargetSum(array, target) {
  const arrayDiff = {};

  for (let i = 0; i<array.length; i++){
    const diff = target - array[i];

    if(arrayDiff[diff]){
      return [array[i], diff];
    }
    
    arrayDiff[array[i]] = true;
  }
  return null;
}

/* 
  iterate throught the array, take each number minus the target
  find two numbers that when subracted from target can add up to 20
*/

/* 
  get an empty array 
  iterate over each item in array
  subtract each number in the array from the target number
  if two numbers are found, the iteration stops
*/

/*
  get the difference between the numbers in array and the target number

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
