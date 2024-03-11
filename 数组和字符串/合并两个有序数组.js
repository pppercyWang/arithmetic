// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
// 解释：需要合并 [1] 和 [] 。
// 合并结果是 [1] 。
// 示例 3：

// 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出：[1]
// 解释：需要合并的数组是 [] 和 [1] 。
// 合并结果是 [1] 。
// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。

// 解法1
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length - m, ...nums2)
    return  nums1.sort()
};
// console.log(merge( [1,5,9,0],2,[4,2],2))




// 解法2
var merge2 = function(nums1, m, nums2, n) {
 // 给两个有序数组设立指针，初始值为0
 let p1 = 0, p2 = 0;
 // 创建一个数组长度为m+n的数组并填入0
 const sorted = new Array(m + n).fill(0);
 let cur;
 // 因为本身两个数组就是有序的，所以当p1 === m 或者 p2 === n时，就有一组数据比对完成了，此时已经完成了比对
 while(p1 < m || p2 < n){
     // 此时p1指到一个空位置
     if(p1 === m){
         cur = nums2[p2++]
     }else if (p2 === n){
         cur = nums1[p1++]
         // 当nums1的当前指针对应数<nums2的当前指针对应数，则把这个比对结果，放到sorted数组（数组优先放小的数）
     }else if (nums1[p1] < nums2[p2]){
         cur = nums1[p1++]
     } else{
         cur = nums2[p2++]
     }
     sorted[p1+p2-1] = cur
 }
 return sorted
}
console.log(merge2( [1,2,5,0,0,0],3,[3,5,6],3))












