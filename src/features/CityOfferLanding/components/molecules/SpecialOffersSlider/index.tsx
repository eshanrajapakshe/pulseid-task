import Slider from 'react-slick';
import { Button, OffersCard, Typography } from '../../../../../components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

import SpecialOfferImage from '../../../../../assets/images/card-image.png';

export const SpecialOffersSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="offer-slider-wrapper">
      <Typography variant="h6-2" customClassName="offer-slider-title">
        Special Offers!
      </Typography>

      <Slider {...settings}>
        {Array.from({ length: 3 }).map((_, index) => (
          <OffersCard className="city-offer-card" key={index}>
            <div className="special-offer-content">
              <div className="offer-provider">
                <img
                  src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                  alt=""
                />
                <Typography variant="p" customClassName="offer-provider-name">
                  SK-II
                </Typography>
              </div>

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
              <img src={SpecialOfferImage} />
            </div>
          </OffersCard>
        ))}
      </Slider>
    </div>
  );
};
