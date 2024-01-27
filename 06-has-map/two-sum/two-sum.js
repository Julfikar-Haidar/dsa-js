function twoSum(nums, target) {
  const numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complemnt = target - nums[i];

    if (numsSet.has(complemnt)) {
      console.log(nums.indexOf(complemnt), "if");

      return [nums.indexOf(complemnt), i];
    }
    console.log(complemnt, "complemnt");

    numsSet.add(nums[i]);
    console.log(numsSet, "numsSet");
  }
  return [];
  //   console.log("numsSet", numsSet);
}

module.exports = twoSum;
