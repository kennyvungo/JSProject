import Home from "./components/home";
import Phono from "./components/phono";
import Record from "./components/record";
import Radio from "./components/radio";
import Ipod from "./components/ipod";
import Walkman from "./components/walkman";
import Spot from "./components/spot";


document.addEventListener("DOMContentLoaded",() =>{
    new Home();
    new Phono();
    new Radio();
    new Record();
    new Walkman();
    new Ipod();
    new Spot();
})