class Spot{
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        this.app = document.querySelector(".spotapp");
        this.app.addEventListener("click",this.handleClick)
    }

    handleClick(e){
        if(e.target === this.app){
            let screen = document.querySelector(".screen");
            screen.classList.add("visually-hidden")
            document.querySelector(".loading").classList.remove("visually-hidden")
            setTimeout(this.renderLog,2000);
        }
    }

    renderLog(){
        document.querySelector(".loading").classList.add("visually-hidden");
        document.querySelector(".login").classList.remove("visually-hidden");

    }

}

export default Spot;