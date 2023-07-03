const Categorie = document.getElementById("categories"),
pickture = document.getElementById("picktur");
let categories = ["Tous", "Concert", "Entreprises", "Mariages", "Portrait"],
  picktures = ["1", "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp", "1", "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplas.webp", "2", "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unspl.webp", "2", "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unspla.webp", "2", "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY.webp", "3", "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unspla.webp", "3", "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp", "4", "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp", "4", "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8.webp"],
  alts = ["1", "consert", "1", "un chanteur en concerts", "2", "homme en costume", "2", "femme heureuse", "2", "femme devant un ordi", "3", "deux paire de mains", "3", "mariage", "4", "portrait d'un homme", "4", "portrait d'une femme"];

//Insérer en dynamique les catégories
function button_categories() {
  var e = 0;
  for (let t of categories) {
    let s = document.createElement("button");
    s.value = e, s.innerHTML = t, s.className = "filtre", Categorie.appendChild(s), e++
  }
  
}
//pour afficher les images dans le portfolio en fonction du button cliquer
function addListener() {
  let e = document.querySelectorAll(".filtre");
  for (let t of e) t.addEventListener("click", () => {
    for(let f of e){
      f.classList.remove("activee")
      f.classList.add("no-active")
    }
    t.classList.add("activee")
    if (supp(), 0 == t.value) displayAll();
    else
      for (let e of (number = 1, picktures))
        if (e == t.value) {
          let s = document.createElement("img");
          s.src = picktures[number], s.alt = alts[number], s.className = "thumbnail gallery-item ", pickture.appendChild(s), number++
        } else number++
  })}
//affiche toute les images
function displayAll() {
  let e = 0;
  for (let t of picktures) {
    if (console.log(t), console.log(e), 1 == t || 2 == t || 3 == t || 4 == t);
    else {
      let s = document.createElement("img");
      s.src = picktures[e], s.alt = alts[e], s.className = "thumbnail gallery-item ", pickture.appendChild(s)
    }
    e++
  }}
//supprime toute les images du html
function supp() {
  let e = document.getElementsByClassName("picktur");
  for (console.log(e); e[0].firstChild;) e[0].removeChild(e[0].firstChild)
}
function color_button(){
  let y = document.querySelectorAll(".filtre");
  for(let t of y){
    t.classList.add("no-active")
    if(t.value==0){
      t.style.backgroundcolor = "#e5975f7b"
      t.classList.add("activee")
    }
  }
}
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var closeButton = document.getElementsByClassName("close")[0];
var prevButton = document.getElementsByClassName("prev")[0];
var nextButton = document.getElementsByClassName("next")[0];

var currentImageIndex = 0;

// Fonction pour récupérer les miniatures d'images
function getThumbnails() {
  return Array.from(document.getElementsByClassName("thumbnail"));
}
// Fonction pour ouvrir la modal avec l'image cliquée
function openModal(index) {
  var thumbnails = getThumbnails();
  console.log(thumbnails);

  modal.style.display = "block";
  modalImage.src = thumbnails[index].src;
  currentImageIndex = index;
}

// Fonction pour fermer la modal
function closeModal() {
  modal.style.display = "none";
}

// Fonction pour afficher l'image précédente
function prevImage() {
  var thumbnails = getThumbnails();

  currentImageIndex+=-0.5;
  console.log(currentImageIndex);
  if (currentImageIndex < 0) {
    currentImageIndex = thumbnails.length - 1;
  }
  console.log(currentImageIndex);

  modalImage.src = thumbnails[currentImageIndex].src;
  
}

// Fonction pour afficher l'image suivante
function nextImage() {
  var thumbnails = getThumbnails();
  currentImageIndex+=0.5;
  
  console.log(currentImageIndex);
  if (currentImageIndex >= thumbnails.length) {
    currentImageIndex = 0;
  }
  console.log(currentImageIndex);
  
  modalImage.src = thumbnails[currentImageIndex].src;
}

// Ajout des écouteurs d'événements aux éléments
function open(){
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("thumbnail")) {
    var thumbnails = getThumbnails();
    var index = thumbnails.indexOf(event.target);
    openModal(index);
  }
})};

closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
button_categories(), addListener(), displayAll(), color_button(),open();
