function forLoop(array){
  for(let i = 0; i < 25; i++ ){
    if(i === 1){
      push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)} else{
      push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)}
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(-- n);
  }
  return 'done';
}
whileLoop(10);
