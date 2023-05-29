class Record{
    constructor(){
        this.rec = document.querySelector(".record");
        this.playrec = document.querySelector(".playrec");
        this.back = document.querySelector(".backrec");
        this.next = document.querySelector(".recnext");
        this.handleClick = this.handleClick.bind(this);
        this.playrec.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick)
        this.back.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/lavieenrose.mp3');
        this.isPlaying = false;
    }

    handleClick(e){
        if(e.target === this.playrec){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if (e.target === this.next){
            this.rec.classList.add("fadeout");
            this.rec.classList.add("hidden");
            this.walk = document.querySelector(".walkman")
            this.walk.classList.add("fastfade")
            this.walk.classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
            document.querySelector(".recbottom").classList.add("hidden")
            document.querySelector(".walkbottom").classList.remove("hidden")
        }
        else if (e.target === this.back){
            this.rec.classList.add("hidden");
            document.querySelector(".radio").classList.remove("hidden")
            document.querySelector(".radio").classList.remove("fadeout")
            document.querySelector(".recbottom").classList.add("hidden")
            document.querySelector(".radbottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
        }
    }

    playAudio(){
        this.audio.play();
        document.querySelector(".rec").classList.add("spin");
        this.isPlaying = true;
        this.playrec.innerText = "▐▐";
        this.playrec.classList.add("pause")
    }

    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playrec.innerText = "▶";
        this.playrec.classList.remove("pause")
        document.querySelector(".rec").classList.remove("spin");
    }

}

export default Record;