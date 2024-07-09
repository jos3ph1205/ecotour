/* --------------------------------------------------
BTN CLICK ANIMATION
-------------------------------------------------- */
const rippleBtn = document.querySelectorAll(".btn");

rippleBtn.forEach((btn) => {
   let btnRipple = btn.appendChild(document.createElement("div"));
   btnRipple.classList.add("btn-ripple");

   btn.oncontextmenu = (e) => e.preventDefault();

   btn.onmousedown = (e) => {
      let cursorPos = {
         x: e.offsetX,
         y: e.offsetY,
      };

      let ripple = btnRipple.appendChild(document.createElement("span"));
      ripple.classList.add("ripple");

      ripple.style.left = `${cursorPos.x}px`;
      ripple.style.top = `${cursorPos.y}px`;

      setTimeout(() => {
         ripple.remove();
      }, 600);
   };
});
