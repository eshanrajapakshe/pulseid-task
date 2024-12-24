import { CSSProperties, useState } from 'react';
import { Button, Typography } from '../../../../../components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useSwipeable } from 'react-swipeable';
import './styles.scss';

const images = [
  'https://picsum.photos/200/300?random=1',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=3',
  'https://picsum.photos/200/300?random=4',
  'https://picsum.photos/200/300?random=5',
  'https://picsum.photos/200/300?random=6',
  'https://picsum.photos/200/300?random=7',
  'https://picsum.photos/200/300?random=8',
  'https://picsum.photos/200/300?random=9',
  'https://picsum.photos/200/300?random=10',
];

export const CityOfferDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleImageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { clientX, currentTarget } = event;
    const middle = currentTarget.getBoundingClientRect().width / 2;
    if (clientX < middle) {
      handlePrevious();
    } else {
      handleNext();
    }
  };

  const getVisibleThumbnails = () => {
    let start, end;

    if (currentIndex < 3) {
      start = 0;
      end = 5;
    } else if (currentIndex > images.length - 3) {
      start = images.length - 5;
      end = images.length;
    } else {
      start = currentIndex - 2;
      end = currentIndex + 3;
    }

    return {
      thumbnails: images.slice(start, end),
      startIndex: start,
    };
  };

  const { thumbnails, startIndex } = getVisibleThumbnails();

  const dynamicStyle: CSSProperties & { [key: string]: string } = {
    '--img': `url(${images[currentIndex]})`,
  };

  return (
    <div
      className="story-view-container"
      style={dynamicStyle}
      {...swipeHandlers}
      onClick={handleImageClick}
    >
      <div className="story-header">
        <Button
          type="icon"
          icon={<IoIosArrowBack />}
          className="navigate-button"
          onClick={handlePrevious}
        />

        <Typography variant="h6-2" customClassName="story-title">
          Dessert
        </Typography>

        <Button
          onClick={toggleFavorite}
          type="icon"
          icon={
            isFavorite ? (
              <AiFillHeart size={24} color="red" />
            ) : (
              <AiOutlineHeart size={24} />
            )
          }
          className="favorite-button"
        />
      </div>

      <div className="story-thumbnails">
        {thumbnails.map((image, index) => {
          const actualIndex = startIndex + index;
          return (
            <img
              key={actualIndex}
              src={image}
              className={`thumbnail ${
                actualIndex === currentIndex ? 'active-thumbnail' : ''
              }`}
              onClick={() => setCurrentIndex(actualIndex)}
            />
          );
        })}

        {images.length > 5 && currentIndex < images.length - 3 && (
          <span className="more-thumbnails">
            +{images.length - (startIndex + 5)}
          </span>
        )}
      </div>

      <div className="story-description">
        <div className="merchant-info">
          <img
            src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
            alt=""
          />
          <Typography variant="h6-2" customClassName="merchant-name">
            Parfaiteria Bel
          </Typography>
        </div>

        <Typography variant="p" customClassName="discount-details">
          Enjoy an instant <strong>10% discount</strong> on purchases of ¥8,000
          with your card.
        </Typography>
      </div>
    </div>
  );
};
