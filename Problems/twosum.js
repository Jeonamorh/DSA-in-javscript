// My way is to run double loop but it having BigO (On^2)

var twoSum = function (nums, target) {
  let mp = new Map(); // store the value and key of array

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};

// having BigO (On)
