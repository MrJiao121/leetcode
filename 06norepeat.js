/* 


给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*/

var lengthOfLongestSubstring1 = function(s) {
  let mapping = {}, len = 0, strArr = [], tmp =1;
  if(!s) return 0;
  s.split("").forEach((e, idx) => {
    let code = e.charCodeAt();
    if(!mapping.hasOwnProperty(code) || strArr.indexOf(e) == -1 ) {
      strArr.push(e);
      len++;
      tmp = len > tmp ? len : tmp;  

    }else {
      // lenArr.push(len)
      tmp = len > tmp ? len : tmp;
      len = idx-mapping[code];
      strArr = s.substring(mapping[code]+1,idx+1).split("");
      // console.log(strArr,"strArr");

    }
    mapping[code] = idx;
    
  });
  return tmp;



};
var lengthOfLongestSubstring2 = function (s) {
//采用滑动窗口
  let queue = [], mapping = {},len = 0;
  for(let i =0; i<s.length;i++) {
    if((!mapping[s[i]] && mapping[s[i]]!= 0) || (queue.indexOf(s[i]) == -1)) {
      queue.push(s[i]);
      mapping[s[i]] = queue.length - 1;
      len = queue.length > len ? queue.length : len;
    }else {
      //存在
      queue.splice(0, mapping[s[i]]+1);
      // console.log(s[i],mapping[s[i]], queue);
      
      queue.forEach( (item, index) => mapping[item] = index);
      len = queue.length > len ? queue.length : len;

      queue.push(s[i]);
      mapping[s[i]] = queue.length - 1;

    }
    
  }
  

  return len;

}

var lengthOfLongestSubstring = function (s) {
  //采用滑动窗口
  let str = '', len = 0, mapping ={} ;
  for(let i=0;i<s.length; i++) {
    if(str.indexOf(s[i]) == -1) {
      str +=s[i];
    }else {
      len = str.length > len ? str.length : len;
      
      console.log(str,s[i], str.slice(str.indexOf(s[i]+1)));
      str = str.slice(str.indexOf(s[i])+1) + s[i];
    }
  }
  return  str.length > len ? str.length : len;
  
}
console.log(lengthOfLongestSubstring("bpfbhmipx"));// 3
console.log(lengthOfLongestSubstring("pwwkew"));//
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("")); 
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("aabaab!bb"));
/* 
a 1 a
a 1  
b 2
a 3-1=2
a 4-3 =1
b  2
!  3
b  7-5 = 2
b  8-7 =1 

*/
