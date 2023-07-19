let index = 0;
let isOn = false;
let isSelected = false;
class Ipod{
    constructor(){
        this.ipo = document.querySelector(".ipod");
        this.play = document.querySelector(".playipod");
        this.next = document.querySelector(".ipodnext");
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick);
        this.next.addEventListener("click",this.handleClick);
        this.audio = new Audio('src/assets/stronger.mp3');
        this.menu = document.querySelector(".menu");
        this.menu.addEventListener("click",this.handleClick);
        this.isPlaying = false;
        this.inner = document.querySelector(".inner");
        this.inner.addEventListener("click",this.handleClick);
        this.back = document.querySelector(".back");
        this.back.addEventListener("click",this.handleClick);
    }

    handleClick(e){
        switch(e.target){
            case this.play:
                if(isOn){
                    if(isSelected){
                        this.isPlaying ?  this.stopAudio() : this.playAudio() ;
                    }
                    else{
                        alert("Need to select song first by pressing the center circle")
                    }
                }
                else{
                    alert("Need to turn on iPod first by pressing the MENU button");
                }
                break;
            case this.menu:
                if(!isOn){
                    document.querySelector(".apple").classList.remove("hidden")
                    isOn = true;
                    this.int = setInterval(this.slideAlb,2000);
                    setTimeout(this.loadMenu,2000);
                }
                else{
                    alert("iPod is already on")
                }
                break;
            case this.inner:
                if(isOn){
                    if(!isSelected){
                        clearInterval(this.int);
                        document.querySelector(".menupage").classList.add("hidden");
                        document.querySelector(".curplay").classList.remove("hidden");
                        isSelected = true;
                    }
                    else{
                        alert("song is already selected")
                    }
                }
                else{
                    alert("Need to turn on iPod first");
                }
                break;
            case this.next:
                this.ipo.classList.remove("leftright");
                this.ipo.classList.remove("radslidein");
                this.ipo.classList.add("radslideleft");
                document.querySelector(".spotbottom").classList.remove("hidden")
                document.querySelector(".spotbottom").classList.add("fastfade")
                setTimeout(this.hide,2000);
                if(this.isPlaying) this.stopAudio();
                break;
            case this.back:
                this.ipo.classList.remove("radslidein");
                this.ipo.classList.add("radslideright");
                this.ipo.classList.remove("leftright");
                document.querySelector(".boombottom").classList.remove("fadeout")
                document.querySelector(".boombottom").classList.add("fastfade")
                document.querySelector(".boombottom").classList.remove("hidden")
                if(this.isPlaying) this.stopAudio();
                setTimeout(this.backhide,1000);
                break;
        }
    }

    hide(){
        document.querySelector(".ipod").classList.add("hidden");
        document.querySelector(".ipod").classList.remove("radslideleft");
        document.querySelector(".spotplay").classList.add("radslidein");
        document.querySelector(".spotplay").classList.remove("hidden");
        document.querySelector(".spotbottom").classList.remove("fastfade")
    }
    backhide(){
        document.querySelector(".ipod").classList.add("hidden");
        document.querySelector(".ipod").classList.remove("radslideright");
        document.querySelector(".boom").classList.add("leftright");
        document.querySelector(".boom").classList.remove("hidden");
        document.querySelector(".boombottom").classList.remove("fastfade");
        
    }
    playAudio(){
            this.audio.play();
            this.isPlaying = true;
            document.querySelector(".ipodhead").classList.add("fastfade")
            document.querySelector(".ipodhead").classList.remove("kindahidden")
            document.querySelector(".subipod").classList.add("fastfade")
            document.querySelector(".subipod").classList.remove("kindahidden")
            document.querySelector(".ipodtext").classList.add("fade")
            document.querySelector(".ipodtext").classList.remove("kindahidden")
    }
    stopAudio(){
        this.audio.pause();
        this.isPlaying = false;
    }
    loadMenu(){
        document.querySelector(".apple").classList.add("hidden");
        document.querySelector(".iscreen").classList.add("hidden");
        document.querySelector(".menupage").classList.remove("hidden");
    }


    slideAlb(){
        document.querySelector(`.album${CSS.escape(index)}`).classList.add("hidden");
        document.querySelector(`.album${CSS.escape(index)}`).classList.remove("fastfade");
        index ++;
        if(index > 4) index = 0;
        document.querySelector(`.album${CSS.escape(index)}`).classList.remove("hidden");
    }

}

export default Ipod;