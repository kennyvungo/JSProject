class Radio{
    constructor(){
        this.rad = document.querySelector(".radio")
        this.playrad = document.querySelector(".playrad");
        this.handleClick = this.handleClick.bind(this);
        this.playrad.addEventListener("click",this.handleClick)
        this.next = document.querySelector(".radnext");
        this.next.addEventListener("click",this.handleClick)
    }

    handleClick(e){ 
        if(e.target === this.playrad){
            this.playAudio();
        }
        else{
            this.rad.classList.add("hidden")
            document.querySelector(".record").classList.remove("hidden")
        }
    }

    playAudio(){
        let audio = new Audio();
        audio.play();
    }


}

export default Radio;