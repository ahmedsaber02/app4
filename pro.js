

let maincolor = localStorage.getItem("color_option")
if(maincolor != null){
    document.documentElement.style.setProperty('--main--color',localStorage.getItem("color_option"));

   document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");

        if(element.dataset.color == maincolor ){
            element.classList.add("active")
       }
        
    });


}
let backgroundoption = true;
let interval; 

let backgroundlocal = localStorage.getItem("background_option");

if(backgroundlocal !== null){

    if(backgroundlocal === 'true'){
        backgroundoption = true;

    }else{
        backgroundoption = false;
    }
   document.querySelectorAll(".random-backgrounds span").forEach(element =>{
       element.classList.remove("active")
   });
    if(backgroundlocal =="true"){
        document.querySelector(".yes").classList.add("active")

    }else{
        document.querySelector(".no").classList.add("active")

    }

}


document.querySelector(".setting-box .icone").onclick = function(){

    document.querySelector(".setting-box").classList.toggle("open")
};
const colorsli = document.querySelectorAll(".colors-list li")

colorsli.forEach(li => {
    li.addEventListener("click",(e) =>{

        // target.dataset.color
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");

        });
        e.target.classList.add("active");
        
    });
});

const randombackground = document.querySelectorAll(".random-backgrounds span")

randombackground.forEach(span => {
    span.addEventListener("click",(e) =>{

        // target.dataset.color

        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");

        });
        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            localStorage.setItem("background_option",true)
            backgroundoption = true;
            randomimg()

        }else{
            localStorage.setItem("background_option",false)
            backgroundoption = false;
            clearInterval(interval)
        }
    });
});




let landpage = document.querySelector(".landing-page")


let imagearray = ["background6.jpg","background3.jpg","background5.jpg"];


function randomimg(){

    if(backgroundoption == true){
interval =  setInterval(()=>{

            let random = Math.floor(Math.random() * imagearray.length);
            landpage.style.backgroundImage = 'url("../images/'+ imagearray[random] +'")';
        },3000)
        

    }
}

randomimg()




// let ourskills = document.querySelector(".skills");

// window.onscroll = function(){

//     let skilloffsettop = ourskills.offsetTop;
//     let skillsouterheight = ourskills.offsetHeight;
//     let windowheight = this.innerHeight;

//     let windowscrolltop = this.pageYOffset;

//     if(windowscrolltop > (skilloffsettop + skillsouterheight - windowheight )){

//         let allSkills = document.querySelectorAll(" .skill-box .skill-progress span");

//         allSkills.forEach(skill => {
//             skill.style.width = skill.dataset.progress;
//         })
        
//     }
// }

$(function(){
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop();
        
        if(sc >= "800"){
            let allSkills = document.querySelectorAll(" .skill-box .skill-progress span");
            
                    allSkills.forEach(skill => {
                        skill.style.width = skill.dataset.progress;
                    })
            
        }
        
    })
})


let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach(img => {

    img.addEventListener("click",(e)=>{

        let overlay = document.createElement("div")
        overlay.className = "pop";

        document.body.appendChild(overlay);

        let popbox = document.createElement("div")
        popbox.className = "pop-box";
        if(img.alt != null){

            let imgheading = document.createElement("h3");

            let imgtext = document.createTextNode(img.alt);

            imgheading.appendChild(imgtext);

            popbox.appendChild(imgheading);


        }
        let popimage = document.createElement("img");
        popimage.src = img.src;

        popbox.appendChild(popimage);

        document.body.appendChild(popbox);

        let closebutton = document.createElement("span");

        let closebuttontext = document.createTextNode("X");
        closebutton.appendChild(closebuttontext);

        closebutton.className ="close-button";

        popbox.appendChild(closebutton)

        


    });
});


document.addEventListener("click",function(f){

    if(f.target.className == "close-button"){
        f.target.parentNode.remove();
        document.querySelector(".pop").remove()
    }
});






const allbullets = document.querySelectorAll(".nav-bullets .bullet");

allbullets.forEach(bul =>{

    bul.addEventListener("click",(e)=>{
        
        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'

        });
    });
});




const alllinks = document.querySelectorAll(".links a");

alllinks.forEach(link =>{

    link.addEventListener("click",(e)=>{
        e.preventDefault();
        
        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'

        });
    });
});

let bulletsspan = document.querySelectorAll(".bullets-option span");
let bulletscontainer = document.querySelector(".nav-bulllets");

bulletsspan.forEach(span => {

    span.addEventListener("click",(e)=>{
        if(span.dataset.display === "show"){

            bulletscontainer.style.display = "block"

        }else{
            bulletscontainer.classList.add("hide");
        }

        handelactive(e)       

    })
})





function handelactive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");
    });

    ev.target.classList.add("active")

}

document.querySelector(".reset-option").onclick = function(){
    localStorage.clear();
    window.location.reload();
    
}





let togglebutton = document.querySelector(".toggle-menu");


let tlinks = document.querySelector(".links");
let ah = document.querySelectorAll(".links li a")
togglebutton.onclick = function(e){
    //  e.stopPropagtion()
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("open");
    
};


document.addEventListener("click",(e)=>{
    
    if(e.target !== togglebutton &&e.target!==tlinks){
        
   if(tlinks.classList.contains("open")){

    togglebutton.classList.toggle("menu-active");
    tlinks.classList.toggle("open");

   }

    }
})


// tlinks.onclick = function(){
//     e.stopPropagtion()
// }







