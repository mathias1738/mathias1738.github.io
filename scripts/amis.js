
var tblNom = ["mathias", "luke", "mihai", "timmy", "jean"];
var joue = "oui"
var i
var meilleure = ("")

alert("voici ma liste d'amis: " + tblNom)

while (joue == "oui") {
  var nom = prompt("Ecris un nom pour ajouter a la liste:")
  tblNom.pop();
  tblNom.unshift(nom);
  alert("voici ma nouvelle liste d'amis: " + tblNom)

  for (i = 0; i < tblNom.length; i++) {
    if (i % 2 != 0) {
      meilleure = meilleure + tblNom[i]
    }
    if (i == 1) {
      meilleure = meilleure + (" et ")
    }
  }
  alert("Mes meilleures amis sont: " + meilleure)
  joue = prompt("Voulez vous continuer? (oui/non) : ")
  meilleure = ("")
}
