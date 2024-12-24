import { Typography } from '../../../../../components';
import { Carousel } from '../../atoms/Carousel';
import { OfferCard } from '../OfferCard';

const slides = [<OfferCard />, <OfferCard />, <OfferCard />];

export const OfferCarousel = () => {
  return (
    <div className="trending-offer-wrapper">
      <Typography variant="h6-2" customClassName="m-0 trending-offer-title">
        Trending Offer
      </Typography>
      <Carousel slides={slides} arrows={true} arrowBorders={true} />
    </div>
  );
};
