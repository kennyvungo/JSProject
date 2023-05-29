class Radio{
    constructor(){
        this.rad = document.querySelector(".radio")
        this.playrad = document.querySelector(".playrad");
        this.next = document.querySelector(".radnext");
        this.back = document.querySelector(".backrad")
        this.handleClick = this.handleClick.bind(this);
        this.playrad.addEventListener("click",this.handleClick)
        this.next.addEventListener("click",this.handleClick)
        this.back.addEventListener("click",this.handleClick)
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
        else if(e.target === this.back){
            this.rad.classList.add("hidden");
            document.querySelector(".phono").classList.remove("hidden");
            document.querySelector(".phono").classList.remove("fadeout");
            document.querySelector(".radbottom").classList.add("hidden")
            document.querySelector(".bottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.playrad.innerText = "▐▐";
            this.playrad.classList.add("pause")
            document.querySelector(".radhead").classList.remove("kindahidden")
            document.querySelector(".radtext").classList.remove("kindahidden")
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playrad.innerText = "▶";
        this.playrad.classList.remove("pause")
    }


}

export default Radio;