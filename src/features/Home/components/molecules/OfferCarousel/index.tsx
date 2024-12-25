import { useSelector } from 'react-redux';
import { Typography } from '../../../../../components';
import { Carousel } from '../../atoms/Carousel';
import { OfferCard } from '../OfferCard';
import { RootState } from '../../../../../redux/store';

export const OfferCarousel = () => {
  const { stores } = useSelector((state: RootState) => state.discover);

  const slides = stores.map((store) => (
    <OfferCard
      key={store.id}
      storeName={store.storeName}
      city={store.city}
      rate={store.rate}
      reviewCount={store.reviewCount}
      storeImage={store.storeImage}
    />
  ));

  return (
    <div className="trending-offer-wrapper">
      <Typography variant="h6-2" customClassName="m-0 trending-offer-title">
        Trending Offer
      </Typography>

      <Carousel slides={slides} arrows={true} arrowBorders={true} />
    </div>
  );
};
