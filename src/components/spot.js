const aud1 = new Audio('src/assets/midnightcity.mp3');
const aud2 = new Audio('src/assets/stronger.mp3');
const aud3 = new Audio('src/assets/blue.mp3');
const aud4 = new Audio('src/assets/abba.mp3');
const aud5 = new Audio('src/assets/lavieenrose.mp3');
const aud6 = new Audio('src/assets/cross.mp3');
const aud7 = new Audio('src/assets/chopin.mp3');
let lib = [aud1,aud2,aud3,aud4,aud5,aud6,aud7];
let idx = 0;

class Spot{
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        this.app = document.querySelector(".spotapp");
        this.app.addEventListener("click",this.handleClick)
        this.player = document.querySelector(".player0");
        this.player.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/midnightcity.mp3')
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
        else if(e.target === this.player){
            lib[idx].play();
            document.querySelector(".spothead").classList.remove("kindahidden")
            document.querySelector(".spothead").classList.add("fastfade")
            document.querySelector(".subspot").classList.remove("kindahidden")
            document.querySelector(".subspot").classList.add("fastfade")
            document.querySelector(".leftspot").classList.remove("kindahidden")
            document.querySelector(".leftspot").classList.add("fade")
            document.querySelector(".rightspot").classList.remove("kindahidden")
            document.querySelector(".rightspot").classList.add("fade")
        }
    }

    renderLog(){
        document.querySelector(".loading").classList.add("hidden");
        document.querySelector(".player0").classList.remove("hidden");

    }


    nextSong(){
        lib[idx].pause();
        document.querySelector(`.player${idx}`).classList.add("hidden");
        idx ++;
        if(idx > 6) idx = 0;
        document.querySelector(`.player${idx}`).classList.remove("hidden");
        lib[idx].play();
    }
    prevSong(){
        lib[idx].pause();
        document.querySelector(`.player${idx}`).classList.add("hidden");
        idx --;
        if(idx<0) idx = 6;
        document.querySelector(`.player${idx}`).classList.remove("hidden");
        lib[idx].play();
    }


}

export default Spot;