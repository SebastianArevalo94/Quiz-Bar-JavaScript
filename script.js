function datos() {
  let names = document.getElementById("names").value;
  let surNames = document.getElementById("surNames").value;
  let age = document.getElementById("age").value;
  let bloodType = document.getElementById("bloodType").value;
  let telephone = document.getElementById("telephone").value;

  alert(
    `¡Carnet Generado!\n\nNombres: ${names}\nApellidos: ${surNames}\nEdad: ${age}\nTipo de Sangre: ${bloodType}\nTeléfono: ${telephone}`
  );
}
