const mainContainer = document.getElementById('main-container');
const diaryElement = document.getElementById('random-diary');

const showRandomDiary = () => {
    diaryElement.classList.remove('hide');
    console.log(diaryElement.classList);
    console.log('hide');
}
const hideRandomDiary = () => {
    diaryElement.classList.add('hide');
    console.log(diaryElement.classList);
    console.log('show');
}

mainContainer.addEventListener('doubleclick', showRandomDiary);