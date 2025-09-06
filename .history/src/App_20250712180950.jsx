import { useState } from 'react';
import './App.css'
import "./index.css"
import {LoadingScreen} from "./components/LoadingScreem";

function App() {
  const [isLoaded, set] = useState(false)

  return (
    <>
      <LoadingScreen />
    </>
  )
}

export default App
