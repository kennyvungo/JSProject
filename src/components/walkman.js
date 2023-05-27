class Walkman{
constructor(){
    this.walk = document.querySelector(".walkman");
    this.play = document.querySelector(".playwalk");
    this.handleClick = this.handleClick.bind(this);
    this.play.addEventListener("click",this.handleClick);
    this.next = document.querySelector(".walknext");
    this.next.addEventListener("click",this.handleClick);
    this.audio = new Audio('src/assets/abba.mp3')
    this.isPlaying = false;

}

    handleClick(e){ 
        if(e.target === this.play){
            this.isPlaying ? this.stopAudio() : this.playAudio();
        }
        else{
            this.walk.classList.add("fadeout");
            this.walk.classList.add("hidden");
            this.boom = document.querySelector(".boom")
            this.boom.classList.add("fastfade");
            this.boom.classList.remove("hidden");
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.play.innerText = "▐▐";
            this.play.classList.add("pause")
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.play.innerText = "▶";
        this.play.classList.remove("pause")
    }


}
export default Walkman;