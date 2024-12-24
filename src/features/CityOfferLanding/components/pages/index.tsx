import { Button, Typography } from '../../../../components';
import { IoIosArrowBack } from 'react-icons/io';
import { ExploreCityCategory, SpecialOffersSlider } from '../molecules';

import './styles.scss';
import { useNavigate } from 'react-router-dom';

export const CityOfferLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="city-offer-landing-page">
      <div
        className="city-offer-hero"
        style={{
          backgroundImage:
            'url(https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg)',
        }}
      >
        <Button
          type="icon"
          icon={<IoIosArrowBack />}
          className="navigate-button"
          onClick={() => navigate('/')}
        />
        <Typography variant="h6-2" customClassName="m-0 city-offer-title">
          Tokyo
        </Typography>
      </div>

      <div className="city-offer-content">
        <div className="handler">
          <button type="button" />
        </div>

        <SpecialOffersSlider />
        <ExploreCityCategory />
      </div>
    </div>
  );
};
