import Slider from 'react-slick';
import { Button, OffersCard, Typography } from '../../../../../components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

export const SpecialOffersSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="offer-slider-wrapper">
      <Typography variant="h6-2" customClassName="offer-slider-title">
        Special Offers!
      </Typography>

      <Slider {...settings}>
        <OffersCard className="special-offer-card city-offer-card">
          <div className="offer-provider">
            <img
              src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
              alt=""
            />
            <Typography variant="p" customClassName="offer-provider-name">
              SK-II
            </Typography>
          </div>

          <div className="special-offer-content">
            <Typography variant="p" customClassName="offer-card-description">
              Get Special Offer
            </Typography>
            <Typography variant="h6" customClassName="offer-card-title">
              Up to 9% discount
            </Typography>
            <Button
              type="text"
              label="View More"
              className="offer-card-button"
            />
          </div>

          <div className="special-offer-image">
            {/* <img src={SpecialOfferImage} /> */}
          </div>
        </OffersCard>
        <OffersCard className="special-offer-card city-offer-card">
          <div className="offer-provider">
            <img
              src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
              alt=""
            />
            <Typography variant="p" customClassName="offer-provider-name">
              SK-II
            </Typography>
          </div>

          <div className="special-offer-content">
            <Typography variant="p" customClassName="offer-card-description">
              Get Special Offer
            </Typography>
            <Typography variant="h6" customClassName="offer-card-title">
              Up to 9% discount
            </Typography>
            <Button
              type="text"
              label="View More"
              className="offer-card-button"
            />
          </div>

          <div className="special-offer-image">
            {/* <img src={SpecialOfferImage} /> */}
          </div>
        </OffersCard>
        <OffersCard className="special-offer-card city-offer-card">
          <div className="offer-provider">
            <img
              src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
              alt=""
            />
            <Typography variant="p" customClassName="offer-provider-name">
              SK-II
            </Typography>
          </div>

          <div className="special-offer-content">
            <Typography variant="p" customClassName="offer-card-description">
              Get Special Offer
            </Typography>
            <Typography variant="h6" customClassName="offer-card-title">
              Up to 9% discount
            </Typography>
            <Button
              type="text"
              label="View More"
              className="offer-card-button"
            />
          </div>

          <div className="special-offer-image">
            {/* <img src={SpecialOfferImage} /> */}
          </div>
        </OffersCard>
      </Slider>
    </div>
  );
};
