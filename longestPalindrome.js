var longestPalindrome1 = function(s) {
  // s = "babad" "cbbd"  bacbcab

//求出所有子串
let res = '';
for(let i=0;i<s.length;i++) {
  for(let j=i;j<s.length;j++) {
    let str = s.substring(i,j+1);
    //
    let isPalindrome = true;
    for(let i =0; i<str.length;i++) {
      if(str[i] != str[str.length-1-i]){
        isPalindrome = false;
        break;
      }
    }
    if(isPalindrome  && str.length > res.length) {
      res = str;
    }

  }
}
return res;

}

var longestPalindrome2= function(s) {
  //翻转字符串
  let reverse = '',len = 0;
  for(let i=s.length-1; i>=0;i--) reverse+=s[i];

  //初始化一个二维数组
  let arr = new Array(s.length).fill(0);
  for(let i=0;i<arr.length;i++) {
    arr[i] = new Array(s.length).fill(0);
  } 
  for(let i =0; i<s.length;i++) {
    for(let j= 0;j<reverse.length;j++) {
      if(s[i] == reverse[j]) {
        if(i ==0 || j ==0) {
          arr[i][j] = 1;
        }else {
          arr[i][j] = arr[i-1][j-1] + 1
        }

      }
      if(arr[i][j] > len) {
        len = arr[i][j]
      }


    }
  }
  console.log(arr);
}

var longestPalindrome3 = function(s) {

  let maxLen = 0;
  let start = 0;
  for(let i = 0;i<s.length; i++) {
    let len =1;
    let left = i-1;
    let right = i+1;
    //向左取
    while(left>=0 && s.charAt(i) == s.charAt(left)) {
      len++;
      left--;
    }
    //向右取
    while(right< s.length && s.charAt(i) == s.charAt(right)) {
      len++;
      right++;
      
    }
    //左右同时取
    while(right< s.length && left>=0 && s.charAt(left) == s.charAt(right)) {
      len+= 2;
      right++;
      left--;
    }

    if(len > maxLen) {
      maxLen = len;
      start = left;
    }
  }
  console.log(start+1, maxLen,s.substr(start+1, maxLen))

}

var longestPalindrome = function (s) {

}


console.log(longestPalindrome("babad"))

 console.log(longestPalindrome("cbbd"))

/* console.log(longestPalindrome("bacbcab"))


console.log(longestPalindrome("a")) */