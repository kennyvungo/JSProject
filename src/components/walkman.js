class Walkman{
constructor(){
    this.walk = document.querySelector(".walkman");
    this.play = document.querySelector(".playwalk");
    this.handleClick = this.handleClick.bind(this);
    this.play.addEventListener("click",this.handleClick);
    this.next = document.querySelector(".walknext");
    this.next.addEventListener("click",this.handleClick);
    this.audio = new Audio()

}

    handleClick(e){ 
        if(e.target === this.playrad){
            this.playAudio(this.playing);
        }
        else{
            this.walk.classList.add("fadeout");
            this.walk.classList.add("visually-hidden");
            this.ipod = document.querySelector(".ipod")
            this.ipod.classList.add("fastfade");
            this.ipod.classList.remove("visually-hidden");
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