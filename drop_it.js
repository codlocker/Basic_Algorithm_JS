
function dropElements(arr, func) {
  // Drop them elements.
  first_true = false;
  index =-1;
  for(i=0;i<arr.length;)
  {
    v = func(arr[i]);
    if(v === true) {
      index = i;break;
    }
    else{arr.shift();}
  }
  return arr.slice(0,arr.length);
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
