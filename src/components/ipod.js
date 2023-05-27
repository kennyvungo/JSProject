class Ipod{
    constructor(){
        this.ipo = document.querySelector(".ipod");
        this.play = document.querySelector(".playipod");
        this.next = document.querySelector(".ipodnext");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick);
        this.audio = new Audio('src/assets/stronger.mp3')
        this.playing = false;
    }

    handleClick(e){
        if(e.target === this.play){
            this.playAudio(this.playing);
        }
        else{
            this.ipo.classList.add("fadeout");
            this.ipo.classList.add("hidden");
            let spot =document.querySelector(".spotplay");
            spot.classList.add("fastfade");
            spot.classList.remove("hidden")
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