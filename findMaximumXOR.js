var findMaximumXOR1 = function (nums) {

  
  let res =0;
  if (nums.length ==1 ) return nums[0];
  for(let i=0;i<nums.length-1; i++) {
    for(let j=i+1;j<nums.length; j++) {
      console.log(nums[i]^nums[j], res,(nums[i]^nums[j]) > res);
        if((nums[i]^nums[j]) > res) {
          res = nums[i]^nums[j]
        }
    
    }
  }
  return res;
}
var findMaximumXOR = function (nums) {
  let arr = [],idx=0
  for(let i =0;i<nums.length; i++) {
   
  
    arr.push(nums[i].toString(2)+'');
    idx = nums[i] > idx ? i : idx; 
  
  }

console.log(arr,idx,nums[idx]);
}
console.log(findMaximumXOR([14,70,53,83,49,91,36,80,92,51,66,70]))