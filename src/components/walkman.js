class Walkman{
constructor(){
    this.walk = document.querySelector(".walkman");
    this.play = document.querySelector(".playwalk");
    this.next = document.querySelector(".walknext");
    this.back = document.querySelector(".backwalk");
    this.handleClick = this.handleClick.bind(this);
    this.play.addEventListener("click",this.handleClick);
    this.next.addEventListener("click",this.handleClick);
    this.back.addEventListener("click",this.handleClick);
    this.audio = new Audio('src/assets/abba.mp3')
    this.isPlaying = false;

}

    handleClick(e){ 
        if(e.target === this.play){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else if(e.target === this.next){
            this.walk.classList.add("fadeout");
            this.walk.classList.add("hidden");
            this.boom = document.querySelector(".boom")
            this.boom.classList.add("fastfade");
            this.boom.classList.remove("hidden");
            if(this.isPlaying) this.stopAudio(); 
            document.querySelector(".walkbottom").classList.add("hidden")
            document.querySelector(".boombottom").classList.remove("hidden")
        }
        else if(e.target === this.back){
            this.walk.classList.add("hidden");
            document.querySelector(".record").classList.remove("hidden");
            document.querySelector(".record").classList.remove("fadeout");
            document.querySelector(".walkbottom").classList.add("hidden")
            document.querySelector(".recbottom").classList.remove("hidden")
            if(this.isPlaying) this.stopAudio();
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.play.innerText = "▐▐";
            this.play.classList.add("pause")
            document.querySelector(".walkhead").classList.remove("kindahidden")
            document.querySelector(".walkhead").classList.add("fastfade")
            document.querySelector(".subwalk").classList.remove("kindahidden")
            document.querySelector(".subwalk").classList.add("fastfade")
            document.querySelector(".walktext").classList.remove("kindahidden")
            document.querySelector(".walktext").classList.add("fade")

    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.play.innerText = "▶";
        this.play.classList.remove("pause")
    }


}
export default Walkman;