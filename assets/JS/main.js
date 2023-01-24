console.log("Entro al main.js");
const imgPersonaje= document.getElementById("imgPersonaje");
const url = "https://rickandmortyapi.com/api/character/"
const tblPersonaje=document.getElementById("tblPersonaje");
const idPersonaje= document.getElementById("id")
const nombrePersonaje= document.getElementById("nombre")
const especiePersonaje= document.getElementById("especie")
const generoPersonaje= document.getElementById("genero")
const origenPersonaje= document.getElementById("planeta")
const ctx = document.getElementById('myChart').getContext('2d');
const loader=document.getElementById("loader");
const rowContainer=document.getElementById("rowContainer");
const urlpages = "https://rickandmortyapi.com/api/character?page="
//const generateRandomNumber = require('./assets/JS/randomNumber.js');


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
    loader.classList.add("d-none")
    rowContainer.classList.remove("d-none")



    const labels_for_chart = result.results.map(item =>item.gender);
    console.log(labels_for_chart);
    const male = result.results.filter(item=>item.gender === 'Male');
  
    console.log(male);
    const female = result.results.filter(item=>item.gender === 'Female');
    console.log(female);
    const unknown = result.results.filter(item=>item.gender === 'unknown');
    console.log(unknown);
    const genderless = result.results.filter(item=>item.gender === 'Genderless');
    console.log(genderless);

    const data_for_chart = result.results.map(item =>item.gender)
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Male','Female','Unknown','Genderless'],
            datasets: [{
                label: 'Gender',
                data: [male.length,female.length, unknown.length,genderless.length],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    })
  .catch((error) => console.log("error detectado"));
};


async function init (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(cargarPersonajes())
    }, 4000);
});
  }

  init()
