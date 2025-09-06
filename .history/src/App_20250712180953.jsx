import { useState } from 'react';
import './App.css'
import "./index.css"
import {LoadingScreen} from "./components/LoadingScreem";

function App() {
  const [isLoaded, setIs] = useState(false)

  return (
    <>
      <LoadingScreen />
    </>
  )
}

export default App
