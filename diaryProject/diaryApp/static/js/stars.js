const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d'); //2 dimentional drawing 이라는 뜻
const stars = [];

function init() {
  const banner = document.getElementById('banner');
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight; 

  for (let i =0 ; i < 200; i++) {
    stars.push({
      x : Math.random(),
      y: Math.random(),
      size : Math.random(),
      change : .15,

    })
  }
}

function update() {
    for (const star of stars) {
        star.x += 0.001; //별 오른쪽으로 update 할 때마다 이동
        if (star.x > 1.0) {
            star.x = 0.0; //오른쪽 canvas 밖으로 나가면 도로 처음 위치로 돌리기
        }

        if (star.size < 0.1) {
            star.change = 0.1;
        }
        else if (star.size > 0.9) {
            star.change = -0.1; // 안해주면 밑에 twinkle 함수에서 update 할 때마다 별이 계속 커짐
        }
        star.size += star.change; //0~15
    }
}

function render() {
    const {width, height} = canvas;
    context.clearRect(0,0,width,height) //reset canvas after each draw
    for (const star of stars) {
        context.beginPath();
        context.arc(star.x * width, star.y * height, star.size * 1.5, 0, 2 * Math.PI, false); //별 원모양으로 만들어주기, 크기 설정
        context.fillStyle = 'white'; //색 채우는 함수 만들어서 실행
        context.fill();
    } 
}

function twinkle() {
    update();
    render();

}

init();
setInterval(twinkle, 100); //반짝거리는 속도
render();