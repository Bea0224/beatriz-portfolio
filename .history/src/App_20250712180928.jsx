import { useState } from 'react';
import './App.css'
import "./index.css"
import {LoadingScreen} from "./components/LoadingScreem";

function App() {
  const [isk] = useState(false)
  return (
    <>
      <LoadingScreen />
    </>
  )
}

export default App
