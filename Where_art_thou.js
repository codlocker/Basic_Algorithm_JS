
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var key=Object.keys(source);
  //console.log(key);
  // Only change code above this line
    for(i=0;i<collection.length;i++)
    {
      //console.log(collection[i]);
      fag=false;
      for(k=0;k<key.length;k++)
       {
        if(collection[i][key[k]]!==undefined && source[key[k]] === collection[i][key[k]]){
          //console.log(source[key[k]]+" "+collection[i][key[k]]);
          fag=true;
        }
         else{fag=false;}
       }
      if(fag===true){arr.push(collection[i]);}
    }
    //console.log(arr);
  
    return arr;
}
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
