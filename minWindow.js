/* 
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"

*/

var minWindow1 = function (s, t) {
  //t为要被覆盖的子串
  let obj = {},str= '';
  for( let i = 0; i<t.length; i++) {
    obj[t[i]] = 0;
  }
  for(let i=0;i<s.length; i++) {
    if(obj[s[i]] == 0 || obj[s[i]] ) {
      
    console.log(obj[s[i]],i)
      //截取位置
      //t中都出现 
      console.log(str,obj);
      str =  obj[s[i]] == 0 ? str : str.slice(obj[s[i]]+1);
      str.split("").forEach( (item,index) => { obj[item] != void 0 ? obj[item] = index : ''});
      obj[s[i]] = i;
    }
    str+=s[i]; 

  }
  // for(let j in obj) {
  //   if(obj[j] == 0) break;
  //   else idx = obj[j] > idx ? idx : obj[j]; 
  // }

console.log(str);

}

var minWindow = function(s, t) {
    //t为要被覆盖的子串
    let obj = {}, str= '',count = 3;
    for( let i = 0; i<t.length; i++) {
      obj[t[i]] = 1;
    }
    for(let i=0,j =0;j<s.length;j++) {
      
        obj[s[i]]--;
      


    }

}
minWindow("ADOBECODEBANC", "ABC")