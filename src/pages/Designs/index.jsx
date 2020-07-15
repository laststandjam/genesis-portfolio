import React, {useState, useEffect} from "react"
import Images from "../../components/Images"

import Book from 'react-page-flip'


let images = Images
const Designs = ()=>{
  let denim = images.filter(function(images) {
    return images.group == "genderless_denim"
  
  })
  ;
  console.log(images)
  console.log(denim)
    return(<div id="mybook">  { denim.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} width="500" length="500" />)}

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