import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from './components';
import './App.scss';

const Home = lazy(() => import('./features/Home/pages'));
const CityOfferLanding = lazy(
  () => import('./features/CityOfferLanding/pages'),
);
const CityOfferDetail = lazy(
  () => import('./features/CityOfferDetailLanding/pages'),
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city-offer/:cityId" element={<CityOfferLanding />} />
          <Route
            path="/city-offer-details/:offerId"
            element={<CityOfferDetail />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
