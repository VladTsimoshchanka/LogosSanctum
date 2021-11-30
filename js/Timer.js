class Timer {
    constructor(root){
        
        root.innerHTML = Timer.getHMTL();
    }

    static getHMTL(){
        return `
                <span class="timer__part timer__part--minutes">00</span>
                <span class="timer__part ">:</span>
                <span class="timer__part timer__part--seconds">00</span>
                <button type="button" class="timer__button">
                    <img src="assets/images/outline_play_arrow_black_24dp.png">
                </button>
        `;
    }
}