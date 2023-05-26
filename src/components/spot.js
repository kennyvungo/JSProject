class Spot{
    constructor(){
        this.spot = document.querySelector(".spotify");
        this.play = document.querySelector(".playspot");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick);
        this.next = document.querySelector(".spotnext");
        this.next.addEventListener("click",this.handleClick)
    }

    handleClick(e){
        if(e.target === this.playphono){
            this.playAudio();
        }
        else{
            this.rec.classList.add("hidden");
            document.querySelector(".spotplay").classList.remove("hidden")
        }
    }

    playAudio(){
        let audio = new Audio();
        audio.play();
    }

}

export default Spot;