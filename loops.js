function forLoop(array){
  for(let i = 0; i < 25; i++ ){
      array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(-- n);
  }
  return 'done';
}

function doWhileLoop(array){
  var i = 0;
  do{
  } while(array.length > 0 && i = i + 1);
}
