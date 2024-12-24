import { Header } from '../../../../components';
import { DiscoverCity, SpecialOffers } from '../molecules';
import { OfferCarousel } from '../molecules/OfferCarousel';

export const Home = () => {
  return (
    <>
      <Header />
      <DiscoverCity />
      <OfferCarousel />
      <SpecialOffers />
    </>
  );
};
