import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import './style.css'
const Home = ()=>{
    return(<div>
        <h1>Home hit</h1>
        <p>Ex elit excepteur amet aliquip ullamco ipsum amet elit proident enim fugiat tempor id. Elit irure magna tempor veniam Lorem irure. Labore tempor elit labore fugiat occaecat ad adipisicing duis non magna dolor commodo sit fugiat.</p>
        <Link to={`/about`}>About me</Link>
        <br></br>
        <Link to={`/designs`}>Designs</Link>

    </div>)
}

export default Home