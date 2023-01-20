console.log("Entro al main.js");
const imgPersonaje= document.getElementById("imgPersonaje");
const url = "https://rickandmortyapi.com/api/character/"

function generateRandomNumber (min=1, max= 826){
    let difference = max - min;
  
    let rand = Math.random();
  
    rand = Math.floor(rand* difference);
    rand= rand+min
    return rand;
  }

  function randomCharacter () {
    console.log("función randomCharacter");
  const personaje = generateRandomNumber();
    fetch(url+personaje)
  .then((response) => response.json())
  .then((result) => {console.log(result);

    })
  .catch((error) => console.log(error));
};
