import Home from "./components/home";
import Phono from "./components/phono";
import Record from "./components/record";
import Radio from "./components/radio";
import Ipod from "./components/ipod";


document.addEventListener("DOMContentLoaded",() =>{

    const rootEl = document.querySelector("root")
    new Home();
    new Phono();
    new Radio();
    new Record();
    new Ipod();
})