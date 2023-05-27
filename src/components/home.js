class Home{
    constructor(){
        this.handleClick = this.handleClick.bind(this);
        const play = document.querySelector(".play")
        play.addEventListener("click",this.handleClick)
        this.home = document.querySelector(".home")
        this.phono = document.querySelector(".phono")
    }

    handleClick(){
        this.home.classList.add("fadeout", "hidden");
        this.phono.classList.add("fastfade");
        this.phono.classList.remove("hidden");
    }

}



export default Home;