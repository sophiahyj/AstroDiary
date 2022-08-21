const mainContainer = document.getElementById('main-container');
const ex = document.getElementById('ex');
const diaryElement = document.getElementById('random-diary');

const showRandomDiary = () => {
    ex.classList.add('hide');
    diaryElement.classList.remove('hide');
}
const hideRandomDiary = () => {
    ex.classList.remove('hide');
    diaryElement.classList.add('hide');
}

// mainContainer.addEventListener('doubleclick', showRandomDiary);