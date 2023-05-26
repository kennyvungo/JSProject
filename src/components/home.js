class Home{
    constructor(){
        this.home = document.querySelector(".home")
        this.play = document.querySelector(".play")
        this.handleClick = this.handleClick.bind(this);
        this.play.addEventListener("click",this.handleClick)
    }

    handleClick(){
        this.home.classList.add("fadeout");
        // this.home.classList.add("hidden");
        this.phono = document.querySelector(".phono")
        this.phono.classList.add("fastfade")
        this.phono.classList.remove("hidden");
    }

}



export default Home;