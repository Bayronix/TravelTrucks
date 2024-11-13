
import { Route, Routes } from 'react-router-dom'
import NavHeader from './components/Navigation/NavHeaderNavigation/NavHeader/NavHeader.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.tsx'
import CatalogPageDetails from './pages/CatalogPageDetail/CatalogPageDetails.tsx'



function App() {

  return (
    <>
    <NavHeader/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={< CatalogPage/>}/>
        <Route path="/catalog/:id" element={<CatalogPageDetails />} />
    </Routes>
    </>
   )
}

export default App
