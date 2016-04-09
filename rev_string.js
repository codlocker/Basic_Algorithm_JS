function reverseString(str) {
  var s1=str.split('');//empty data to charater wise splitting or joining 
  console.log(s1);
  var s2=s1.reverse();
  console.log(s2);
  var s3=s2.join('');
  console.log(s3);
  return s3;
}

reverseString("hello");
