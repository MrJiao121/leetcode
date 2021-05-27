/* 

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

输入：[1,8,6,2,5,4,8,3,7]
1*1 = 1
1*1 = 1

8 6 2 5 4 8



输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1
示例 3：

输入：height = [4,3,2,1,4]
输出：16
示例 4：

输入：height = [1,2,1]
输出：2
 

提示：

n = height.length
2 <= n <= 3 * 104
0 <= height[i] <= 3 * 104
 */

//暴力求出每个可能的结果，对比

var maxArea1 = function(height) {
  let res = 0
  for(let i =0; i< height.length-1; i++) {
    for(let j=i+1;j<height.length;j++) {
      let h  = Math.min(height[i], height[j]);
      res = res > h*(j-i) ? res : h*(j-i);
    }
  }
  return res;
};

//双指针
var maxArea = function(height) {
  let l=0, r = height.length-1,res =0;
  while(l<r && l<height.length&& r>0) {
    let tmp = Math.min(height[l],height[r]);
    let distance = r-l;
    if(height[l] >= height[r]) {
      // tmp = height[r];
      r--;
    }else {
      tmp = height[l];
      l++;
    }
    let area = tmp*distance;
    res = res> area ? res : area;

  }
  return res;

};


console.log(maxArea([1,2,1]))

console.log(maxArea([4,3,2,1,4]))

console.log(maxArea([1,1]))
console.log(maxArea([1,8,6,2,5,4,8,3,7]))