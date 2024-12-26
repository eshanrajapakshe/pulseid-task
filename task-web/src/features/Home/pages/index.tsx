import { Header, ThemeToggle } from '../../../components';
import { DiscoverCity, SpecialOffers, OfferCarousel } from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <DiscoverCity />
      <OfferCarousel />
      <SpecialOffers />
      <ThemeToggle />
    </>
  );
};

export default Home;
