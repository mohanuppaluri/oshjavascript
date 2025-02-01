
//Implementation 1
function isLandscape(width,height){
  if(width>height) console.log('Is Landscape');
  else console.log('Is Potrait');
}

//Implementation 2

function isLandscape(width,height){
  return (width>height)? true : false; 
}


isLandscape(80,100);