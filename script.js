/* ===================================
   MOBILE NAVIGATION
=================================== */


const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");


if(hamburger){

    hamburger.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});





/* ===================================
   TYPING ANIMATION
=================================== */


const typingElement =
document.getElementById("typing");



const words = [

    "Software Engineer",

    "Full Stack Developer",

    "ICT Educator",

    "MSc Information Technology Student",

    "Founder of Ho Volta Plug"

];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentWord =
    words[wordIndex];



    if(!deleting){


        typingElement.textContent =
        currentWord.substring(0,charIndex++);



        if(charIndex >
        currentWord.length){


            deleting=true;


            setTimeout(typeEffect,1500);

            return;

        }


    }

    else{


        typingElement.textContent =
        currentWord.substring(0,charIndex--);



        if(charIndex===0){


            deleting=false;


            wordIndex =
            (wordIndex+1)%words.length;


        }

    }



    setTimeout(typeEffect,100);

}



if(typingElement){

    typeEffect();

}





/* ===================================
   DARK MODE
=================================== */


const themeButton =
document.createElement("button");


themeButton.innerHTML="🌙";


themeButton.className="theme-toggle";


document.body.appendChild(themeButton);



const savedTheme =
localStorage.getItem("theme");



if(savedTheme==="dark"){

    document.body.classList.add("dark-mode");

    themeButton.innerHTML="☀️";

}



themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("dark-mode");



    if(document.body.classList.contains("dark-mode")){


        localStorage.setItem(
            "theme",
            "dark"
        );


        themeButton.innerHTML="☀️";


    }

    else{


        localStorage.setItem(
            "theme",
            "light"
        );


        themeButton.innerHTML="🌙";


    }


});





/* ===================================
   ACTIVE NAVIGATION
=================================== */


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop-150;



if(window.scrollY>=sectionTop){


current =
section.getAttribute("id");


}



});




navItems.forEach(link=>{


link.classList.remove(
"active-link"
);



if(link.getAttribute("href")
===
"#"+current){


link.classList.add(
"active-link"
);


}


});


});





/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */


const revealElements =
document.querySelectorAll(
".service-card, .project-card, .experience-card, .why-card, .timeline-item"
);



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


});



revealElements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});







/* ===================================
   ANIMATED STATISTICS
=================================== */


const counters =
document.querySelectorAll(".counter");



let started=false;



function startCounter(){


if(started)return;



const statistics =
document.querySelector(".statistics");



if(!statistics)return;



const position =
statistics.offsetTop;



if(window.scrollY >
position-500){



started=true;



counters.forEach(counter=>{


let target =
Number(
counter.getAttribute("data-target")
);



let count=0;



let speed =
target/100;



const update=()=>{


if(count<target){


count += speed;


counter.textContent =
Math.ceil(count);


setTimeout(update,20);


}


else{


counter.textContent =
target+"+";


}


};



update();



});



}



}



window.addEventListener(
"scroll",
startCounter
);







/* ===================================
   SKILL BAR ANIMATION
=================================== */


const skills =
document.querySelectorAll(
".progress span"
);



const skillObserver =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.width =
entry.target.style.width;


}



});


});



skills.forEach(skill=>{


skillObserver.observe(skill);


});







/* ===================================
   BACK TO TOP BUTTON
=================================== */


const topButton =
document.createElement("button");



topButton.innerHTML="⬆";


topButton.className="top-button";


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


if(window.scrollY>500){


topButton.style.display="block";


}

else{


topButton.style.display="none";


}


});



topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});







/* ===================================
   CONTACT FORM VALIDATION
=================================== */


const form =
document.getElementById(
"contact-form"
);



if(form){



form.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value.trim();



const email =
document.getElementById("email").value.trim();



const message =
document.getElementById("message").value.trim();



const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(name===""){


alert(
"Please enter your name"
);


return;


}




if(!emailPattern.test(email)){


alert(
"Please enter a valid email"
);


return;


}




if(message===""){


alert(
"Please enter your message"
);


return;


}



alert(
"Thank you! Your message has been received."
);



form.reset();



});


}