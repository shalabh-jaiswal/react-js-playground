import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting/Greeting'
import Songs from './components/Songs/Songs'
import { LikedSongs } from './components/Songs/Songs'
import SongsForm from './components/Songs/SongsForm'

function App() {
  const [count, setCount] = useState(0)
  const likedSongs: LikedSongs[] = [{songName: 'song one', singer:'singer 1'}, {songName: 'song two', singer:'singer 2'}]
  return (
    <>
      {

        
      <div>
      <Greeting message='Jello' color='Blue'/>
      <Songs liked={likedSongs}/>
      
      </div>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
