class Timer {
    constructor(durationInput,startButton,pauseButton,callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        
        this.pauseButton.addEventListener('click',this.pause);
        this.startButton.addEventListener('click',this.start);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemainning);
        }
        this.tick();
        this.intervalp = setInterval(this.tick, 50);
    }
    pause = () => {
        clearInterval(this.intervalp);
        if(this.onComplete) {
            this.onComplete();
        }
    }
    //onDurationChange();
    tick = (timeRemainning) => {
        if (this.timeRemainning == 0) {
            this.pause();
        } else {
            this.timeRemainning = this.timeRemainning - 0.05 ;
            if (this.onTick) {
                this.onTick(this.timeRemainning);

            }

        }
        
    }

    // getters and setters
    get timeRemainning() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemainning(value) {
        this.durationInput.value = value.toFixed(2);
    }
}