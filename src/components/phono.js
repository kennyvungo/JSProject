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
            document.querySelector(".notes").classList.remove("kindahidden")
        }
        else{
            this.phono.classList.add("slideleft");
            // this.phono.classList.add("hidden");
            setTimeout(this.hide,700)
            this.rad.classList.add("fastfade");
            this.rad.classList.remove("hidden");
            if(this.isPlaying) this.stopAudio();
            document.querySelector(".bottom").classList.add("hidden")
            document.querySelector(".radbottom").classList.remove("hidden")
        }
    }
    hide(){
        document.querySelector(".phono").classList.add("hidden");
        document.querySelector(".phono").classList.remove("slideleft");
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            this.playphono.innerText = "▐▐";
            this.playphono.classList.add("pause")
            // document.querySelector(".pholeft").classList.remove("kindahidden")
            // document.querySelector(".pholeft").classList.add("fade")
            document.querySelector(".heading").classList.add("fastfade")
            document.querySelector(".heading").classList.remove("kindahidden")
            document.querySelector(".subheading").classList.add("fastfade")
            document.querySelector(".subheading").classList.remove("kindahidden")
            document.querySelector(".phoright").classList.add("fade")
            document.querySelector(".phoright").classList.remove("kindahidden")

            
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
        this.playphono.innerText = "▶";
        this.playphono.classList.remove("pause")
        document.querySelector(".notes").classList.add("kindahidden")
    }


}

export default Phono;