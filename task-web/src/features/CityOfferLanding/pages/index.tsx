import { CSSProperties } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ThemeToggle, Typography } from '../../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IoIosArrowBack } from 'react-icons/io';
import { ExploreCityCategory, SpecialOffersSlider } from '../components/molecules';
import './styles.scss';

const CityOfferLanding = () => {
  const navigate = useNavigate();
  const { cityId } = useParams<{ cityId: string }>();

  const cityData = useSelector((state: RootState) =>
    state.discover.cities.find((city) => city.id === Number(cityId)),
  );

  if (!cityData) {
    return (
      <div className="city-offer-landing-page">
        <Typography variant="h6-2" customClassName="city-not-found">
          City not found
        </Typography>
        <Button
          type="link"
          label="Go Back"
          onClick={() => navigate('/')}
          className="back-button"
        />
      </div>
    );
  }

  return (
    <div className="city-offer-landing-page">
      <div
        className="city-offer-hero"
        style={
          { '--img': `url('${cityData.imageUrl}')` } as CSSProperties & {
            [key: string]: string;
          }
        }
      >
        <Button
          type="icon"
          icon={<IoIosArrowBack />}
          className="navigate-button"
          onClick={() => navigate('/')}
        />
        <Typography variant="h6-2" customClassName="m-0 city-offer-title">
          {cityData.cityName}
        </Typography>
      </div>

      <div className="city-offer-content">
        <div className="handler">
          <button type="button" />
        </div>

        <SpecialOffersSlider />
        <ExploreCityCategory />
      </div>

      <ThemeToggle />
    </div>
  );
};

export default CityOfferLanding;