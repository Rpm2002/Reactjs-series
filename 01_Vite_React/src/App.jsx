import Chai from "./Chai"

function App() {

  const username='Chai aur code'
  return (
    // 1 hi element return kar sakte hai isliye <> </> k andar sab wrap kar diya taaki wo pura 1 hi count hoga
    // {username} ye 1 expression hai yaha puri JS nhi likhte bas jo JS ka final outccome jo
    // evaluate ho chuka hai wo likhte hai
    <> 
      <Chai/>
      <h1>Waah bete mauj {username} kardi</h1> 
    </>
  )
}

export default App
