class Ipod{
    constructor(){
        this.ipo = document.querySelector(".ipod");
        this.play = document.querySelector(".playipod");
        this.next = document.querySelector(".ipodnext");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick);
        this.audio = new Audio('src/assets/stronger.mp3');
        this.menu = document.querySelector(".menu");
        this.menu.addEventListener("click",this.handleClick);
        this.isPlaying = false;
        this.inner = document.querySelector(".inner");
        this.inner.addEventListener("click",this.handleClick);
        this.back = document.querySelector(".back");
        this.back.addEventListener("click",this.handleClick);
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
            case this.inner:
                document.querySelector(".menupage").classList.add("hidden");
                document.querySelector(".curplay").classList.remove("hidden");
                break;
            case this.next:
                this.ipo.classList.add("fadeout");
                this.ipo.classList.add("hidden");
                let spot = document.querySelector(".spotplay");
                spot.classList.add("fastfade");
                spot.classList.remove("hidden")
                if(this.isPlaying) this.stopAudio();
                break;
            case this.back:
                this.ipo.classList.add("hidden");
                document.querySelector(".boom").classList.remove("hidden");
                document.querySelector(".boom").classList.remove("fadeout");
                document.querySelector(".boom").classList.add("fastfade")
                document.querySelector(".boombottom").classList.remove("hidden")
                if(this.isPlaying) this.stopAudio();
                break;
        }
    }

    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            document.querySelector(".ipodhead").classList.add("fastfade")
            document.querySelector(".ipodhead").classList.remove("kindahidden")
            document.querySelector(".subipod").classList.add("fastfade")
            document.querySelector(".subipod").classList.remove("kindahidden")
            document.querySelector(".ipodtext").classList.add("fade")
            document.querySelector(".ipodtext").classList.remove("kindahidden")
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