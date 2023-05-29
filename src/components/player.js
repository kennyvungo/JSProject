class Player{
    constructor(){
        this.songs = [];
        this.compSongs();
        this.index = 0;
        this.back = document.querySelector(".backpho")
        this.play = document.querySelector(".playpho")
        this.next = document.querySelector(".phonext")
        this.back.addEventListener("click",this.backClick)
        this.play.addEventListener("click",this.playClick)
        this.next.addEventListener("click",this.nextClick)
        this.isPlaying
    }
    compSongs(){
        this.songs.push(new Audio('src/assets/chopin.mp3'))
        this.songs.push(new Audio('src/assets/country.mp3'))
        this.songs.push(new Audio('src/assets/lavieenrose.mp3'))
        this.songs.push(new Audio('src/assets/abba.mp3'))
        this.songs.push(new Audio('src/assets/blue.mp3'))
        this.songs.push(new Audio('src/assets/stronger.mp3'))
        this.songs.push(new Audio('src/assets/midnightcity.mp3'))
    }

    backClick(e){
        



    }
    playClick(e){
        this.songs[this.index].play();



    }
    nextClick(){

    }


    phono(){

    }





}

export default Player;