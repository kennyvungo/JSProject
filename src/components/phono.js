class Phono{
    constructor(){
        this.phono = document.querySelector(".phono");
        this.playphono = document.querySelector(".playpho");
        this.handleClick = this.handleClick.bind(this);
        this.playphono.addEventListener("click",this.handleClick);
        this.next = document.querySelector(".phonext");
        this.next.addEventListener("click",this.handleClick);
    }


    handleClick(e){
        if(e.target === this.playphono){
            this.playAudio();
        }
        else{
            this.phono.classList.add("hidden");
            document.querySelector(".radio").classList.remove("hidden")
        }
    }

    playAudio(){
        let audio = new Audio('src/assets/lavieenrose.mp3')
        audio.play();
    }


}

export default Phono;