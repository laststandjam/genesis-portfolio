import React, {useState, useEffect} from "react"
import Selfie from "../../imgs/full_shot.png"
const About = ()=>{
    return(<div>
        <h1>About me hit</h1>
        <img  src={Selfie }alt="Pic of me" width="300" height="300"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta repudiandae et possimus tempora atque blanditiis consequatur illum. Tenetur eligendi eos qui reiciendis rerum ullam magni vero fugit totam natus.</p>
    </div>)
}

export default About