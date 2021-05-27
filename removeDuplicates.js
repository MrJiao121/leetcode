/* 



给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 
示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列
*/

var removeDupilicate  = function(nums) {
  let idx = 0;
  for(let i=1;i<nums.length; i++) {
    if(nums[idx]<nums[i]) {
     
      i - idx != 1 ? (nums[idx+1] = nums[i]) : '';
      idx++;

    }


  }
  return idx+1;

}



/* console.log(removeDupilicate( [1,1,2]));
console.log(removeDupilicate( [0,0,1,1,1,2,2,3,3,4])); */

/* 

给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2

0
1
2 2 前两项
3 前三项 - 前一项 
1 2 3 4 5 6 7 8 

 9
0   
1 4
3 9
6 
10
15
21
28
26




输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
*/

var subarraySum1 = function(nums, k) {


  let count = 0, arr = [0];
  for(let i =0; i<nums.length; i++) {
    if(arr.length<2) {
      arr.push(nums[i]);
    }
    else {
      arr.push(arr[arr.length-1]+ nums[i]);
    }  
  }
  console.log(arr,12);
  for(let i= 0;i<nums.length;i++) {
    for(let j = i; j<nums.length; j++) {
      if(arr[j+1]-arr[i] == k){
        count++;
      }
    }
  }
  return count;
};

//存所有的前缀及出现的次数
var subarraySum = function(nums, k) {
  let count = 0, mapping = {0: 1}, preSum =0 ;
  for(let i=0;i<nums.length; i++) {
    preSum+= nums[i];
    if(mapping[preSum - k]) {
      count+= mapping[preSum - k];
    }
    //存储所有前缀出现的次数
    if(mapping[preSum]) {
      mapping[preSum]++;

    }else {

      mapping[preSum] = 1;
    }
  }
  /* 
  1 1 1
  前缀
  0
  1  1
  2  2-2 = 0
  3  3-2= 1

  0 1 3 7   7
  0 
  1
  4
  11 11-7 = 4
  
  
  
  */
  // console.log(mapping,count)
  return count;
};

// console.log(subarraySum([1,1,1], 2))
// console.log(subarraySum([1], 1))


/* 
题目描述

给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

示例 1：

输入：
nums = [1, 7, 3, 6, 5, 6]
输出：3

解释：
索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
同时, 3 也是第一个符合要求的中心索引。

示例 2：

输入：
nums = [1, 2, 3]
输出：-1

解释：
数组中不存在满足此条件的中心索引。

理解了我们前缀和的概念（不知道好像也可以做，这个题太简单了哈哈）。我们可以一下就能把这个题目做出来，先遍历一遍求出数组的和，然后第二次遍历时，直接进行对比左半部分和右半部分是否相同，如果相同则返回 true，不同则继续遍历。

*/

var  centerIndex = function (arr) {
  /*
  
  1 7 3 6 5 6
  0 1 8 11 17 22 28
  28 - 17 = 11
  */
  let preSum = 0;
  for(let i=0;i<arr.length; i++) {
    preSum+=arr[i];
  }
  let leftSum = 0;
  for(let i=0; i<arr.length; i++) {
    // console.log(preSum,leftSum,arr[i])
    if((preSum-leftSum-arr[i] )== leftSum ){
      console.log(arr[i], i);
      return i;
    }
    leftSum+=arr[i];

  }
  return -1;
  
}

// console.log(centerIndex([1, 7, 3, 6, 5, 6]));


/* 
在由若干 0 和 1  组成的数组 A 中，有多少个和为 S 的非空子数组。

 

示例：

输入：A = [1,0,1,0,1], S = 2
输出：4
解释：
如下面黑体所示，有 4 个满足题目要求的子数组：
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

[1,0,1]
[1,0,1,0]
[0,1,0,1]
[1,0,1]
*/


var numSubarraysWithSum = function(nums, k) {
  let mapping = {0:1}, preSum = 0,count = 0;
  for(let i =0;i<nums.length;i++){
    preSum+=nums[i];
    if(mapping[preSum-k]) {
        count+= mapping[preSum-k]
    }
    if(mapping[preSum]) {
      mapping[preSum]++;
    }else {
      mapping[preSum] =1;
    }
  }
return count;
};
/* 
1 0 1 0 1

1 1-2=-1 
1 1-2=-1
2 2-2=0
2 2-2=0
3 3-2=1

1： 2（前几项和为1）  1 2
2： 2                3 4（）
3： 1                 5（pre-k）

preS-k == 前缀 

1
1-2=-1
1:1

0 
1-2=-1
1 : 2
1
2-2=0  1
2: 1
0 
2-2=0



0: 1
1:1
0: 2
1 count+=mapping[0](1,2)  2:1
0 






*/
// console.log(numSubarraysWithSum([1,0,1,0,1], 2))





















/* 
给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

注意：不允许旋转信封。

 
示例 1：

输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出：3
解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
示例 2：

输入：envelopes = [[1,1],[1,1],[1,1]]
输出：1
 

提示：

1 <= envelopes.length <= 5000
envelopes[i].length == 2
1 <= wi, hi <= 104
*/
//[[5,4],[6,4],[6,7],[2,3]]
var maxEnvelopes = function(envelopes) {
  for(let i=0;i<envelopes.length; i++) {
    for(let j=i+1;j<envelopes.length; j++) {
      let tmp;
      if((envelopes[i][0]>envelopes[j][0])&&(envelopes[i][1]>envelopes[j][1])) {
        tmp= envelopes[j];
        envelopes[j] =envelopes[i];
        envelopes[i]=tmp;
       
      }
    }

  }

  for(let i=0;i<envelopes.length; i++) {
    
  }
  console.log(envelopes)
};
maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])