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
            this.rec.classList.add("fadeout");
            this.walk = document.querySelector(".walkman")
            this.walk.classList.add("fastfade")
            this.walk.classList.remove("hidden")
        }
    }

    playAudio(){
        let audio = new Audio();
        audio.play();
    }

}

export default Record;