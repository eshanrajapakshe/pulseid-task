import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Badge, Typography } from '../../../../../components';
import { CSSProperties } from 'react';
import './styles.scss';

export const InstantDiscounts = () => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const dynamicStyle: CSSProperties & { [key: string]: string } = {
    '--img':
      "url('https://images.unsplash.com/photo-1610907083431-d36d8947c8e2')",
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="instant-discounts-wrapper">
      <div className="instant-discounts-item">
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
      </div>

      <div className="instant-discounts-item">
        <div className="instant-discounts-tile" style={dynamicStyle}>
          <div className="add-favorite">
            <button type="button" onClick={toggleFavorite}>
              {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
            </button>
          </div>

          <div
            className="merchant-info-wrapper"
            onClick={() => alert('d')}
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
      </div>

      <div className="instant-discounts-item">
        <div className="instant-discounts-tile" style={dynamicStyle}>
          <div className="add-favorite">
            <button type="button" onClick={toggleFavorite}>
              {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
            </button>
          </div>

          <div
            className="merchant-info-wrapper"
            onClick={() => alert('d')}
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
      </div>

      <div className="instant-discounts-item">
        <div className="instant-discounts-tile" style={dynamicStyle}>
          <div className="add-favorite">
            <button type="button" onClick={toggleFavorite}>
              {isFavorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
            </button>
          </div>

          <div
            className="merchant-info-wrapper"
            onClick={() => alert('d')}
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
      </div>
    </div>
  );
};
