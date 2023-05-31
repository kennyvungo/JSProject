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
        this.audio = new Audio('src/assets/cross.mp3');
        this.isPlaying = false;
    }

    handleClick(e){ 
        if(e.target === this.playrad){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if (e.target === this.next){
            // this.rad.classList.add("hidden")
            this.rad.classList.remove("fastfade");
            this.rad.classList.add("radslideleft");
            setTimeout(this.hide,1000)
            if(this.isPlaying) this.stopAudio();
            document.querySelector(".radio").classList.remove("leftright")
            document.querySelector(".radbottom").classList.add("hidden")
            document.querySelector(".recbottom").classList.remove("hidden")
        }
        else if(e.target === this.back){
            document.querySelector(".radio").classList.remove("leftright")
            this.rad.classList.remove("radslidein");
            this.rad.classList.add("radslideright");
            document.querySelector(".radbottom").classList.add("hidden")
            document.querySelector(".bottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
            setTimeout(this.backhide,1000);
        }
    }
    hide(){
        document.querySelector(".radio").classList.add("hidden");
        document.querySelector(".radio").classList.remove("radslideleft");
        document.querySelector(".record").classList.add("radslidein");
        document.querySelector(".record").classList.remove("hidden");
    }

    backhide(){
        document.querySelector(".radio").classList.add("hidden");
        document.querySelector(".radio").classList.remove("radslideright");
        document.querySelector(".phono").classList.add("leftright");
        document.querySelector(".phono").classList.remove("hidden");
    }
    
    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.playrad.innerText = "▐▐";
            this.playrad.classList.add("pause")
            document.querySelector(".radhead").classList.remove("kindahidden")
            document.querySelector(".radhead").classList.add("fastfade")
            document.querySelector(".subrad").classList.remove("kindahidden")
            document.querySelector(".subrad").classList.add("fastfade")
            document.querySelector(".radtext").classList.remove("kindahidden")
            document.querySelector(".radtext").classList.add("fade")

    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playrad.innerText = "▶";
        this.playrad.classList.remove("pause")
    }


}

export default Radio;