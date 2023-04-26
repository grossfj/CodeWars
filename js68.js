function highAndLow(nums) {
    // ...
    var nums = nums.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}