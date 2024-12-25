import { Header } from '../../../../components';
import { DiscoverCity, SpecialOffers } from '../molecules';
import { OfferCarousel } from '../molecules/OfferCarousel';
import { useGetOffersQuery } from '../../../../redux/api/offerApi';

export const Home = () => {
  const { data, error, isLoading } = useGetOffersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {JSON.stringify(error)}</div>;

  console.log(data);

  return (
    <>
      <Header />
      <DiscoverCity />
      <OfferCarousel />
      <SpecialOffers />
    </>
  );
};
