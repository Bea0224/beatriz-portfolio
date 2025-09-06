import { useState } from 'react';
import './App.css'
import "./index.css"
import {LoadingScreen} from "./components/LoadingScreem";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {<LoadingScreen />}
    </>
  )
}

export default App
