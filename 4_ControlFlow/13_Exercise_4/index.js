// Speedlimit = 70

checkSpeed(10);

function checkSpeed(speed){
const speedLimit = 70;
const kmPerPoint = 5;

  if(speed <= speedLimit)
    console.log('Ok');
  else {
     const points = Math.floor((speed - speedLimit) / kmPerPoint);
     if(points >= 12)
      console.log('License Suspended');
    else
      console.log('Points', points);
  }
}