import { Navigate, Route, Routes } from 'react-router-dom';
import NavHeader from './components/Navigation/NavHeaderNavigation/NavHeader/NavHeader.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.tsx';
import CatalogPageDetails from './pages/CatalogPageDetail/CatalogPageDetails.tsx';
import CatalogNavigation from './components/Navigation/CatalogNavigation/CatalogNavigation.tsx';
import FuturesContent from './components/Catalog/CatalogDetails/CatalogFeaturesReviews/CatalogFeatures/CatalogFeatures.tsx';
import ReviewsContent from './components/Catalog/CatalogDetails/CatalogFeaturesReviews/CatalogReviews/CatalogReviews.tsx';
import BookingForm from './components/Catalog/CatalogDetails/CatalogFeaturesReviews/BookingForm/BookingForm.tsx';


function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route 
          path='/catalog/:id' 
          element={
            <>
              <CatalogPageDetails />
              <CatalogNavigation />
            </>
          }
        >
          <Route index element={<Navigate to="futures" replace />} />
          <Route path="futures" element={
            <>
            <FuturesContent />
             </>} />

            <Route path="reviews" element={
            <><ReviewsContent />
            
         </>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
