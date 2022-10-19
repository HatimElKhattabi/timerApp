const duration = document.querySelector('#duration');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration1;
const timer1 = new Timer(duration,btnStart,btnPause, {
    onStart(totalDuration) {
        duration1 = totalDuration;
    }, onTick(timeRemainning) {
        circle.setAttribute('stroke-dashoffset',
        perimeter * timeRemainning / duration1 - perimeter
        );

    }, onComplete() {
        console.log('done');
    }
});

