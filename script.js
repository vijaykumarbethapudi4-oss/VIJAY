// ===============================
// VIJAY EVENTS PREMIUM SCRIPT
// ===============================


// Booking Modal Open

function openBooking(){

document.getElementById("modal").style.display="flex";

}


// Booking Modal Close

function closeBooking(){

document.getElementById("modal").style.display="none";

}



// Booking Success Animation Popup

function confirmBooking(){

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let event=document.getElementById("event").value;


if(name==="" || phone==="" || event===""){

alert("⚠ Please fill all details");

return;

}


let popup=document.createElement("div");

popup.classList.add("successPopup");


popup.innerHTML=`

<div class="popupBox">

<h1>🎉 Booking Successful 🎉</h1>

<h2>VIJAY EVENTS</h2>

<p>We Will Contact You Soon</p>

<div>

🎊 ✨ 🥳 🎉 🎆

</div>

</div>

`;

document.body.appendChild(popup);


setTimeout(()=>{

popup.classList.add("show");

},100);


setTimeout(()=>{

popup.classList.remove("show");

setTimeout(()=>{

popup.remove();

document.getElementById("modal").style.display="none";

},1000);

},4000);



document.getElementById("name").value="";

document.getElementById("phone").value="";

document.getElementById("event").value="";

}



// Close modal if clicked outside

window.onclick=function(event){

let modal=document.getElementById("modal");

if(event.target===modal){

modal.style.display="none";

}

}



// ============================
// Background Image Slider
// ============================

const hallImages=[

"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",

"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",

"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200",

"https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"

];


let current=0;

function changeBackground(){

let hero=document.querySelector(".hero");


hero.style.background=`

linear-gradient(

rgba(0,0,0,.5),

rgba(0,0,0,.5)

),

url(${hallImages[current]})

center/cover

`;


current++;

if(current>=hallImages.length){

current=0;

}

}

changeBackground();

setInterval(changeBackground,3000);




// ============================
// Scroll Reveal Animation
// ============================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

let top=window.scrollY;

let offset=sec.offsetTop-300;

if(top>offset){

sec.style.opacity="1";

sec.style.transform="translateY(0px)";

}

});

});




// ============================
// Gallery Auto Scroll
// ============================

const gallery=document.querySelector(".galleryTrack");

if(gallery){

setInterval(()=>{

gallery.scrollLeft +=300;

if(

gallery.scrollLeft>=

gallery.scrollWidth-gallery.clientWidth

){

gallery.scrollLeft=0;

}

},2500);

}



// ============================
// Hover Animation For Cards
// ============================

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.05)";

});


card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});




// ============================
// Dynamic Greeting
// ============================

let hours=new Date().getHours();

let greeting="";

if(hours<12){

greeting="☀ Good Morning";

}

else if(hours<18){

greeting="🌤 Good Afternoon";

}

else{

greeting="🌙 Good Evening";

}

console.log(greeting+" Welcome To Vijay Events");
