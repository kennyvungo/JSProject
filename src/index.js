import Home from "./components/home";
import Phono from "./components/phono";
document.addEventListener("DOMContentLoaded",() =>{

    const rootEl = document.querySelector("root")
    new Home();
    new Phono();
})