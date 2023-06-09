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
            this.rec.classList.remove("fastfade");
            this.rec.classList.remove("radslidein");
            this.rec.classList.remove("leftright");
            this.rec.classList.add("slideleft");
            setTimeout(this.hide,1000)
            if(this.isPlaying) this.stopAudio();
            document.querySelector(".recbottom").classList.add("hidden")
            document.querySelector(".walkbottom").classList.remove("hidden")
        }
        else if (e.target === this.back){
            this.rec.classList.remove("radslidein");
            this.rec.classList.add("radslideright");
            this.rec.classList.remove("leftright");
            document.querySelector(".recbottom").classList.add("hidden")
            document.querySelector(".radbottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
            setTimeout(this.backhide,1000);
        }
    }

    hide(){

        document.querySelector(".record").classList.add("hidden");
        document.querySelector(".record").classList.remove("slideleft");
        this.walk = document.querySelector(".walkman")
        this.walk.classList.add("radslidein")
        this.walk.classList.remove("hidden")
    }

    backhide(){
        document.querySelector(".record").classList.add("hidden");
        document.querySelector(".record").classList.remove("radslideright");
        document.querySelector(".radio").classList.add("leftright");
        document.querySelector(".radio").classList.remove("hidden");
    }
    playAudio(){
        this.audio.play();
        document.querySelector(".rechead").classList.remove("kindahidden")
        document.querySelector(".rectext").classList.remove("kindahidden")
        document.querySelector(".subrec").classList.remove("kindahidden")
        document.querySelector(".subrec").classList.add("fastfade")
        document.querySelector(".rechead").classList.add("fastfade")
        document.querySelector(".rectext").classList.add("fade")
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