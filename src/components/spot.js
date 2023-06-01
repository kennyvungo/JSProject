const aud1 = new Audio('src/assets/midnightcity.mp3');
const aud2 = new Audio('src/assets/stronger.mp3');
const aud3 = new Audio('src/assets/blue.mp3');
const aud4 = new Audio('src/assets/abba.mp3');
const aud5 = new Audio('src/assets/lavieenrose.mp3');
const aud6 = new Audio('src/assets/cross.mp3');
const aud7 = new Audio('src/assets/chopin.mp3');
let lib = [aud1,aud2,aud3,aud4,aud5,aud6,aud7];
let idx = 0;
let isPlaying = false;

class Spot{
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        this.app = document.querySelector(".spotapp");
        this.app.addEventListener("click",this.handleClick);
        this.playlist = document.querySelector(".playlist");
        this.playlist.addEventListener("click",this.handleClick);
        this.next = document.querySelector(".spotfinal");
        this.next.addEventListener("click",this.handleClick);
        document.querySelector(".player0").addEventListener("click",this.playPause);
        document.querySelector(".player1").addEventListener("click",this.playPause);
        document.querySelector(".player2").addEventListener("click",this.playPause);
        document.querySelector(".player3").addEventListener("click",this.playPause);
        document.querySelector(".player4").addEventListener("click",this.playPause);
        document.querySelector(".player5").addEventListener("click",this.playPause);
        document.querySelector(".player6").addEventListener("click",this.playPause);
        document.addEventListener("keydown", (e) =>{
            e = e || window.event;
            if(e.key=== "ArrowLeft"){
                this.prevSong();
            }
            else if(e.key === "ArrowRight"){
                this.nextSong();
            }
        })
    }

    handleClick(e){
        if(e.target === this.app){
            let screen = document.querySelector(".screen");
            screen.classList.add("hidden")
            document.querySelector(".loading").classList.remove("hidden")
            setTimeout(this.renderLog,2000);
        }
        else if(e.target ===this.playlist){
            document.querySelector(".playlist").classList.add("hidden")
            document.querySelector(".player0").classList.remove("hidden")
            lib[idx].play();
            isPlaying = true;
            document.querySelector(".spothead").classList.remove("kindahidden")
            document.querySelector(".spothead").classList.add("fastfade")
            document.querySelector(".subspot").classList.remove("kindahidden")
            document.querySelector(".subspot").classList.add("fastfade")
            document.querySelector(".leftspot").classList.remove("kindahidden")
            document.querySelector(".leftspot").classList.add("fade")
            document.querySelector(".rightspot").classList.remove("kindahidden")
            document.querySelector(".rightspot").classList.add("fade")
        }
        else if(e.target === this.next){
            if(isPlaying) lib[idx].pause();
            document.querySelector(".spotplay").classList.add("fadeout")
            document.querySelector(".rightspot").classList.add("fadeout")
            setTimeout(this.hide,1000)
            document.querySelector(".timeline").classList.remove("hidden");
            setTimeout(this.reveal1,1500)
            setTimeout(this.reveal2,2000)
            setTimeout(this.reveal3,2500)
            setTimeout(this.reveal4,3000)
            setTimeout(this.reveal5,3500)
            setTimeout(this.reveal6,4000)
            setTimeout(this.reveal7,4500)
            setTimeout(this.cleanUp,7000)
        }
    }
    reveal1(){
        document.querySelector(".phonoend").classList.remove("kindahidden")
        document.querySelector(".phonoend").classList.add("fastfade")
    }
    reveal2(){
        document.querySelector(".radend").classList.remove("kindahidden")
        document.querySelector(".radend").classList.add("fastfade")
    }
    reveal3(){
        document.querySelector(".recend").classList.remove("kindahidden")
        document.querySelector(".recend").classList.add("fastfade")
    }
    reveal4(){
        document.querySelector(".walkend").classList.remove("kindahidden")
        document.querySelector(".walkend").classList.add("fastfade")
    }
    reveal5(){
        document.querySelector(".boomend").classList.remove("kindahidden")
        document.querySelector(".boomend").classList.add("fastfade")
    }
    reveal6(){
        document.querySelector(".ipodend").classList.remove("kindahidden")
        document.querySelector(".ipodend").classList.add("fastfade")
    }
    reveal7(){
        document.querySelector(".spotend").classList.remove("kindahidden")
        document.querySelector(".spotend").classList.add("fastfade")
    }
    cleanUp(){
        document.querySelector(".phonoend").classList.remove("fastfade")
        document.querySelector(".recend").classList.remove("fastfade")
        document.querySelector(".walkend").classList.remove("fastfade")
        document.querySelector(".boomend").classList.remove("fastfade")
        document.querySelector(".ipodend").classList.remove("fastfade")
        document.querySelector(".radend").classList.remove("fastfade")
        document.querySelector(".spotend").classList.remove("fastfade")
    }


    hide(){
        document.querySelector(".spotplay").classList.add("hidden")
        document.querySelector(".spotplay").classList.remove("fadeout")
            document.querySelector(".rightspot").classList.remove("fadeout")
    }
    playPause(){
            if(isPlaying) {
                lib[idx].pause()
                isPlaying = false;
            }
            else{
                lib[idx].play();
                isPlaying = true;
            }
    }


    renderLog(){
        document.querySelector(".loading").classList.add("hidden");
        document.querySelector(".playlist").classList.remove("hidden");

    }


    nextSong(){
        lib[idx].pause();
        document.querySelector(`.player${idx}`).classList.add("hidden");
        idx ++;
        if(idx > 6) idx = 0;
        document.querySelector(`.player${idx}`).classList.remove("hidden");
        lib[idx].play();
        isPlaying = true;
    }
    prevSong(){
        lib[idx].pause();
        document.querySelector(`.player${idx}`).classList.add("hidden");
        idx --;
        if(idx<0) idx = 6;
        document.querySelector(`.player${idx}`).classList.remove("hidden");
        lib[idx].play();
        isPlaying = true;
    }


}

export default Spot;