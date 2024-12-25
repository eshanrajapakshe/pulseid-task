import { Button, OffersCard, Typography } from '../../../../../components';
import './styles.scss';

import SpecialOfferImage from '../../../../../assets/images/special-offer-cards.svg';

export const SpecialOffers = () => {
  return (
    <div className="special-offer-wrapper">
      <Typography variant="h6-2" customClassName="m-0 special-offer-title">
        Add card for special offers
      </Typography>

      <OffersCard className="special-offer-card">
        <div className="special-offer-content">
          <Typography variant="h6" customClassName="offer-card-title">
            Get Special Offers
          </Typography>
          <Typography variant="p" customClassName="offer-card-description">
            Many offers waiting for you, get it now
          </Typography>
          <Button
            type="text"
            label="Add a card"
            className="offer-card-button"
          />
        </div>

        <div className="special-offer-image">
          <img src={SpecialOfferImage} />
        </div>
      </OffersCard>
    </div>
  );
};
