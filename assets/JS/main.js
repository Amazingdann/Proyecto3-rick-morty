console.log("Entro al main.js");
const imgPersonaje= document.getElementById("imgPersonaje");
const url = "https://rickandmortyapi.com/api/character/"
const tblPersonaje=document.getElementById("tblPersonaje");
const idPersonaje= document.getElementById("id")
const nombrePersonaje= document.getElementById("nombre")
const especiePersonaje= document.getElementById("especie")
const generoPersonaje= document.getElementById("genero")



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
    fetch(url+personaje,{
        method:"GET"
    })

  .then((response) => response.json())
  .then((result) => {console.log(result);
    imgPersonaje.src = result.image;
    nombrePersonaje.innerText = result.name;
    especiePersonaje.innerText = result.species;
    generoPersonaje.innerText = result.gender;
    origenPersonaje.innerText = result.origin.name;
    })
  .catch((error) => console.log(error));
};



function cargarPersonajes () {
    fetch(url, 
    {
        method:"GET"
    })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    tblPersonaje.innerHTML = "";
    for(const personaje of result.results){
        let tr = `<tr>
        <td>${personaje.id}</td>
        <td>${personaje.name}</td>
        <td>${personaje.origin.name}</td>
        <td>${personaje.species}</td>
        <td>${personaje.gender}</td>
        </tr>`;
        tblPersonaje.innerHTML+=tr;
    }
    })
  .catch((error) => console.log("error detectado"));
};

cargarPersonajes();
