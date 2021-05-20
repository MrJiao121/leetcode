/* 给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。

 

示例 1：

输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)


arr[0]^arr[1] = 2     10 
arr[1]^arr[2] = 3 1   11 01 10
2 3 
1
[1,2,3,4,7,9]
0^0 = 0
1 = 1
1^2 = 3
1^2^3 = 0
1^2^3^4 = 4
1^2^3^4^7 = 3
1^2^3^4^7^9 = 10



















示例 2：

输入：arr = [1,1,1,1,1]
输出：10
示例 3：

输入：arr = [2,3]
输出：0
示例 4：

输入：arr = [1,3,5,7,9]
输出：3
示例 5：

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8
 */
var countTriplets1 = function(arr) {
  let count =0;
  for(let i=0;i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      for(let k=j; k<arr.length; k++) {
        let a = 0,b =0;
        for(let m=i;m<j;m++) {
          a^=arr[m];
        }
        for(let n=j;n<=k;n++) {
          b^=arr[n];
        }
        a == b ? count++ : count;
    
      }
    
    }

  }
  console.log(count);
};

var countTriplets2 = function (arr) {
  let preOr = [],count =0 ;
  for(let i =0; i<=arr.length ;i++) {
    if(i ==0) preOr.push(0);
    else if(i == 1) preOr.push(arr[i-1]);
    else preOr.push(preOr[i-1]^arr[i-1]);
  }
  for(let i=0;i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      for(let k=j; k<arr.length; k++) {
        let a = 0,b =0;
        //a[i]...a[j-1]
        preOr[j]^preOr[i] == preOr[k+1]^preOr[j] ? count++ : count;
      }
    
    }

  }

  console.log(preOr,count);
}

var countTriplets = function (arr) {
  let preOr = [],count =0 ;
  for(let i =0; i<=arr.length; i++) {
    if(i ==0) preOr.push(0);
    else if(i == 1) preOr.push(arr[i-1]);
    else preOr.push(preOr[i-1]^arr[i-1]);
  }
  for(let i=1 ;i<preOr.length; i++) {
    for(let j=i+1; j<preOr.length; j++) {
      if((preOr[j]^preOr[i]) == 0){
        console.log(preOr[j+1]^preOr[i])
        count++;

      } 
    }
  }
  console.log(count);

}
countTriplets([1, 2, 3, 4, 7, 9])
countTriplets1([1, 2, 3, 4, 7, 9])
// countTriplets([1,3,5,7,9])
// countTriplets([7,11,12,9,5,2,7,17,22])




/* 

给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。

 

示例 1：

输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
示例 2：

输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
示例 3：

输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
示例 4：

输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。


*/