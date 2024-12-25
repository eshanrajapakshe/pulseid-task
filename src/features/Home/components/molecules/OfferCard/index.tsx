import { CSSProperties } from 'react';
import { Badge, Button, Typography } from '../../../../../components';
import { IoClose } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import './styles.scss';

import Logo from '../../../../../assets/images/logo.svg';

interface OfferCardProps {
  storeName: string;
  city: string;
  rate: number;
  reviewCount: number;
  storeImage: string;
  onNavigate?: () => void;
  onClose?: () => void;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  storeName,
  city,
  rate,
  reviewCount,
  storeImage,
  onNavigate,
  onClose,
}) => {
  const dynamicStyle: CSSProperties & { [key: string]: string } = {
    '--img': `url('${storeImage}')`,
  };

  return (
    <div className="offer-card" style={dynamicStyle}>
      <div className="offer-card-header">
        <img src={Logo} alt="brand logo" className="logo-img" />
        <Button
          type="icon"
          icon={<IoClose />}
          className="offer-card-close"
          onClick={onClose}
        />
      </div>

      <div className="offer-card-content">
        <Badge type="secondary" text={city} />
        <Typography variant="h6" customClassName="offer-card-title">
          {storeName}
        </Typography>

        <div className="rate-review">
          <Badge type="outline" text={rate.toFixed(1)} icon={<FaRegStar />} />
          <Typography variant="p" customClassName="offer-card-review">
            {reviewCount} reviews
          </Typography>
        </div>

        <div className="see-more">
          <Typography variant="p" customClassName="offer-card-see-more">
            See more
          </Typography>
          <Button
            type="icon"
            icon={<IoIosArrowForward />}
            className="navigate-button"
            onClick={onNavigate}
          />
        </div>
      </div>
    </div>
  );
};
