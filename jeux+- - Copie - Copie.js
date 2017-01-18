function nb_aleatoire(min, max)
{
	var min = 0
	var max = 100
    var nb = min + (max-min+1)*Math.random();

     return Math.floor(nb);
}

var nb = nb_aleatoire (1,100); // nb a deviner
var cpt = 0; // nb de coups
var saisie;
var msg = 'le nombre à deviner est compris entre 1 et 100.';
do
{
		saisie = prompt(msg);
		cpt++;
		if (saisie > nb)
		msg = "C'est moins";
		else
		msg = "C'est plus";

}
while (saisie != nb);

alert("Bravo tu as gagne en " + cpt + " coups!");