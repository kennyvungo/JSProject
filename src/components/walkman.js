class Walkman{
constructor(){
    this.walk = document.querySelector(".walkman");
    this.play = document.querySelector(".playwalk");
    this.handleClick = this.handleClick.bind(this);
    this.play.addEventListener("click",this.handleClick);
    this.next = document.querySelector(".walknext");
    this.audio = new Audio()

}

    handleClick(e){ 
        if(e.target === this.playrad){
            this.playAudio(this.playing);
        }
        else{
            this.rad.classList.add("fadeout");
            this.rec = document.querySelector(".record");
            this.rec.classList.add("fastfade");
            this.rec.classList.remove("hidden");
        }
    }

    playAudio(playing){
        if (!playing){
            this.audio.play();
            this.playing = true;
        }
    }


}
export default Walkman;