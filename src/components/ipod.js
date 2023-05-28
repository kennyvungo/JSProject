class Ipod{
    constructor(){
        this.ipo = document.querySelector(".ipod");
        this.play = document.querySelector(".playipod");
        this.next = document.querySelector(".ipodnext");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick);
        this.audio = new Audio('src/assets/stronger.mp3')
        this.menu = document.querySelector(".menu")
        this.menu.addEventListener("click",this.handleClick);
        this.isPlaying = false;
    }

    handleClick(e){
        switch(e.target){
            case this.play:
                this.isPlaying ?  this.stopAudio() : this.playAudio() ;
                break;
            case this.menu:
                document.querySelector(".apple").classList.remove("hidden")
                setTimeout(this.loadMenu,2000);
                break;
            case this.next:
                this.ipo.classList.add("fadeout");
                this.ipo.classList.add("hidden");
                let spot =document.querySelector(".spotplay");
                spot.classList.add("fastfade");
                spot.classList.remove("hidden")
                if(this.isPlaying) this.stopAudio();
                break;
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
    }
    loadMenu(){
        document.querySelector(".apple").classList.add("hidden");
        document.querySelector(".iscreen").classList.add("hidden");
        document.querySelector(".menupage").classList.remove("hidden");
    }

}

export default Ipod;