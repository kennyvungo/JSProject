class Spot{
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        this.app = document.querySelector(".spotapp");
        this.app.addEventListener("click",this.handleClick)
        this.player = document.querySelector(".player");
        this.player.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/midnightcity.mp3')
    }

    handleClick(e){
        if(e.target === this.app){
            let screen = document.querySelector(".screen");
            screen.classList.add("hidden")
            document.querySelector(".loading").classList.remove("hidden")
            setTimeout(this.renderLog,2000);
        }
        else if(e.target === this.player){
            this.audio.play();
        }
    }

    renderLog(){
        document.querySelector(".loading").classList.add("hidden");
        document.querySelector(".player").classList.remove("hidden");

    }

}

export default Spot;