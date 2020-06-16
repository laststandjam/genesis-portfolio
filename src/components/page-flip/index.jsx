import React from 'react'
import ReactDOM from 'react-dom'
import Book from 'react-page-flip'

const PageFlip=()=>ReactDOM.render(
  <Book>
    <Book.Page>
      <Book.Side>Front page</Book.Side>
      <Book.Side>Back page</Book.Side>
    </Book.Page>

    <Book.Page>
      <Book.Side>Another front page</Book.Side>
      <Book.Side>And the back page</Book.Side>
    </Book.Page>
  </Book>,
  document.querySelector('#app')
)

export default PageFlip