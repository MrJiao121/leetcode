var containsNearbyAlmostDuplicate = function(nums, k, t) {

  if(nums.length == 0 || t < 0 || k < 0) return false;
  let arr = [0];
  for( let i= 0; i<nums.length; i++) {
    let index = 0 ;
    for( let j in arr) {
      if(i - j > k ) {
        continue;
      }
        // 已满足 i-j <=k

        if( Math.abs(arr[i] - arr[j]) > t ) continue;
      
    }

  }
};