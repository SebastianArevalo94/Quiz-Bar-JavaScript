function getData() {
  let names = document.getElementById("names").value;
  let lastNames = document.getElementById("lastNames").value;
  let age = document.getElementById("age").value;
  let bloodType = document.getElementById("bloodType").value;
  let telephone = document.getElementById("telephone").value;

  if (age === "") {
    alert(`¡Error! porfavor rellene todos los campos.`);
  } else if(age < 18) {
    alert(`¡Lo sentimos! Solo mayores de 18+`);
  }
    else if (names === "" || lastNames === "") {
      alert(`¡Error! porfavor rellene todos los campos.`);
    } else{
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card text-white bg-success bg-gradient mb-3" style="max-width: 18rem;">
        
            <div class="card-body">
            <div>
            <h3 class="fs-1 text-center">Carnet</h3>
            </div>  
            <h5 class="card-title card-info">Nombres: ${names}</h5>
            <h5 class="card-title card-info">Apellidos: ${lastNames}</h5>
            <h5 class="card-title card-info">Edad: ${age}</h5>
            <h5 class="card-title card-info">Tipo de Sangre: ${bloodType}</h5>
            <h5 class="card-title card-info">Teléfono: ${telephone}</h5>
            </div>
          </div>`;
    }
  }

function clear() {
  document.getElementById("card").innerHTML = "";
}
