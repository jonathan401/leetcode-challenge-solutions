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

const nums = [1, 4, 1, 5, 2, 1];

let indices = [];
nums.forEach((num) => {
  let index = nums.indexOf(num);
  while (index !== -1) {
    indices.push(index);
    index = nums.indexOf(num, index + 1);
  }
});
// // console.log(indices);
// let newPos = [...new Set(indices)];
// console.log(nums);
// console.log(newPos);
// newPos.forEach((pos) => console.log(`${nums[pos]} was found at index ${pos}`));
// for (i = 0; i < newPos.length; i++) {
//   for (j = 0; j < newPos.length; j++) {
//     if (newPos[i] !== newPos[j]) {
//       console.log(newPos[i], newPos[j]);
//       console.log(nums[newPos[i]], newPos[i]);
//     }
//   }
// }

const twoSums = (nums, target) => {
  // create array to hold the individual index of each number in the array
  let indices = [];
  let noDup = [];
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
  noDup = [...new Set(indices)];
  for (i = 0; i < noDup.length; i++) {
    for (j = 0; j < noDup.length; j++) {
      // loop through the non-duplicate array and get every addition combination
      if (noDup[i] !== noDup[j] && nums[noDup[i]] + nums[noDup[j]] === target) {
        // console.log(nums[noDup[i]], nums[noDup[j]]);
        addsUpTo.push([noDup[i], noDup[j]]);
      }
    }
  }
  return addsUpTo[0];
};

// const testCase = [2, 7, 11, 15];
// const testCase = twoSums([1, 4, 1, 5, 2, 1], 6);
const testCase = twoSums([2, 7, 11, 15], 9);
// const testCase = twoSums([3, 3], 6);
console.log(testCase);
