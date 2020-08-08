//array slice
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

// array splice
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8];
const part1 = nums1.splice(2, 5, 77);
console.log(part1);
console.log(nums1);

const together = nums1.join("&");
console.log(together);