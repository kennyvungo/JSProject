
const rad = document.querySelector(".radend")
const rec = document.querySelector(".recend")
const walk = document.querySelector(".walkend")
const boom = document.querySelector(".boomend")
const ipod = document.querySelector(".ipodend")
const spot = document.querySelector(".spotend")

class Timeline{
    constructor(){
        this.phono = document.querySelector(".phonoend");
        this.handleClick = this.handleClick.bind(this);
        let time = document.querySelectorAll('.time');
        time.forEach((i) => {
            i.addEventListener('click',this.handleClick)
        })
    }
    

    handleClick(e){
        
        if(e.target === document.querySelector(".phonoend")){
            document.querySelector(".timeline").classList.add("fadeout")
            setTimeout(this.revealPhono.bind(this),1000)
            setTimeout(this.hidePhono.bind(this),3000)
        }
        }
    revealPhono(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".phono").classList.remove("hidden")
        document.querySelector(".phono").classList.add("fastfade")
        document.querySelector(".bottom").classList.remove("hidden")
        document.querySelector(".bottom").classList.add("fastfade")

    }
    hidePhono(){
        document.querySelector(".phono").classList.remove("fastfade")
        document.querySelector(".bottom").classList.remove("fastfade")
    }
}

export default Timeline;