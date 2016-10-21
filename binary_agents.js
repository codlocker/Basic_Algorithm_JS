
function binaryAgent(str) {
  var str_list = str.split(' ');
  var new_str = "";
  var len = str_list.length;
  for(var i=0;i < len;i++) {
    var word_len = str_list[i].length;
    sum = 0;
    for(j=word_len-1;j>=0;j--) {
      if(str_list[i][j] === "1"){sum += (Math.pow(2,(word_len-j-1)));}
    }
    new_str+=(String.fromCharCode(sum));
  }
  return new_str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
