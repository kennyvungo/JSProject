class Radio{
    constructor(){
        this.rad = document.querySelector(".radio")
        this.playrad = document.querySelector(".playrad");
        this.handleClick = this.handleClick.bind(this);
        this.playrad.addEventListener("click",this.handleClick)
        this.next = document.querySelector(".radnext");
        this.next.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/country.mp3');
        this.isPlaying = false;
    }

    handleClick(e){ 
        if(e.target === this.playrad){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if (e.target === this.next){
            this.rad.classList.add("fadeout");
            this.rad.classList.add("hidden")
            this.rec = document.querySelector(".record");
            this.rec.classList.add("fastfade");
            this.rec.classList.remove("hidden");
            if(this.isPlaying) this.stopAudio();
            document.querySelector(".radbottom").classList.add("hidden")
            document.querySelector(".recbottom").classList.remove("hidden")

        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.playrad.innerText = "▐▐";
            this.playrad.classList.add("pause")
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playrad.innerText = "▶";
        this.playrad.classList.remove("pause")
    }


}

export default Radio;