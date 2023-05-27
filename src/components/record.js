class Record{
    constructor(){
        this.rec = document.querySelector(".record");
        this.playrec = document.querySelector(".playrec");
        this.handleClick = this.handleClick.bind(this);
        this.playrec.addEventListener("click",this.handleClick);
        this.next = document.querySelector(".recnext");
        this.next.addEventListener("click",this.handleClick)
        this.audio = new Audio('src/assets/lavieenrose.mp3');
    }

    handleClick(e){
        if(e.target === this.playrec){
            this.playAudio();
            document.querySelector(".rec").classList.add("spin");
        }
        else{
            this.rec.classList.add("fadeout");
            this.rec.classList.add("visually-hidden");
            this.walk = document.querySelector(".walkman")
            this.walk.classList.add("fastfade")
            this.walk.classList.remove("visually-hidden")
        }
    }

    playAudio(){
        this.audio.play();
    }

}

export default Record;