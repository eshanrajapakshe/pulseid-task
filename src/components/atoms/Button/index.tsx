import classNames from 'classnames';
import './styles.scss';

interface ButtonProps {
  type: 'icon' | 'text' | 'link';
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  onClick,
  disabled = false,
  className = '',
}) => {
  const buttonClass = classNames('button', type, className, {
    disabled,
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {type === 'icon' && icon}
      {(type === 'text' || type === 'link') && label}
    </button>
  );
};
