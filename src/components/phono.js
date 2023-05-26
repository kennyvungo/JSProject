class Phono{
    constructor(){
        this.phono = document.querySelector(".phono")
        this.playphono = document.querySelector(".playpho")
        this.handleClick = this.handleClick.bind(this);
        this.playphono.addEventListener("click",this.handleClick)
    }


    handleClick(){
        this.playAudio();
    }

    playAudio(){
        let audio = new Audio('src/assets/lavieenrose.mp3')
        audio.play();
    }


}

export default Phono;