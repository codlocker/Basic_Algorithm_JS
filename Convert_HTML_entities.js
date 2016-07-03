
function convertHTML(str) {
  // &colon;&rpar;
  var res=str.replace(/&/g,"&amp;");
  res1=res.replace(/>/g,"&gt;");
  res2=res1.replace(/</g,"&lt;");
  res3=res2.replace(/"/g,"&quot;");
  res4=res3.replace(/'/g,"&apos;");
  return res4;
}

convertHTML("Dolce & Gabbana");
