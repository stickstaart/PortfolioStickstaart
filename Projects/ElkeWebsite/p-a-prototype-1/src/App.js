import { useState } from 'react'

function App () {
  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App


const Header = () => {
  const [homescreen, setHomescreen] = useState(true)

  const handleHomescreen = (e) => {
    e.preventDefault()
if (homescreen === false) {
  return
}
    setHomescreen(!homescreen)
  }
  return (
    <div>
      <header className={homescreen ? 'homescreen' : ''}>
        <h1 onClick={handleHomescreen}>Puur Ademwerk</h1>
      </header>
      <nav className={'nav'}>
        <ul>
          <li><a href="#">Nav One</a></li>
          <li><a href="#">Nav Two</a></li>
          <li><a href="#">Nav Threedlydoo</a></li>
          <li><a href="#">Nav Four</a></li>
        </ul>
      </nav>
    </div>

  )
}
