var lastScrollTop = 0;
let direction;

function scrollDirection() {
   let st = window.scrollY || document.documentElement.scrollTop;

   if (st > lastScrollTop) {
      direction = "down";
   } else if (st < lastScrollTop) {
      direction = "up";
   }
   lastScrollTop = st <= 0 ? 0 : st;
}
document.addEventListener("scroll", () => {
   scrollDirection();
});

const hiddenElements = document.querySelectorAll(".hidden");

const hiddenElObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("show");
      } else if (direction == "up") {
         entry.target.classList.remove("show");
      }
   });
});

hiddenElements.forEach((el) => hiddenElObserver.observe(el));

let dots = document.querySelectorAll(".dot");
let slides = document.querySelectorAll(".slide");

let slideIndex = 1;
showSlides(slideIndex);
scrollSlides();

function switchSlide(n) {
   showSlides((slideIndex = n));
}

function showSlides(n) {
   let i;
   // console.log()
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }
   slides.forEach((slide) => {
      slide.style.display = "none";
   });
   for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].classList.add("active");

   // for (i = 0; i < slides.length; i++) {
   //    slides[i].style.display = "none";
   // }
}
function scrollSlides() {
   slides.forEach((slide) => {
      slide.style.display = "none";
   });
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1;
   }
   dots.forEach((dot) => {
      dot.classList.remove("active");
   });
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   setTimeout(scrollSlides, 3500);
}

dots.forEach((dot) => {
   dot.addEventListener("click", () => {
      let parent = dot.parentNode;
      let index = Array.prototype.indexOf.call(parent.children, dot);
      // console.log(index);
      switchSlide(index + 1);
   });
});
