
 // ClickBasr 
 const ClickBras= document.getElementById('bars');
ClickBras.onclick=()=>{
    
    ClickBras.classList.toggle('fa-xmark')

}

// Create Swiper in Index 
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  // Counter Section About

const nums = document.querySelectorAll('.counter .num');

function startCounter(el) {
  let goal = parseInt(el.dataset.goal);
  let count = setInterval(() => {
    el.textContent = parseInt(el.textContent) + 1;
    if (parseInt(el.textContent) === goal) {
      clearInterval(count);
    }
  }, 8);
}

nums.forEach(num => startCounter(num));


/// Create Button Top

// create the button element
var button = document.createElement("button");

// set the button text
button.textContent = "Up";

// set the button styles
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "10px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#333";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.cursor = "pointer";
button.style.opacity = "0.5";
button.style.transition = "opacity 0.3s ease";

// add an event listener to the button to scroll to the top of the page when clicked
button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// add the button to the document body
document.body.appendChild(button);
// show/hide the button based on the user's scrolling position
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 1200) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
});



