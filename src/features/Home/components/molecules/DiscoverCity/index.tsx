import { useNavigate } from 'react-router-dom';
import {
  Button,
  CircularImageFrame,
  Typography,
} from '../../../../../components';
import './styles.scss';

export const DiscoverCity = () => {
  const navigate = useNavigate();

  return (
    <div className="discover-city-wrapper">
      <div className="discover-city-header">
        <Typography variant="h6-2" customClassName="discover-city-title">
          Discover you city!
        </Typography>

        <Button type="link" label="View All" className="view-all-btn" />
      </div>

      <div className="discover-city-carousel">
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
          onClick={() => navigate('/city-offer')}
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />

        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
        <CircularImageFrame
          frameSize="medium"
          imageScource="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          frameText="New York"
        />
      </div>
    </div>
  );
};
