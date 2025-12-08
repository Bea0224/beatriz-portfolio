import { useState } from 'react';
import './App.css'
import {LoadingScreen} from "./components/LoadingScreem";
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)} />}{" "}
        <div className='min-h-screen transition-opacity'>

        </div>
    </>
  )
}

export default App
