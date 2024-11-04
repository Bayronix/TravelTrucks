import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavHeader from './components/Navigation/NavHeader/NavHeader.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavHeader/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
   )
}

export default App
