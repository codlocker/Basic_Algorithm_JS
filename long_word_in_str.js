function findLongestWord1(str) {
  var a=str.split(' ');
  var max=0;
  for(var i=0;i<a.length;i++)
  {
    if(max<a[i].length){max=a[i].length;}
  }
  return max;
}


function findLongestWord2(str) {
  var a=str.split(' ');
  var max=0;
  for(var i=0;i<a.length;i++)
  {
    if(max<a[i].length){str=a[i];max=a[i].length;}
  }
  return str.length;
}

findLongestWord1("The quick brown fox jumped over the lazy dog");
findLongestWord2("The quick brown fox jumped over the lazy dog");
