let f=["mariage","concert","homme dans la rue"];var button1=document.getElementById("button1"),button2=document.getElementById("button2"),button3=document.getElementById("button3");function addListenerS(){for(let t of buttons=document.getElementsByClassName("button-carrousel"))t.addEventListener("click",()=>{p=t.value,container.style.transform="translate("+1950*p+"px)",container.style.transition="all 0.5s ease",color_button()})}function color_button(){var t=p;0==t&&(button1.classList.add("active"),button2.classList.remove("active"),button3.classList.remove("active")),-1==t&&(button2.classList.add("active"),button1.classList.remove("active"),button3.classList.remove("active")),-2==t&&(button3.classList.add("active"),button2.classList.remove("active"),button1.classList.remove("active"))}document.body.onload=function(){for(i=1,nbr=3,p=0,container=document.getElementById("container"),g=document.getElementById("g"),d=document.getElementById("d"),container.style.width=100*nbr+"%";i<=nbr;i++){let t=document.createElement("img");t.className="photo",t.src="./assets/images/slider/carousel"+i+".webp",t.alt=f[i-1],container.appendChild(t)}color_button()},d.onclick=function(){p>-nbr+1?(p--,container.style.transform="translate("+1950*p+"px)",container.style.transition="all 0.5s ease"):-2==p&&(p=0,container.style.transform="translate("+1950*p+"px)"),color_button()},g.onclick=function(){console.log(p),p<0?(p++,container.style.transform="translate("+1950*p+"px)",container.style.transition="all 0.5s ease"):0==p&&(p=-2,container.style.transform="translate("+1950*p+"px)"),color_button()},addListenerS();