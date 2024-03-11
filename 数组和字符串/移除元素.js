
// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]

// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
// 输出：5, nums = [0,1,3,0,4]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0
    for(let i = 0;i < nums.length;i++){
        if(nums[i] !== val){
            nums[index] = nums[i]
            index++;
        }
    }
    return index
};