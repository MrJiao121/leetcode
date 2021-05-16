/* I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

M = 1000, CM = 900, XC = 90, IV = 4.
IV 
IX
XL
XC
CD
CM

*/

var romanToInt1 = function(s) {
  let res = 0;
  let mapping = {
    IV: 4 ,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };
  let origin = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let arr = s.split("");
  for( let i=s.length-1; i>=0;) {
    let str = arr[i-1]+arr[i];
    if(mapping[str]){
      console.log(mapping[str],str)
      res +=mapping[str];
      i -=2;
    }else {
      console.log(arr[i])
      res+=origin[arr[i]];
      i--;
    }


  }
  console.log(res);

};


var romanToInt = function(s) {
  let res = 0;
  let origin = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let arr = s.split("");
  for( let i=s.length-1; i>=0;) {
    if(origin[arr[i]]>origin[arr[i-1]]) {
      res += origin[arr[i]];
      res += -origin[arr[i-1]];
      i-=2;
    }else {
      res += origin[arr[i]];
      i--;
    }


  }
  console.log(res);

};
// console.log(romanToInt("LVIII"))
// console.log(romanToInt("IV"))

var intToRoman1 = function(num) {
  //
  let mapping = {
    1: ['I','X','C','M'],
    5: ['V','L','D'],
    4: ['IV','XL','CD'],
    9: [ 'IX','XC','CM']  
  }
  let res ='',numArr = [];
  let strNum = num + '';
  let arr = strNum.split('');
  for(let i =strNum.length-1; i>=0; i--) {
    switch(arr[i]-0) {
      case 1 : res = mapping[1][strNum.length-1-i]+ res; break;
      case 2 : res = mapping[1][strNum.length-1-i]+mapping[1][strNum.length-1-i]+ res;break;
      case 3 : res = mapping[1][strNum.length-1-i]+mapping[1][strNum.length-1-i]+mapping[1][strNum.length-1-i]+ res;break;
      case 4: res = mapping[4][strNum.length-1-i]+ res;break;
      case 5: res = mapping[5][strNum.length-1-i]+ res;break;
      case 6: res = mapping[5][strNum.length-1-i]+ mapping[1][strNum.length-1-i] + res;break;
      case 7: res = mapping[5][strNum.length-1-i]+ mapping[1][strNum.length-1-i] + mapping[1][strNum.length-1-i] +res;break;
      case 8: res = mapping[5][strNum.length-1-i]+ mapping[1][strNum.length-1-i] +mapping[1][strNum.length-1-i] + mapping[1][strNum.length-1-i]+res;break;
      case 9:  res = mapping[9][strNum.length-1-i]+ res;break;

    }
  }
  return res;

}


var intToRoman = function(num) {

/*   let mapping = {
    1000:'M', 
    900:'CM', 
    500:'D', 
    400:'CD', 
    100:'C', 
    90:'XC', 
    50:'L', 
    40:'XL', 
    10:'X', 
    9:'IX', 
    5:'V', 
    4:'IV', 
    1:'I'
  }; */
  let arrV = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let arrS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let res = '';

  for(let i=0;i<13;i++) {
    while(num>=arrV[i]) {
      
      num-=arrV[i];
      res+=arrS[i];
    }
  }
  return res;
}
console.log(intToRoman(12));

console.log(intToRoman(3));