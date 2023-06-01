
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
        document.querySelector(".timeline").classList.add("fadeout");
        document.querySelector(".corner").classList.add("fadeout");
        switch (e.target){
            case document.querySelector(".phonoend"):
                setTimeout(this.revealPhono.bind(this),1000)
                setTimeout(this.hidePhono.bind(this),3000)
                break;
            case document.querySelector(".radend"):
                    setTimeout(this.revealRad.bind(this),1000)
                    setTimeout(this.hideRad.bind(this),3000)
                    break;
            case document.querySelector(".recend"):
                setTimeout(this.revealRec.bind(this),1000)
                setTimeout(this.hideRec.bind(this),3000)
                break;
            case document.querySelector(".walkend"):
                setTimeout(this.revealWalk.bind(this),1000)
                setTimeout(this.hideWalk.bind(this),3000)
                break;
            case document.querySelector(".boomend"):
                setTimeout(this.revealBoom.bind(this),1000)
                setTimeout(this.hideBoom.bind(this),3000)
                break;
            case document.querySelector(".ipodend"):
                setTimeout(this.revealIpod.bind(this),1000)
                setTimeout(this.hideIpod.bind(this),3000)
                break;
            case document.querySelector(".spotend"):
                setTimeout(this.revealSpot.bind(this),1000)
                setTimeout(this.hideSpot.bind(this),3000)
                break;
        }
        setTimeout(this.reset.bind(this),5000);
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
    revealRad(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".radio").classList.remove("hidden")
        document.querySelector(".radio").classList.add("fastfade")
        document.querySelector(".radbottom").classList.remove("hidden")
        document.querySelector(".radbottom").classList.add("fastfade")

    }
    hideRad(){
        document.querySelector(".radio").classList.remove("fastfade")
        document.querySelector(".radbottom").classList.remove("fastfade")
    }
    revealRec(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".record").classList.remove("hidden")
        document.querySelector(".record").classList.add("fastfade")
        document.querySelector(".recbottom").classList.remove("hidden")
        document.querySelector(".recbottom").classList.add("fastfade")

    }
    hideRec(){
        document.querySelector(".record").classList.remove("fastfade")
        document.querySelector(".bottom").classList.remove("fastfade")
    }
    revealWalk(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".walkman").classList.remove("hidden")
        document.querySelector(".walkman").classList.add("fastfade")
        document.querySelector(".walkbottom").classList.remove("hidden")
        document.querySelector(".walkbottom").classList.add("fastfade")

    }
    hideWalk(){
        document.querySelector(".walkman").classList.remove("fastfade")
        document.querySelector(".walkbottom").classList.remove("fastfade")
    }
    revealBoom(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".boom").classList.remove("hidden")
        document.querySelector(".boom").classList.add("fastfade")
        document.querySelector(".boombottom").classList.remove("hidden")
        document.querySelector(".boombottom").classList.add("fastfade")

    }
    hideBoom(){
        document.querySelector(".boom").classList.remove("fastfade")
        document.querySelector(".boombottom").classList.remove("fastfade")
    }
    revealIpod(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".ipod").classList.remove("hidden")
        document.querySelector(".ipod").classList.add("fastfade")

    }
    hideIpod(){
        document.querySelector(".ipod").classList.remove("fastfade")
    }
    revealSpot(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".timeline").classList.add("hidden")
        document.querySelector(".spotplay").classList.remove("hidden")
        document.querySelector(".spotplay").classList.add("fastfade")
        document.querySelector(".spotbottom").classList.remove("hidden")
        document.querySelector(".spotbottom").classList.add("fastfade")
    }
    hideSpot(){
        document.querySelector(".spotplay").classList.remove("fastfade")
    }
    reset(){
        document.querySelector(".timeline").classList.remove("fadeout")
        document.querySelector(".corner").classList.add("hidden");
        document.querySelector(".corner").classList.remove("fadeout");
        let all = document.querySelectorAll('.time');
        all.forEach( e =>{
            e.classList.add("kindahidden");

        })
    }
}

export default Timeline;