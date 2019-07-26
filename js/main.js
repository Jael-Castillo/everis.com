//var nombre = "Jael Castillo";
//console.log(nombre);

//var cover = document.querySelector(.cover);
//console.log(cover);

var bio = document.querySelector('.bio');
var plus = document.querySelector('.plus');
bio.addEventListener('click', toggleShow);
plus.addEventListener('click', toggleShow);

function toggleShow(){
	//bio.style.display = "none";
	bio.classList.toggle("show");
	plus.classList.toggle("show");
