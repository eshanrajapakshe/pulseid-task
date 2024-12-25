import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './styles.scss';

type AlertType = 'success' | 'error';

interface AlertProps {
  type: AlertType;
  message: string;
  Icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type, message, Icon }) => {
  const defaultIcons = {
    success: <FaCheckCircle />,
    error: <FaTimesCircle />,
  };

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">{Icon || defaultIcons[type]}</div>
      <div className="alert-message">{message}</div>
    </div>
  );
};
