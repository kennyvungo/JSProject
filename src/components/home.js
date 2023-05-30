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
        document.querySelector(".foreword").classList.remove("hidden")
        document.querySelector(".foreword").classList.add("fastfade")
        setTimeout(this.delay,7000);
    }

    delay(){
        document.querySelector(".foreword").classList.add("hidden")
        document.querySelector(".phono").classList.add("fastfade");
        document.querySelector(".phono").classList.remove("hidden");
        document.querySelector(".bottom").classList.remove("hidden")
    }
}





export default Home;