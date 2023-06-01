
const rad = document.querySelector(".radend")
const rec = document.querySelector(".recend")
const walk = document.querySelector(".walkend")
const boom = document.querySelector(".boomend")
const ipod = document.querySelector(".ipodend")
const spot = document.querySelector(".spotend")

class Timeline{
    constructor(){
        this.phono = document.querySelector(".phonoend");
        let time = document.querySelectorAll('.time');
        time.forEach((i) => {
            i.addEventListener('click',this.handleClick)
        })
    }
    
    revealPhono(){
        console.log("kenny")
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".phono").classList.remove("hidden")
        document.querySelector(".phono").classList.add("fastfade")
    }

    handleClick(e){
        
          if(e.target === document.querySelector(".phonoend")){
            console.log(this.revealPhono);
            document.querySelector(".timeline").classList.add("fadeout")
          }
        }


}

export default Timeline;