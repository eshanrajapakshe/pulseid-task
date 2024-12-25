import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Badge, Tooltip, Typography } from '../../../../../components';
import { CSSProperties } from 'react';
import { IOffer } from '../../../../../types/offers';
import { truncateText } from '../../../../../utils/helpers';
import './styles.scss';

import FallbackImage from '../../../../../assets/images/fallback-image.png';

interface IProps {
  offersData: IOffer[];
}

export const InstantDiscounts = ({ offersData }: IProps) => {
  const navigate = useNavigate();

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  return (
    <div className="instant-discounts-wrapper">
      {offersData.map((offer) => (
        <div className="instant-discounts-item" key={offer.id}>
          <div
            className="instant-discounts-tile"
            style={
              {
                '--img': `url(${offer.images[0] || FallbackImage})`,
              } as CSSProperties & {
                [key: string]: string;
              }
            }
          >
            <div className="add-favorite">
              <button type="button" onClick={() => toggleFavorite(offer.id)}>
                {favoriteIds.includes(offer.id) ? (
                  <AiFillHeart color="red" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </div>

            <div
              className="merchant-info-wrapper"
              onClick={() => navigate(`/city-offer-details/${offer.id}`)}
              role="button"
            >
              <div className="merchant-info">
                <img src={offer.merchant.image} alt="" />
                <Typography variant="p" customClassName="m-0 merchant-name">
                  {offer.merchant.name}
                </Typography>
              </div>
            </div>
          </div>

          <Tooltip content={offer.description}>
            <div className="discount-description">
              {parse(truncateText(offer.description, 40))}
            </div>
          </Tooltip>

          <div className="product-types">
            <Badge type="primary" text={offer.merchant?.category?.name} />
          </div>

          {/* For multiple categories, we can use the following code snippet: */}
          {/* <div className="product-types">
            {offer.tags.map((tag) => (
              <Badge key={tag} type="secondary" text={tag} />
            ))}
          </div> */}
        </div>
      ))}

      {/* <div className="instant-discounts-item">
        <div className="instant-discounts-tile" style={dynamicStyle}>
          <div className="add-favorite">
            <button type="button" onClick={toggleFavorite}>
              {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
            </button>
          </div>

          <div
            className="merchant-info-wrapper"
            onClick={() => navigate('/city-offer-details/1')}
            role="button"
          >
            <div className="merchant-info">
              <img
                src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                alt=""
              />
              <Typography variant="p" customClassName="m-0 merchant-name">
                Explore Tokyo’s best category
              </Typography>
            </div>
          </div>
        </div>

        <Typography variant="p" customClassName="discount-description">
          Get Instant discounts with card
        </Typography>

        <div className="product-types">
          <Badge type="secondary" text="Dessert" />
          <Badge type="primary" text="Exclusive" />
        </div>
      </div> */}
    </div>
  );
};
