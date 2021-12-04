//The code below is partially based on the code by dcode on youtube: https://www.youtube.com/watch?v=PIiMSMz7KzM


//The timer class for the entire time game
class Timer {

    
    constructor(root){
        //Adding html from this class to it html page
        root.innerHTML = Timer.getHMTL();
        this.score = 0;
        //Getting elements
        this.selectedWord = document.getElementById("ChallengeWord");
        this.challengePlace = document.getElementById("ChallengePlace");
        this.option1 = document.getElementById("ChallengeButton1");
        this.option2 = document.getElementById("ChallengeButton2");
        this.option3 = document.getElementById("ChallengeButton3");
        this.option4 = document.getElementById("ChallengeButton4");
        this.scorePlace = document.getElementById("score");
        this.wrong = false;
        //Getting the elements
        this.el = {
            minutes : root.querySelector(".timer__part--minutes"),
            seconds : root.querySelector(".timer__part--seconds"),
            start : root.querySelector(".timer__button"),
        };
        //The game control variable
        this.interval = null;
        this.remainingSeconds = 10;
       //Start and end the game
        this.el.start.addEventListener("click", () => {
            if(this.interval == null){
                this.start();
            }
            else{
                this.stop();
            }
        });
    }

    
    //Start the game with all initial values
    start(){

        this.score = 0;
        this.remainingSeconds = 11;

        this.arrangeChallenge();


        this.setButtons();

        
        if(this.remainingSeconds == 0){
            return;
        }
        //Set the time interval for the game
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateTime();
            if(this,this.remainingSeconds == 0){
                this.stop();
            }
        }, 1000);

        this.updateStatus();
    }
    //End the game
    stop(){
        
        clearInterval(this.interval);
        this.interval = null;
        this.updateStatus();
        
    }
    //Assigning the game buttons and making them interact with the code
    setButtons(){

        this.option1.addEventListener("click", () => {
            if(this.option1.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.wrong = true;
                this.stop();
            }
        });
        this.option2.addEventListener("click", () => {
            if(this.option2.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.wrong = true;
                this.stop();
            }
        });
        this.option3.addEventListener("click", () => {
            
            if(this.option3.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.wrong = true;
                this.stop();
            }
        });
        this.option4.addEventListener("click", () => {
            if(this.option4.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.wrong = true;
                this.stop();
            }
        });
        
    }
    //Prepare the words for the game and assign them to buttons
    arrangeChallenge(){

        var Words = [];
        for(this.x in localStorage){
            if(localStorage.getItem(this.x) != null){
            
            Words.push(JSON.parse(localStorage.getItem(this.x)));
            }
        }

        var options = ["", "", "", ""];
        for(this.i = 0; this.i < options.length; this.i++){
            options[this.i] = Words[Math.floor(Math.random() * Words.length)].Definition;
        }

        var theWord = Words[Math.floor(Math.random() * Words.length)];
        options[Math.floor(Math.random() * options.length)] = theWord.Definition;

        this.selectedWord.innerHTML = theWord.Word;
        this.option1.innerHTML = options[0];
        this.option2.innerHTML = options[1];
        this.option3.innerHTML = options[2];
        this.option4.innerHTML = options[3];

        
        //selectedWord.innerHTML = localStorage.getItem();
    }
    //Update the time
    updateTime(){
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");

    }
    //Status update that checks the state of the game and changes html of certain elements
    updateStatus(){
        if(this.score == 10){
            this.stop();
            alert("Felicitations, you have mastered your vocabulary.")
        }
        if(this.interval == null){
            this.el.start.innerHTML = `<img src="assets/images/outline_play_arrow_black_24dp.png">`;
            this.el.start.classList.add("timer__button--start");
            this.el.start.classList.remove("timer__button--stop");
            
            
            
        }
        else{
            this.el.start.innerHTML = `<img src="assets/images/outline_stop_black_24dp.png">`;
            this.el.start.classList.add("timer__button--stop");
            this.el.start.classList.remove("timer__button--start");
            this.remainingSeconds = 11;
            
        }
        if(this.wrong == true){
            this.wrong = false;
            
            alert("Game over. Let's see the score.");
        }
        
        this.scorePlace.innerHTML = this.score.toString();
    }
    //This function sends the html content that will be displayed
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

//Initialize the game
new Timer(document.querySelector(".timer"));