/*
  Given an array of integers nums and an integer target, return indices of
  the two numbers such that they add up to target. You may assume that each
  input would have exactly one solution, and you may not use the same
  element twice. You can return the answer in any order.
*/

/*
  Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because
  nums[0] + nums[1] == 9, we return [0, 1].
*/

const twoSum = (nums, target) => {
  // create array to hold the individual index of each number in the array
  let indices = [];
  let noDups = [];
  let addsUpTo = [];
  nums.forEach((num) => {
    // loop through the main array to get the index of every number without duplicates
    let index = nums.indexOf(num);
    while (index !== -1) {
      indices.push(index);
      index = nums.indexOf(num, index + 1);
    }
  });
  // convert the gotten array to a set to remove duplicate values
  noDups = [...new Set(indices)];
  for (i = 0; i < noDups.length; i++) {
    for (j = 0; j < noDups.length; j++) {
      // loop through the non-duplicate array and get every addition combination
      if (
        noDups[i] !== noDups[j] &&
        nums[noDups[i]] + nums[noDups[j]] === target
      ) {
        addsUpTo.push([noDups[i], noDups[j]]);
      }
    }
  }
  return addsUpTo[0];
};

// const testCase = [2, 7, 11, 15];
// const testCase = twoSum([1, 4, 1, 5, 2, 1], 6);
// const testCase = twoSum([2, 7, 11, 15], 9);
const testCase = twoSum([3, 3], 6);
console.log(testCase);
