const Categorie=document.getElementById("categories"),pickture=document.getElementById("picktur");let categories=["Tous","Concert","Entreprises","Mariages","Portrait"],picktures=["1","./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp","1","./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplas.webp","2","./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unspl.webp","2","./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unspla.webp","2","./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY.webp","3","./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unspla.webp","3","./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp","4","./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp","4","./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8.webp"],alts=["1","consert","1","un chanteur en concerts","2","homme en costume","2","femme heureuse","2","femme devant un ordi","3","deux paire de mains","3","mariage","4","portrait d'un homme","4","portrait d'une femme"];function button_categories(){var e=0;for(let s of categories){let t=document.createElement("button");t.value=e,t.innerHTML=s,t.className="filtre",Categorie.appendChild(t),e++}}function addListener(){let e=document.querySelectorAll(".filtre");for(let s of e)s.addEventListener("click",()=>{if(supp(),0==s.value)displayAll();else for(let e of(number=1,picktures))if(e==s.value){let t=document.createElement("img");t.src=picktures[number],t.alt=alts[number],t.className="gallery-item",pickture.appendChild(t),number++}else number++})}function displayAll(){let e=0;for(let s of picktures){if(console.log(s),console.log(e),1==s||2==s||3==s||4==s);else{let t=document.createElement("img");t.src=picktures[e],t.alt=alts[e],t.className="gallery-item",pickture.appendChild(t)}e++}}function supp(){let e=document.getElementsByClassName("picktur");for(console.log(e);e[0].firstChild;)e[0].removeChild(e[0].firstChild)}button_categories(),addListener(),displayAll();