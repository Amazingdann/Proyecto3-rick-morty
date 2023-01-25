function generateRandomNumber (min=1, max= 826){
    let difference = max - min;
  
    let rand = Math.random();
  
    rand = Math.floor(rand* difference);
    rand= rand+min
    return rand;
    console.log(rand);
  }
  
generateRandomNumber()

module.exports= {
    generateRandomNumber,
}