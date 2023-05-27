class Boom{
    constructor(){
        this.rad = document.querySelector(".boom")
        this.play = document.querySelector(".playboom");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick)
        this.next = document.querySelector(".radnext");
        this.next.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/blue.mp3');
        this.playing = false;
    }

    handleClick(e){ 
        if(e.target === this.play){
            this.playAudio(this.playing);
        }
        else{
            this.rad.classList.add("fadeout");
            this.rad.classList.add("visually-hidden")
            this.rec = document.querySelector(".record");
            this.rec.classList.add("fastfade");
            this.rec.classList.remove("visually-hidden");
        }
    }

    playAudio(playing){
        if (!playing){
            document.querySelector(".boombox").classList.add("shake")
            document.querySelector(".root").classList.add("changeColor")
            this.audio.play();
            this.playing = true;
        }
    }


}

export default Boom;