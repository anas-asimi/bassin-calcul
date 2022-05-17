var longueur;
var largeur;
var profondeur;
var talus;
var revanche;
//
function volume_totale() {
  volume =
    (profondeur / 6) *
    (longueur * largeur +
      (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus) +
      4 * (longueur - profondeur * talus) * (largeur - profondeur * talus));
  return volume;
}
function volume_utile() {
  var surface = (longueur * largeur);
  var surface_miroir = ((longueur - (2 * revanche * talus)) * (largeur - (2 * revanche * talus)))
  var surface_miroir_moyen = ((longueur - revanche * talus)) * ((largeur - revanche * talus));
  volume = volume_totale() - (revanche / 6) * (surface + surface_miroir + 4 * surface_miroir_moyen)
  return volume
}
// erreur
function surface_geomembrane() {
  longueur_du_talus = Math.sqrt(
    profondeur * profondeur + profondeur * talus * (profondeur * talus)
  );
  surface_ancrage =((longueur + largeur) * 4) + 16;

  surface_utile =
    (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus) +
    2 * ((2 * longueur - 2 * profondeur * talus) / 2) * longueur_du_talus +
    2 * ((2 * largeur - 2 * profondeur * talus) / 2) * longueur_du_talus;

  surface_totale = (surface_utile + surface_ancrage) * 1.1;

  return surface_totale;
}
function cloture() {
  perimetre = 2 * longueur + 2 * largeur + 8;
  return perimetre;
}
//
function calcul() {
  // get parametres from inputs
  longueur = parseInt(document.querySelector("#longueur").value , 10);
  largeur = parseInt(document.querySelector("#largeur").value , 10);
  profondeur = parseInt(document.querySelector("#profondeur").value , 10);
  talus = parseInt(document.querySelector("#talus").value , 10);
  revanche = parseFloat(document.querySelector("#revanche").value , 10);
  // send result
  document.querySelector("#volume-totale").innerHTML = Math.ceil(
    volume_totale()
  );
  document.querySelector("#volume-utile").innerHTML = Math.ceil(volume_utile());
  document.querySelector("#geomembrane").innerHTML = Math.ceil(
    surface_geomembrane()
  );
  document.querySelector("#cloture").innerHTML = Math.ceil(cloture());
}
window.onload = function () {
  calcul();
};
