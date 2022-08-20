import { closemodal, openmodal } from "./modal.js";
const $ = (selector) => document.querySelector(selector);
function App() {
  console.log('ddd')
  $(".btn-open-modal").addEventListener("click", ()=>{
    console.log('dd')
    openmodal();
  });
  $(".modal-close").addEventListener("click", ()=>{
    closemodal();
  });
}
const app = new App();
