import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles.scss';

export const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="horizontal-boxes">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            height={40}
            borderRadius={16}
            className="horizontal-box"
          />
        ))}
      </div>

      <div className="grid-boxes">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            height={120}
            borderRadius={16}
            className="grid-box"
          />
        ))}
      </div>
    </div>
  );
};
