const touchedTab = document.querySelector('.touched-wrapper');
const exitBtn = document.querySelector('touched-close');

const selectDate = [];

const dateFunc = () => {
    const dates = document.querySelectorAll('.date');
    const year = document.querySelector('.year');
    const month = document.querySelector('.month');
    dates.forEach((element)=>{
        element.addEventListener('click', ()=>{
            if(element.classList.contains('other') || element.classList('selected')){
                dates.forEach(
                    
                )
            }
        })
    })
}