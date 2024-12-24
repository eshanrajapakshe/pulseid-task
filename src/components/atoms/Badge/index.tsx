import './styles.scss';

interface IProps {
  type: 'primary' | 'secondary' | 'outline';
  className?: string;
  text: string;
  icon?: React.ReactNode;
}

export const Badge = ({ type, className = '', text, icon }: IProps) => {
  return (
    <div
      className={`badge badge-${type} ${className} ${icon ? 'badge-icon-wrapper' : ''}`}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className='badge-text'>{text}</span>
    </div>
  );
};
