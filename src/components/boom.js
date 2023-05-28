class Boom{
    constructor(){
        this.boom = document.querySelector(".boom")
        this.play = document.querySelector(".playboom");
        this.next = document.querySelector(".boomnext");
        this.ipod = document.querySelector(".ipod");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick)
        this.next.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/blue.mp3');
        this.isPlaying = false;
    }

    handleClick(e){ 
        if(e.target === this.play){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if (e.target === this.next){
            this.boom.classList.add("fadeout");
            this.boom.classList.add("hidden")
            if(this.isPlaying) this.stopAudio();
            setTimeout(this.reveal,2000);
        }
    }
    reveal(){
        document.querySelector(".ipod").classList.remove("hidden")
    }

    playAudio(playing){
        if (!playing){
            document.querySelector(".boombox").classList.add("shake")
            document.querySelector(".root").classList.add("changeColor")
            this.audio.play();
            this.isPlaying = true;
            this.play.innerText = "▐▐";
            this.play.classList.add("pause")

        }
    }
    stopAudio(){
        document.querySelector(".boombox").classList.remove("shake")
        document.querySelector(".root").classList.remove("changeColor")
        this.audio.pause();
        this.isPlaying = false;
        this.play.innerText = "▶";
        this.play.classList.remove("pause")
    }


}

export default Boom;