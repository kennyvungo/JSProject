class Radio{
    constructor(){
        this.playrad = document.querySelector(".playrad");
        this.handleClick = this.handleClick.bind(this);
        this.playrad.addEventListener("click",this.handleClick)
    }

    handleClick(){
        this.playAudio();
    }

    playAudio(){
        let audio = new Audio()
        audio.play();
    }


}