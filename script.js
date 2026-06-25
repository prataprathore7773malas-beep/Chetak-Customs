/*=========================================
        CHETAK CUSTOMS
        script.js
=========================================*/



/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});





/*=========================================
        STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});





/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("showMenu");

    menuBtn.classList.toggle("active");

};





/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

        navbar.classList.remove("showMenu");

    });

});





/*=========================================
        ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});





/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".about,.story,.services,.why,.process,.featured-builds,.gallery,.reviews,.counter,.faq,.contact"

);

function reveal() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();





/*=========================================
        HERO PARALLAX
=========================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.backgroundPositionY = value * 0.45 + "px";

});





/*=========================================
        BUTTON ANIMATION
=========================================*/

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-8px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

}); /*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".count");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    if(target == 100){

                        counter.innerText = target + "%";

                    }else{

                        counter.innerText = target + "+";

                    }

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});





/*=========================================
        FAQ ACCORDION
=========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

const answer=item.querySelector(".faq-answer");

const icon=question.querySelector("span");

question.onclick=()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.display="none";

other.querySelector("span").innerHTML="+";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

icon.innerHTML="+";

}

else{

answer.style.display="block";

icon.innerHTML="−";

}

};

});





/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const gallery=document.querySelectorAll(".gallery-container img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="lightbox";

popup.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(popup);

popup.onclick=()=>{

popup.remove();

};

});

});





/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};





/*=========================================
        FLOATING BUTTON
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:1400

});

},1800);





/*=========================================
        HERO TITLE GLOW
=========================================*/

const heroTitle=document.querySelector(".hero-content h1");

setInterval(()=>{

heroTitle.animate([

{

opacity:.9,

letterSpacing:"6px"

},

{

opacity:1,

letterSpacing:"10px"

},

{

opacity:.9,

letterSpacing:"6px"

}

],{

duration:2500

});

},2600);





/*=========================================
        CONTACT FORM
=========================================*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

}





/*=========================================
        IMAGE LAZY EFFECT
=========================================*/

const images=document.querySelectorAll("img");

const imgObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition=".8s";

imgObserver.observe(img);

});





/*=========================================
        LIGHTBOX CSS
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

.lightbox{

position:fixed;

left:0;

top:0;

width:100%;

height:100%;

background:rgba(0,0,0,.95);

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

cursor:pointer;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:15px;

box-shadow:0 20px 50px rgba(0,0,0,.5);

animation:zoom .4s ease;

}

@keyframes zoom{

from{

transform:scale(.7);

opacity:0;

}

to{

transform:scale(1);

opacity:1;

}

}

`;

document.head.appendChild(style);





/*=========================================
        CONSOLE
=========================================*/

console.log("✅ CHETAK CUSTOMS WEBSITE LOADED SUCCESSFULLY"); 
