import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <h1>Hi here is server</h1>
  )
}

const newElement = (
  <a href='https://www.google.com' target='_blank'>visit google</a>

)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Please visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
