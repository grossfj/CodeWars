function solution(nums) {

    return nums != null ? nums.sort(function (a, b) { return b - a }).reverse() : [];

}