class Record{
    constructor(){



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

    }

}

export default Record;