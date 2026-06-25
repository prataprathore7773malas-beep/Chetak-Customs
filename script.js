/*=========================================
        CHETAK CUSTOMS
        script.js
=========================================*/



/*=========================================
        STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#000";
        header.style.padding = "14px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";

    }

});



/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});



/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.pageYOffset > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".stat h1");

const speed=120;

counters.forEach(counter=>{

const updateCount=()=>{

const target=+counter.innerText.replace("+","").replace("%","");

const count=+counter.getAttribute("data-count")||0;

const increment=target/speed;

if(count<target){

const value=Math.ceil(count+increment);

counter.setAttribute("data-count",value);

if(counter.innerText.includes("%")){

counter.innerText=value+"%";

}else{

counter.innerText=value+"+";

}

setTimeout(updateCount,20);

}

};

updateCount();

});



/*=========================================
        SCROLL REVEAL
=========================================*/

const reveal=document.querySelectorAll(

".about,.story,.services,.why,.process,.stats,.featured,.gallery,.reviews,.faq,.contact"

);

window.addEventListener("scroll",revealSection);

function revealSection(){

const trigger=window.innerHeight-120;

reveal.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("show");

}

});

}

revealSection();



/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

const images=document.querySelectorAll(".gallery img,.build img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.filter="brightness(110%)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter="brightness(100%)";

});

});



/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-8px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});



/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.5+"px";

});



/*=========================================
        FAQ EFFECT
=========================================*/

const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("open");

});

});



/*=========================================
        FLOATING WHATSAPP
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],{

duration:1500

});

},1800);



/*=========================================
        HERO TITLE ANIMATION
=========================================*/

const heroTitle=document.querySelector(".hero-content h1");

setInterval(()=>{

heroTitle.animate([

{

opacity:0.7,

letterSpacing:"8px"

},

{

opacity:1,

letterSpacing:"12px"

},

{

opacity:0.7,

letterSpacing:"8px"

}

],{

duration:2500

});

},2600);



/*=========================================
        LOADING SCREEN
=========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});



/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const galleryImages=document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.92)";

popup.style.display="flex";

popup.style.alignItems="center";

popup.style.justifyContent="center";

popup.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="12px";

popup.appendChild(image);

document.body.appendChild(popup);

popup.onclick=()=>{

popup.remove();

};

});

});



/*=========================================
        PREVENT FORM RELOAD
=========================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! We will contact you soon.");

form.reset();

});

}



console.log("CHETAK CUSTOMS WEBSITE LOADED SUCCESSFULLY");
