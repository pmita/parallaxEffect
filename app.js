const translate = document.querySelectorAll(".translate");

//Next make the tile dissapear slowly
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
let header_height = header.offsetHeight;
//You need the height of the header in px

//Increase the shadow div accordingly
const shadow = document.querySelector(".shadow");

const content = document.querySelector(".content");
const section = document.querySelector(".section");
let section_height = section.offsetHeight;

const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

const image_container = document.querySelector(".imgContainer");
window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset; //Grab how many pixels the user has scrolled down
    let sectionY = section.getBoundingClientRect();
    

    translate.forEach(element =>{
        let speed = element.dataset.speed;
        
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    //Trigger opacity increase in relation to scrolling the page 
    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}`; //Increse the shadow height as we scroll

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})  