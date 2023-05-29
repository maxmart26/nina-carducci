
const Categorie = document.getElementById("categories");
const pickture = document.getElementById("picktur")
let categories = ["Tous","Concert","Entreprises","Mariages","Portrait"];
let picktures = ["1","./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp","1","./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplas.webp","2","./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unspl.webp","2","./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unspla.webp","2","./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY.webp"
                ,"3","./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unspla.webp","3","./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp","4","./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp","4","./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8.webp"]
let alts = ["1","consert","1","un chanteur en concerts","2","homme en costume","2","femme heureuse","2","femme devant un ordi"
,"3","deux paire de mains","3","mariage","4","portrait d'un homme","4","portrait d'une femme"]
console.log(picktures);
button_categories()
function button_categories(){
    var categories_number = 0;
    for(let categorie of categories){
        let display = document.createElement('button')
        display.value = categories_number
        display.innerHTML = categorie
        display.className = "filtre"
        Categorie.appendChild(display)
        categories_number++
    }
};
addListener();
function addListener(){// function pour afficher les images avec la bonne categorie selectionner 
    let buttons = document.querySelectorAll(".filtre")
    //console.log(buttons)
    for (const btn of buttons) {
        //console.log(btn.value);
        btn.addEventListener("click",() => {
            //console.log(btn.value);
            supp();
                if (btn.value == 0){
                    displayAll();
                }
                else {
                    number = 1;
                    for(let data of picktures){
                        //console.log(data);
                        if (data == btn.value ){
                            //console.log(data);
                            //console.log(number);
                            let display = document.createElement('img')
                            display.src = picktures[number]
                            display.alt = alts[number]
                            display.className = "gallery-item"
                            pickture.appendChild(display)
                            number++;  
                        }
                        else{
                            number++;
                        }
                        //console.log(number);
                    
            }}})
        }
        
    }
    displayAll()
    function displayAll(){
        let number = 0
        for(let i of picktures){
            console.log(i);
            console.log(number);
            if(i == 1 || i == 2 || i == 3 || i == 4){
                //number++
            }
            else{
            let display = document.createElement('img')
            display.src = picktures[number]
            display.alt = alts[number]
            display.className = "gallery-item"
            pickture.appendChild(display)}
            number++
        }
    }
    function supp(){// pour supprimer les photos afficher mais sans les supp de l'API
        let gallery = document.getElementsByClassName("picktur");
        console.log(gallery);
        while (gallery[0].firstChild) {
            gallery[0].removeChild(gallery[0].firstChild);
        }
    }

