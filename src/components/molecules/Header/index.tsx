import { CircularImageFrame, Typography } from '../../atoms';
import './styles.scss';

import ProfilePicture from '../../../assets/images/profile-pic.png';
import Logo from '../../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="brand-wrapper">
          <img src={Logo} alt="brand logo" className="logo-img" />
        </div>

        <div className="user-wrapper">
          <div className="user-info">
            <Typography variant="p" customClassName="user-name">
              Hi, John Doe
            </Typography>
            <Typography variant="p" customClassName="user-greetings">
              Welcome
            </Typography>
          </div>

          <CircularImageFrame frameSize="small" imageScource={ProfilePicture} />
        </div>
      </div>
    </header>
  );
};
