// Créer un bouton afin de choisir une image aléatoire. Utiliser la fonction en bas de page
// Afficher le numéro de l'image (ex : 2/6) et vérifier que cela fonctionne lorsqu'on clique sur suivant, précédent et aléatoire
// Ajouter un alt et une légende aux images
// Lorsqu'on clique sur l'image, faire apparaître la légende
// Ajouter un bouton pour aller à la dernière image
// Ajouter un bouton pour aller à la première image
// Ajouter la possibilité de faire défiler les images avec les flèches directionnelles
// Créer un champ permettant d'ajouter une image au slider provenant d'internet (copier coller le lien d'une image dans ce champ ex : http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg)

var currentImg=0;
var tabImg=[
	{nom : "images/1.jpg", alte: "Paris", legnde: "Paris"},
	{nom : "images/2.jpg", alte: "Montreal", legende: "Montreal"},
	{nom : "images/3.jpg", alte: "Bruxelles", legende: "Bruxelles"},
	{nom : "images/4.jpg", alte: "Denver", legende: "Denver"},
	{nom : "images/5.jpg", alte: "Toronto", legende: "Toronto"},
];

console.log(tabImg[currentImg].alte); 
// var legend = document.getElementById("legend");
// var titre = tabImg[numeroPage].alte;
// legend.innerHTML = titre;

var page = document.getElementById("page");
var numeroPage = currentImg+1;
page.innerHTML = numeroPage+"/"+tabImg.length;

var img = document.getElementById("img");
img.setAttribute("src", tabImg[0].nom);

/********************************NEXT************************************/

			var next = document.getElementById("suivant");

			next.addEventListener("click", function(){

				currentImg++;
				if (currentImg == tabImg.length)
				{
					currentImg = 0;
				}
				console.log('Image courante : '+currentImg);
				img.setAttribute("src", tabImg[currentImg].nom);

				var page = document.getElementById("page");
				var numeroPage = currentImg+1
				page.innerHTML = numeroPage+"/"+tabImg.length;

			 	});

/*****************************PREVIOUS**********************************/

				var previous = document.getElementById("precedent");

				previous.addEventListener("click", function(){

					currentImg--;
					if (currentImg == -1)
					{
						currentImg = tabImg.length-1;
					}
					console.log('Image courante : '+currentImg);
					console.log('tabImg['+currentImg+'] => affiche image n°'+currentImg);
					img.setAttribute("src", tabImg[currentImg].nom);
					
					var page = document.getElementById("page");
					var numeroPage = currentImg+1
					page.innerHTML = numeroPage+"/"+tabImg.length;
				 });


/*****************************RANDOM**************************************/

var random = document.getElementById("random");

function getRandomInteger(iMin, iMax) {return Math.round(Math.random() * (iMax - iMin)) + iMin;}

random.addEventListener("click", function(){

	var russianroulette = getRandomInteger(0, tabImg.length-1);
	img.setAttribute("src",tabImg[russianroulette]);
	page.innerHTML = (russianroulette+1)+"/"+tabImg.length;
	}
	);

/****************************LEGENDE***********************************/


