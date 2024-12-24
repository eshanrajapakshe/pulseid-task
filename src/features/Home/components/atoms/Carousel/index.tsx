import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import './styles.scss';

interface CarouselProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  arrows?: boolean;
  arrowBorders?: boolean;
  onSlideChange?: (index: number) => void;
}

export const Carousel: React.FC<CarouselProps> = (props) => {
  const [slideTotal, setSlideTotal] = useState<number>(0);
  const [slideCurrent, setSlideCurrent] = useState<number>(-1);
  const [slides, setSlides] = useState<
    { class: string; element: React.ReactNode }[]
  >([]);
  const [height, setHeight] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    // @ts-ignore
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  useEffect(() => {
    const locSlides = props.slides.map((slide) => ({
      class: 'slider-single proactivede',
      element: slide,
    }));

    if (props.slides.length === 2) {
      props.slides.forEach((slide) => {
        locSlides.push({ class: 'slider-single proactivede', element: slide });
      });
    }

    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);

    if (slideCurrent === -1) {
      setTimeout(() => {
        nextRef.current?.click();
      }, 500);

      if (props.autoplay) {
        startAutoplay();
      }
    }

    return () => {
      clearTimeout(intervalRef.current!);
    };
  }, [props.slides]);

  useEffect(() => {
    if (slideCurrent === -1) {
      return;
    }

    updateHeight();

    if (props.autoplay) {
      restartAutoplay();
    }
  }, [slideCurrent, slides]);

  const updateHeight = () => {
    const activeSlide = containerRef.current?.querySelector(
      '.slider-single.active',
    );
    if (activeSlide) {
      const newHeight = activeSlide.clientHeight;
      setHeight(newHeight);
    }
  };

  const startAutoplay = () => {
    intervalRef.current = setTimeout(() => {
      nextRef.current?.click();
    }, props.interval || 3000);
  };

  const restartAutoplay = () => {
    clearTimeout(intervalRef.current!);
    startAutoplay();
  };

  const slideRight = () => {
    const slideCurrentLoc = (slideCurrent + 1) % (slideTotal + 1);
    changeSlide(slideCurrentLoc);
  };

  const slideLeft = () => {
    const slideCurrentLoc =
      (slideCurrent - 1 + (slideTotal + 1)) % (slideTotal + 1);
    changeSlide(slideCurrentLoc);
  };

  const changeSlide = (newIndex: number) => {
    const activeClass = 'slider-single active';
    const slide = [...slides];

    const preactiveSlide = slide[newIndex - 1] || slide[slideTotal];
    const activeSlide = slide[newIndex];
    const proactiveSlide = slide[newIndex + 1] || slide[0];

    slide.forEach((slid) => {
      if (slid.class.includes('proactivede')) {
        slid.class = 'slider-single preactivede';
      }
      if (slid.class.includes('proactive')) {
        slid.class = 'slider-single proactivede';
      }
    });

    preactiveSlide.class = 'slider-single preactive';
    activeSlide.class = activeClass;
    proactiveSlide.class = 'slider-single proactive';

    setSlides(slide);
    setSlideCurrent(newIndex);
    updateHeight();
    props.onSlideChange?.(newIndex);
  };

  const sliderClass = (direction: 'left' | 'right') => {
    let sliderClass = `slider-${direction}`;
    if (!props.arrows) {
      sliderClass = 'slider-disabled';
    } else if (props.arrows && !props.arrowBorders) {
      sliderClass = `slider-${direction}-noborders`;
    }
    return sliderClass;
  };

  return (
    <div
      className="offer-carousel"
      style={{ height: height ? `${height}px` : 'auto' }}
      ref={containerRef}
    >
      {slides.length > 0 && (
        <div className="slider-container" {...handlers}>
          <div className="slider-content">
            {slides.map((slider, index) => (
              <div className={slider.class} key={index}>
                <div className={sliderClass('left')} onClick={slideLeft}>
                  <div>
                    <FaArrowLeft />
                  </div>
                </div>
                <div
                  className={sliderClass('right')}
                  onClick={slideRight}
                  ref={nextRef}
                >
                  <div>
                    <FaArrowRight />
                  </div>
                </div>

                <div className="slider-single-content">{slider.element}</div>

                <div className="slider-dots">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`slider-dot ${index === slideCurrent ? 'active' : ''}`}
                      onClick={() => changeSlide(index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
