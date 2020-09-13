// En utilisant l'API Fetch, récupérez sous la forme d'un objet
// JSON la table d'utilisateurs disponible à l'adresse suivante :
// https://jsonplaceholder.typicode.com/users
// Afficher la taille en octets de la réponse
// Afficher la réponse dans la console
// Ajoutez au DOM une table affichant pour tous les utilisateurs
// les valeurs des propriétés suivantes : id, nom, nom de l'entreprise
// La table sera créée comme nouvel enfant de la div d'id workspace
// votre code

//Table
let table = document.createElement('table');
workspace.appendChild(table);

//style table
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

//Header de la table
let thead = document.createElement('thead');
table.appendChild(thead);
let tr = document.createElement('tr');
thead.appendChild(tr);

//th du header
for (let i = 0; i < 3; i++) {
	let th = document.createElement('th');

	let txt = "";
	switch (i) {
		case 0: txt = 'ID'; break;
		case 1: txt = 'Nom'; break;
		case 2: txt = 'Nom de l\'entreprise'; break;
	}
	th.innerText = txt;
	tr.appendChild(th);

	//style th
	th.style.border = "1px solid black";
	th.style.borderCollapse = "collapse";
}

//Body de la table
let tbody = document.createElement('tbody');
table.appendChild(tbody);

//Appel de l'API
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
	console.log(data);
	console.log("Taille en octet : " + JSON.stringify(data).length*2);

	// Pour chaque ligne de donnée reçue, création d'un tr
	for(let i = 0; i < data.length; i++) {
		let newTr = document.createElement('tr');
		
		for (let j = 0; j < 3; j++) { // td du tr créé
			let td = document.createElement('td'); 
			switch (j) {
				case 0: td.innerText = data[i].id; break;
				case 1: td.innerText = data[i].name; break;
				case 2: td.innerText = data[i].company.name; break;
			}
			newTr.appendChild(td);
			
			// style du td
			td.style.border = "1px solid black";
			td.style.borderCollapse = "collapse";
		}
		tbody.appendChild(newTr);

		//style du tr
		newTr.style.color = "#333";
		newTr.style.backgroundColor = ((i % 2) === 0) ? "#ffcfcf" : "#fdf0f0";
	}
})



