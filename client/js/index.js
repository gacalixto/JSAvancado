var campos =[
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")
];

document.querySelector('.form').addEventListener('submit', function (event) {
	var tr = document.createElement('tr');
	campos.forEach( function(campo) {
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
		// statements
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value*canpos[2].value;

	tr.appendChild(tdVolume);
	/* body... */
})