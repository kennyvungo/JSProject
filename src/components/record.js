class Record{
    constructor(){
        this.rec = document.querySelector(".record");
        this.playrec = document.querySelector(".playrec");
        this.handleClick = this.handleClick.bind(this);
        this.playrec.addEventListener("click",this.handleClick);
        this.next = document.querySelector(".recnext");
        this.next.addEventListener("click",this.handleClick)
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
        let audio = new Audio();
        audio.play();
    }

}

export default Record;