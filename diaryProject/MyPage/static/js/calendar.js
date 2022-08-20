let date = new Date();

const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector('.year').textContent = `${viewYear}`;
    document.querySelector('.month').textContent = `${viewMonth + 1}`;

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PrevDate = prevLast.getDate();
    const PrevDay = prevLast.getDay();

    const ThisDate = thisLast.getDate();
    const ThisDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(ThisDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PrevDate !== 6){
        for (let i=0; i < PrevDay + 1; i++){
            prevDates.unshift(PrevDate - i);
        }
    }

    for (let i=1; i < 7 - ThisDay; i++){
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(ThisDate);

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ?
        'this':
        'other';
        dates[i] = `<div class="date ${condition}">${date}</div>`;
    });

    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        for (let date of document.querySelectorAll('.this')){
            if (+date.innerText === today.getDate()){
                date.classList.add('today');
                break;
            }
        }
    }
};

renderCalendar();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
const goToday = () => {
    date = new Date();
    renderCalendar();
}