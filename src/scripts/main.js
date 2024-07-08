/* --------------------------------------------------
BTN CLICK ANIMATION
-------------------------------------------------- */
let buttons = document.querySelectorAll(".btn");

function removeRipple(ripple, container) {
   ripple.classList.replace("dwn", "up");

   ripple.onanimationend = () => {
      container.removeChild(ripple);
   };
}

buttons.forEach((btn) => {
   let btnRipple = btn.appendChild(document.createElement("div"));

   btnRipple.classList.add("btn-ripple");

   btn.onmousedown = (e) => {
      let rippleCount = btnRipple.children.length;
      let mousedown = 0;

      function mouseup(btn) {
         return new Promise((resolve) => {
            // btn.onmouseleave = () => {
            //    resolve("up")
            // }
            window.onmouseup = () => {
               if (mousedown > 0) {
                  mousedown = 0;
               }
               // console.log(mousedown);
               resolve("up");
            };
         });
      }

      mousedown++;
      // console.log(mousedown);

      let x = (e.offsetX / btn.offsetWidth) * 100,
         y = (e.offsetY / btn.offsetHeight) * 100;

      let ripple = btnRipple.appendChild(document.createElement("span"));
      ripple.classList.add("ripple");
      ripple.classList.add("dwn");

      ripple.style.left = `${x}%`;
      ripple.style.top = `${y}%`;

      window.onmouseup = () => {
         if (mousedown > 0) {
            mousedown = 0;
         }
         // console.log(mousedown);
      };

      window.oncontextmenu = () => {
         if (mousedown > 0) {
            mousedown = 0;
         }
         // console.log(mousedown);
         console.log(rippleCount);
         if (rippleCount > 1) {
            (async function mouseState() {
               await mouseup(btn);

               removeRipple(btnRipple.children[0], btnRipple);
               // console.log(mousedown);
            })();
         }
      };

      ripple.onanimationend = () => {
         if (mousedown > 0) {
            (async function mouseState() {
               await mouseup(btn);

               removeRipple(ripple, btnRipple);
               // console.log(mousedown);
            })();

            return;
         } else {
            removeRipple(ripple, btnRipple);
            // console.log(mousedown);
         }
      };
   };
});
