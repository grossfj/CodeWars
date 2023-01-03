var twoSum = function (nums, target) { // Leetcode
    var sum;
    var mas = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                mas.push(i)
                mas.push(j)
                return mas;
            }
        }

    }

};