class Ipod{
    constructor(){
        this.ipo = document.querySelector(".ipod");
        this.play = document.querySelector(".playipod");
        this.next = document.querySelector(".ipodnext");
        this.handleClick = this.handleClick.bind(this);
        // this.audio = new Audio()
        this.playing = false;
    }

    handleClick(e){
        if(e.target === this.play){
            this.playAudio(this.playing);
        }
        else{
            this.ipo.classList.add("hidden");
            document.querySelector(".spot").classList.remove("hidden")
        }
    }

    playAudio(playing){
        if (!playing){
            this.audio.play();
            this.playing = true;
        }
    }

}

export default Ipod;