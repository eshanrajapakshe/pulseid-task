import classNames from 'classnames';
import './styles.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const OffersCard = ({ children, className = '' }: IProps) => {
  return (
    <div className={classNames('offer-card-wrapper', className)}>
      {children}
    </div>
  );
};
