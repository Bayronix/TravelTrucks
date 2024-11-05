
import { Route, Routes } from 'react-router-dom'
import NavHeader from './components/Navigation/NavHeader/NavHeader.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import CampersList from './components/Catalog/CatalogList/CatalogList.tsx'
import CamperDetail from './components/Catalog/CatalogDetails/Details/Details.tsx'



function App() {

  return (
    <>
    <NavHeader/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CampersList/>}/>
        <Route path="/campers/:id" element={<CamperDetail />} />
    </Routes>
    </>
   )
}

export default App
