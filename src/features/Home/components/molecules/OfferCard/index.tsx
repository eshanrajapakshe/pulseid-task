import { CSSProperties } from 'react';
import { Badge, Button, Typography } from '../../../../../components';
import { IoClose } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import './styles.scss';

import Logo from '../../../../../assets/images/logo.svg';

export const OfferCard = () => {
  const dynamicStyle: CSSProperties & { [key: string]: string } = {
    '--img':
      "url('https://images.unsplash.com/photo-1610907083431-d36d8947c8e2')",
  };

  return (
    <div className="offer-card" style={dynamicStyle}>
      <div className="offer-card-header">
        <img src={Logo} alt="brand logo" className="logo-img" />
        <Button type="icon" icon={<IoClose />} className="offer-card-close" />
      </div>

      <div className="offer-card-content">
        <Badge type="secondary" text="Tokyo" />
        <Typography variant="h6" customClassName="offer-card-title">
          Parfaiteria Bel
        </Typography>

        <div className="rate-review">
          <Badge type="outline" text="5.0" icon={<FaRegStar />} />
          <Typography variant="p" customClassName="offer-card-review">
            120 reviews
          </Typography>
        </div>

        <div className="see-more">
          <Typography variant="p" customClassName="offer-card-see-more">
            See more
          </Typography>
          <Button type="icon" icon={<IoIosArrowForward />} className='navigate-button' />
        </div>
      </div>
    </div>
  );
};
