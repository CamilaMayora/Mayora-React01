import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hola</h1>
    <Button variant="outlined">Primary</Button>
    </>
  )
}

export default App
