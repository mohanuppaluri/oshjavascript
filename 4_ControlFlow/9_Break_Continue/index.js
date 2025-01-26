let i = 0;

while(i<=10){

  if(i === 5) break;  // Jumps out of the loop

  if(i%2 === 0){
    i++;
    continue; // Jumps to the start of the next iteration
  }

  console.log(i);
  i++;
}