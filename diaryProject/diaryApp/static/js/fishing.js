const mainContainer = document.getElementById('main-container');
const astro = document.getElementById('astro');
const diaryElement = document.getElementById('random-diary');

const showRandomDiary = () => {
    astro.classList.add('hide');
    diaryElement.classList.remove('hide');
}
const hideRandomDiary = () => {
    astro.classList.remove('hide');
    diaryElement.classList.add('hide');
}

let accelerometer = null;

if ('Accelerometer' in window) {
    console.log('acc exist')
} else {
    console.log('no acc')
}

try {
    accelerometer = new Accelerometer({frequency: 10});
    accelerometer.onerror = (event) => {
        if (event.error.name === 'NotAllowedError') {
            console.log('Permission to access sensor was denied.');
        } else if (event.error.name === 'NotReadableError') {
            console.log('Cannot connect to the sensor.');
        }
    };
    accelerometer.onreading = (e) => {
        console.log(e);
    };
    accelerometer.start();
} catch (error) {
    if (error.name === 'SecurityError') {
        console.log('Sensor construction was blocked by the Permissions Policy.');
    } else if (error.name === 'ReferenceError') {
        console.log('Sensor is not supported by the User Agent.');
    } else {
        throw error;
    }
};