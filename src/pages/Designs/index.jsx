import React, {useState, useEffect} from "react"
import Images from "../../components/Images"

import Book from 'react-page-flip'
const Designs = ()=>{
 
    return(<div id="mybook">  { Images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)}

     <Book>
     <Book.Page>
      <Book.Side><h2>My portfolio</h2>
      <p>Discover some of my work and my inspertion and thought process inside</p></Book.Side>
      <Book.Side><img src={Images[0].src}/></Book.Side>
    </Book.Page>

    <Book.Page>
      <Book.Side><h3>Description/Title</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi asperiores, et voluptatem ipsam eaque esse accusamus tenetur perferendis similique sit praesentium distinctio maxime quas, veritatis saepe rerum unde est.</p></Book.Side>
    
<Book.Side> </Book.Side>
    
    </Book.Page>
    <Book.Page>
      <Book.Side><h3>Description/Title</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi asperiores, et voluptatem ipsam eaque esse accusamus tenetur perferendis similique sit praesentium distinctio maxime quas, veritatis saepe rerum unde est.</p></Book.Side>
      <Book.Side></Book.Side>
    </Book.Page>
     </Book>
    </div>)
}

export default Designs