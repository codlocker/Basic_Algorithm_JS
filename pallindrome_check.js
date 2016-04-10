function palindrome(str) {
  // Good luck!
  str=str.toLowerCase();
  //console.log(str);
  var s1=str.split('');
  s1=s1.filter(function(v)
  {
    return (v>='0' && v<='9') || (v>='a' && v<='z');
  });
  var i=0,j=s1.length-1;
  while(i<j)
  {
    if(s1[i]!=s1[j]){return false;}
    i++;j--;
  }
  return true;
}
palindrome("1 eye for of 1 eye.");
