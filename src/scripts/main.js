/* --------------------------------------------------
BTN CLICK ANIMATION
-------------------------------------------------- */
const rippleBtn = document.querySelectorAll(".btn");

rippleBtn.forEach((btn) => {
   if (btn.hasAttribute("data-block")) {
      return;
   }
   let btnRipple = btn.appendChild(document.createElement("div"));
   btnRipple.className = "btn-ripple";

   btn.oncontextmenu = (e) => e.preventDefault();

   btn.onmousedown = (e) => {
      let ripple = btnRipple.appendChild(document.createElement("span"));
      ripple.className = "ripple";

      ripple.style.cssText = `
         top: ${e.offsetY}px;
         left: ${e.offsetX}px;
      `;

      setTimeout(() => {
         ripple.remove();
      }, 600);
   };
});

/* --------------------------------------------------
SIDENAV TOGGLE
-------------------------------------------------- */

let menuToggleBtn = document.querySelector(".toggle");
let sideNav = document.querySelector(".sidenav");

menuToggleBtn.addEventListener("click", () => {
   menuToggleBtn.classList.toggle("show");
   sideNav.classList.toggle("show");
});
