// for add class to make backGround at navBar while scrolling
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY >= 100);
});
// for navlinks icon
const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  ico.classList.add("active");
});
menu.onclick = () => {
  menu.classList.remove('active')
  
  
}
//for active class
const filteritem = document.querySelector(".filter-projects");
const filterbox = document.querySelectorAll(".project-box");

window.onload = () => {
  //once window loaded
  filteritem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filteritem.querySelector(".f-active").classList.remove("f-active");
      selectedItem.target.classList.add("f-active");
      let filtername = selectedItem.target.getAttribute("data-filter");
      filterbox.forEach((img) => {
        let filterimgs = img.getAttribute("data-filter");
        if (filterimgs == filtername || filtername == "all") {
          img.classList.remove("hide");
          img.classList.add("show");
        } else {
          img.classList.add("hide");
          img.classList.remove("show");
        }
      });
    }
  };
};

// for btn scrollUp
const opacityShow = document.querySelector(".scroll-up-btn");
window.addEventListener("scroll", function () {
  opacityShow.classList.toggle("show", window.scrollY >= 500);
});

opacityShow.onclick = function () {
  window.scrollTo(0, 0);
};
// start typeWriter by pure JS
const txtElement = document.getElementById("typewriter");
const typed = ["Web Developer", "Freelancer", "Designer"];
let index = 0;
let typer = 0;
let currentTyped = [];
let isDeleting = false;
let isEnd = false;
function loop() {
  isEnd = false;
  txtElement.innerHTML = currentTyped.join("");

  if (index < typed.length) {
    if (!isDeleting && typer <= typed[index].length) {
      currentTyped.push(typed[index][typer]);
      typer++;
      txtElement.innerHTML = currentTyped.join("");
    }

    if (isDeleting && typer <= typed[index].length) {
      currentTyped.pop(typed[index][typer]);
      typer--;
      txtElement.innerHTML = currentTyped.join("");
    }
    if (typer == typed[index].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && typer === 0) {
      currentTyped = [];
      isDeleting = false;
      index++;
      if (index == typed.length) {
        index = 0;
      }
    }
  }
  const typeSpeed = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 150) + 50;
  const time = isEnd ? 1000 : isDeleting ? typeSpeed : normalSpeed;
  setTimeout(loop, time);
}

loop();

// Rating 

const rating = document.querySelector('.rating')
const ratingCount = document.querySelector('.rating_counter')

var count = 24


rating.addEventListener('click', function(){
 
  if(count === 24){
    ++count 
    ratingCount.innerHTML = count
  } else if (count == 25){
    --count
    ratingCount.innerHTML = count
  }
})


// Color Selector

const mainColor = document.querySelector('.green')
const goldColor = document.querySelector('.gold')
const blueColor = document.querySelector('.light_blue')
const pinkColor = document.querySelector('.pink')



function colorSelector() {
  mainColor.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--main-color',e.target.getAttribute("data-value"))
  })
  goldColor.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--main-color',e.target.getAttribute("data-value"))
  })
  blueColor.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--main-color',e.target.getAttribute("data-value"))
  })
  pinkColor.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--main-color',e.target.getAttribute("data-value"))
  })
}

colorSelector()