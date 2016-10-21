
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  len = str.length;
  list =[];
  sub_str="";
  for(i=0;i<len;i++)
  {
    v = str.charCodeAt(i);
    if(str[i] == " " || str[i] == "_"){
      if(sub_str!==""){list.push(sub_str);}
      //console.log(sub_str);
      sub_str="";
    }
    else if(v>=65 && v<=90)
    {
      if(sub_str!==""){list.push(sub_str);}
      //console.log(sub_str);
      sub_str="";sub_str+=str[i];
    }
    else{sub_str+=str[i];}
  }
  list.push(sub_str);
  for(i=0;i<list.length;i++)
  {
    list[i]=list[i].toLowerCase();
  }
  console.log();
  return list.join("-");
}

spinalCase('This Is Spinal Tap');
