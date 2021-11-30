class Hangman {

    
    constructor(root){
        
        root.innerHTML = Hangman.getHMTL();
        this.tries = 5;
        this.score = 0;
        this.startButton = document.getElementById("start");
        this.selectedWord = document.getElementById("ChallengeWord");
        this.challengePlace = document.getElementById("ChallengePlace");
        this.option1 = document.getElementById("ChallengeButton1");
        this.option2 = document.getElementById("ChallengeButton2");
        this.option3 = document.getElementById("ChallengeButton3");
        this.option4 = document.getElementById("ChallengeButton4");
        this.scorePlace = document.getElementById("score");
        this.triesPlace = document.getElementById("tries");
        

        this.challengePlace.style.display = "none";
        this.option1.style.display = "none";
        this.option2.style.display = "none";
        this.option3.style.display = "none";
        this.option4.style.display = "none";

        this.play = null;
        
       
        this.startButton.addEventListener("click", () => {
            if(this.play == null){
                this.start();
            }
            else{
                this.stop();
            }
        });
    }

    

    refresh(){
        
        this.challengePlace.innerHTML = "";
        this.option1.innerHTML = "option1";
        this.option2.innerHTML = "option2";
        this.option3.innerHTML = "option3";
        this.option4.innerHTML = "option4";
    }

    start(){


        
        this.startButton.style.display = "none";
        this.challengePlace.style.display = "initial";
        this.selectedWord.style.display = "initial";
        this.option1.style.display = "initial";
        this.option2.style.display = "initial";
        this.option3.style.display = "initial";
        this.option4.style.display = "initial";


        this.arrangeChallenge();


        this.setButtons();

        
        if(this.tries == 0){
            return;
        }
        

        this.updateStatus();
    }

    stop(){
        this.score = 0;
        this.tries = 5;
        this.challengePlace.style.display = "none";
        this.selectedWord.style.display = "none";
        this.option1.style.display = "none";
        this.option2.style.display = "none";
        this.option3.style.display = "none";
        this.option4.style.display = "none";
        this.play = null;
        this.startButton.style.display = "initial";
        //this.updateStatus();
    }

    setButtons(){

        this.option1.addEventListener("click", () => {
            if(this.option1.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.tries--;
                this.updateStatus();
                this.arrangeChallenge();
            }
        });
        this.option2.addEventListener("click", () => {
            if(this.option2.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.tries--;
                this.updateStatus();
                this.arrangeChallenge();
            }
        });
        this.option3.addEventListener("click", () => {
            
            if(this.option3.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.tries--;
                this.updateStatus();
                this.arrangeChallenge();
            }
        });
        this.option4.addEventListener("click", () => {
            if(this.option4.innerHTML == JSON.parse(localStorage.getItem(this.selectedWord.innerHTML)).Definition){
                this.score++;
                this.updateStatus();
                this.arrangeChallenge();
            }
            else{
                this.tries--;
                this.updateStatus();
                this.arrangeChallenge();
            }
        });
        
    }

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

    

    updateStatus(){
        if(this.score == 10){
            this.stop();
            alert("Felicitations, you have mastered your vocabulary.");
            //this.refresh();
        }
        else if(this.tries <= 0){
            this.stop();
            alert("Stop it. Challenge failed.");
            //this.refresh();
        }
        
        this.scorePlace.innerHTML = this.score.toString();
        this.triesPlace.innerHTML = this.tries.toString()
    }

    static getHMTL(){
        return `
                
        `;
    }
}

new Hangman(document.querySelector(".Hangman"));