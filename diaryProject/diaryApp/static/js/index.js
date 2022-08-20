import { closemodal, openmodal } from "./modal.js";
const $ = (selector) => document.querySelector(selector);
function App() {
  $(".btn-open-modal").addEventListener("click", ()=>{
    openmodal();
  });
  $(".modal-close").addEventListener("click", ()=>{
    closemodal();
  });
}
const app = new App();
app.init();


//여기서부터 별배경
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d'); //2 dimentional drawing 이라는 뜻
// const stars = [];

// function initialize() {
//   const banner = document.getElementById('banner');
//   canvas.width = banner.offsetWidth;
//   canvas.height = banner.offsetHeight; 

//   for (let i =0 ; i < 200; i++) {
//     stars.push({
//       x : Math.random(),
//       y: Math.random(),
//       size : Math.random(),
//     })
//   }
// }

// initialize();

//init 함수는 js 하나당 하나만 가능한 것이었나..?