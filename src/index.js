function counting(str) {
  var count5 = 0;
  var count2 = 0;
  var k=1;
  var number5 = +str.split('!')[0];
  var number2 = number5;
  if(str[str.length-2]==="!") 
    k=2;
  while(number5!==0 && number5!==1) {
    var numberCopy=number5;
    while(numberCopy%5===0) {
      numberCopy/=5;
      count5++;
    }
    number5-=k;
  }
  while(number2!==0 && number2!==1) {
    var numberCopy=number2;
    while(numberCopy%2===0) {
      numberCopy/=2;
      count2++;
    }
    number2-=k;
  }
  return [count5,count2];
}
module.exports = function zeros(expression) {
  var factMass=expression.split("*");
  var mass=[];
  var zeroNumb=[0,0];
  for(var i=0; i<factMass.length; i++) {
    mass=counting(factMass[i]);
    zeroNumb[0]+=mass[0];
    zeroNumb[1]+=mass[1];
  }
  return Math.min(zeroNumb[0],zeroNumb[1]);
}
