import { useNavigate } from 'react-router-dom';
import {
  Button,
  CircularImageFrame,
  Typography,
} from '../../../../../components';
import { RootState } from '../../../../../redux/store';
import { useSelector } from 'react-redux';
import './styles.scss';

export const DiscoverCity = () => {
  const navigate = useNavigate();

  const { cities } = useSelector((state: RootState) => state.discover);

  return (
    <div className="discover-city-wrapper">
      <div className="discover-city-header">
        <Typography variant="h6-2" customClassName="discover-city-title">
          Discover you city!
        </Typography>

        <Button type="link" label="View All" className="view-all-btn" />
      </div>

      <div className="discover-city-carousel">
        {cities.map((city) => (
          <CircularImageFrame
            key={city.id}
            frameSize="medium"
            imageScource={city.imageUrl}
            frameText={city.cityName}
            onClick={() => navigate(`/city-offer/${city.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
