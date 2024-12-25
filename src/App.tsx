import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CityOfferLanding, Home, CityOfferDetail } from './features';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-offer/:cityId" element={<CityOfferLanding />} />
        <Route
          path="/city-offer-details/:offerId"
          element={<CityOfferDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
