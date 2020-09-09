// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
let body = document.body;
body.style.background = "#992323";


// Changez la couleur du texte du body en #fff
body.style.color = "#fff";


// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
let workspace = document.getElementById("workspace");


// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
console.log("Workspace contient " + workspace.childElementCount + " enfants");


// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Affectez le résultat à la variable p
let p = workspace.firstElementChild;
console.log(p);


// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
let h3 = document.createElement("h3");
h3.innerText = "Hello JS world !";
workspace.prepend(h3);



const initTime = 10;
// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher

//On commence par créer la div et lui ajouter les attributs nécessaires.
let newDiv = document.createElement("div");
newDiv.setAttribute("id", "counter");
workspace.appendChild(newDiv);

function runChrono(n) {
	//Pour chaque itération, on lance un timeout
	for (let i = 0; i <= n; i++) {
		setTimeout(() => {
			newDiv.innerText = n - i;
		}, i * 1000); // i * 1000 car milisecondes
	}
}

console.log(runChrono(initTime));


// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
let newBtn = document.createElement("button");

newBtn.innerText = "Start countdown"

workspace.insertBefore(newBtn, h3.nextSibling);

newBtn.addEventListener("click", () => {
	//On commence par clear tous les timeout précédents
	let id = setTimeout(function() {}, 0); //On créer un timeout pour récupérer le dernier ID des timeout
	while (id--) {
    	window.clearTimeout(id);
	}

	runChrono(initTime);
});