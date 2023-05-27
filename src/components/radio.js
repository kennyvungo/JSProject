class Radio{
    constructor(){
        this.rad = document.querySelector(".radio")
        this.playrad = document.querySelector(".playrad");
        this.handleClick = this.handleClick.bind(this);
        this.playrad.addEventListener("click",this.handleClick)
        this.next = document.querySelector(".radnext");
        this.next.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/blue.mp3');
        this.playing = false;
    }

    handleClick(e){ 
        if(e.target === this.playrad){
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
            document.querySelector(".rad").classList.add("shake")
            document.querySelector(".root").classList.add("changeColor")
            this.audio.play();
            this.playing = true;
        }
    }


}

export default Radio;