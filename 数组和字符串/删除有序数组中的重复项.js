
// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    if(n === 0){
        return 0
    }
    let fast = 1; let slow = 1;
    while(fast < n){
        if(nums[fast] !== nums[slow - 1]){
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast
    }
    return nums.slice(0,slow)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])