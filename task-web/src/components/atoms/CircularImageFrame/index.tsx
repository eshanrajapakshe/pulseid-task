import classNames from 'classnames';
import { Typography } from '../Typography';
import './styles.scss';

interface IProps {
  imageScource: string;
  className?: string;
  frameSize?: 'small' | 'medium' | 'large';
  frameText?: string;
  onClick?: () => void;
}

export const CircularImageFrame = ({
  frameSize = 'small',
  imageScource,
  className = '',
  frameText = '',
  onClick,
}: IProps) => {
  return (
    <div className="circle-image-frame" onClick={onClick} role="button">
      <div className={classNames('circle-image-wrapper', frameSize)}>
        <img
          src={imageScource}
          alt="pic"
          className={classNames('avatar', className)}
          loading="lazy"
        />
      </div>

      {frameText && <Typography variant="p">{frameText}</Typography>}
    </div>
  );
};
