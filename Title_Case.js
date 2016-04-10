function titleCase(str) {
  str=str.toLowerCase();
  var s=str.split('');
  for(var i=0;i<s.length;i++)
  {
    if(s[i]==' '){s[i+1]=s[i+1].toUpperCase();}
    else if(i === 0){s[i]=s[i].toUpperCase();}
  }
  str=s.join('');
  return str;
}

titleCase("I'm a little tea pot");
