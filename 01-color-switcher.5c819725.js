const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",()=>{t.body.style.backgroundColor=r(),e=setInterval(()=>{t.body.style.backgroundColor=r()},1e3),t.startBtn.setAttribute("disabled","disabled"),t.stopBtn.removeAttribute("disabled")}),t.stopBtn.addEventListener("click",()=>{clearInterval(e),t.stopBtn.setAttribute("disabled","disabled"),t.startBtn.removeAttribute("disabled")});
//# sourceMappingURL=01-color-switcher.5c819725.js.map