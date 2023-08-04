function setSpanishDate(elementId) {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let year = today.getFullYear();
  let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let month = monthNames[today.getMonth()]; // Months are 0-indexed in JavaScript.
  let dateStr = + "Hoy " + day + " " + month + " " + year;
  document.getElementById(elementId).innerText = dateStr;
}
setSpanishDate("date-es");
