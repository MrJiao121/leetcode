var longestCommonPrefix = function(strs) {

  let comStr = '';
  for(let i= 0; i<strs[0].length; i++) {
     
    for(let j= 0;j<strs.length; j++) {
      if(strs[j][i]!= strs[0][i]) 
      return comStr;
    }
    comStr+=strs[0][i];


  }
  return comStr;

};
console.log(longestCommonPrefix(["flower","flow","flight"]))

console.log(longestCommonPrefix(["dog","racecar","car"]))