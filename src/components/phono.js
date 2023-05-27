class Phono{
    constructor(){
        this.phono = document.querySelector(".phono");
        this.playphono = document.querySelector(".playpho");
        this.next = document.querySelector(".phonext");
        this.handleClick = this.handleClick.bind(this);
        this.rad = document.querySelector(".radio");
        this.playphono.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick);
        this.audio = new Audio('src/assets/chopin.mp3');
        this.isPlaying = false;
    }


    handleClick(e){
        if(e.target === this.playphono){
            this.isPlaying ? this.stopAudio() : this.playAudio();
            document.querySelector(".notes").classList.remove("hidden")
        }
        else{
            this.phono.classList.add("fadeout");
            this.phono.classList.add("hidden");
            this.rad.classList.add("fastfade");
            this.rad.classList.remove("hidden");
            if(this.isPlaying) this.stopAudio();
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.playphono.innerText = "▐▐";
            this.playphono.classList.add("pause")
            document.querySelector(".phospeak").classList.remove("hidden");
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playphono.innerText = "▶";
        this.playphono.classList.remove("pause")
        document.querySelector(".notes").classList.add("hidden")
    }


}

export default Phono;