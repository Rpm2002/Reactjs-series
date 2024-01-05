import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement=(
  <a href="http://google.com" target='_blank'>Click to visit GOOGLE</a>
)
  
const anotheruser='chai aur react'

const ReactElement=React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},
  'Click me to visit google ',
  anotheruser // ye vealuated expressoin hai
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    ReactElement
    // <App/>
)
