class Boom{
    constructor(){
        this.boom = document.querySelector(".boom")
        this.play = document.querySelector(".playboom");
        this.next = document.querySelector(".boomnext");
        this.back = document.querySelector(".backboom");
        this.ipod = document.querySelector(".ipod");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick)
        this.next.addEventListener("click",this.handleClick)
        this.back.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/blue.mp3');
        this.isPlaying = false;
    }

    handleClick(e){ 
        if(e.target === this.play){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if (e.target === this.next){
            this.boom.classList.remove("leftright");
            this.boom.classList.remove("radslidein");
            this.boom.classList.add("radslideleft");
            document.querySelector(".boombottom").classList.remove("fastfade")
            document.querySelector(".boombottom").classList.add("fadeout")
            setTimeout(this.hide,1000);
            if(this.isPlaying) this.stopAudio();
        }
        else if(e.target === this.back){
            this.boom.classList.remove("leftright");
            this.boom.classList.remove("radslidein");
            this.boom.classList.add("radslideright");
            document.querySelector(".boombottom").classList.add("hidden")
            document.querySelector(".walkbottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
            setTimeout(this.backhide,1000);

        }
    }

    hide(){
        document.querySelector(".boom").classList.add("hidden");
        document.querySelector(".boom").classList.remove("radslideleft");
        document.querySelector(".ipod").classList.add("radslidein");
        document.querySelector(".ipod").classList.remove("hidden");
        document.querySelector(".boombottom").classList.add("hidden")
        document.querySelector(".boombottom").classList.remove("fade")
        document.querySelector(".boombottom").classList.remove("fadeout")

    }

    backhide(){
        document.querySelector(".boom").classList.add("hidden");
        document.querySelector(".boom").classList.remove("radslideright");
        document.querySelector(".walkman").classList.add("leftright");
        document.querySelector(".walkman").classList.remove("hidden");
    }
    playAudio(playing){
        if (!playing){
            document.querySelector(".boombox").classList.add("shake")
            document.querySelector(".root").classList.add("changeColor")
            this.audio.play();
            this.isPlaying = true;
            this.play.innerText = "▐▐";
            this.play.classList.add("pause")
            document.querySelector(".boomhead").classList.remove("kindahidden")
            document.querySelector(".boomhead").classList.add("fastfade")
            document.querySelector(".subboom").classList.remove("kindahidden")
            document.querySelector(".subboom").classList.add("fastfade")
            document.querySelector(".boomtext").classList.remove("kindahidden")
            document.querySelector(".boomtext").classList.add("fade")

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