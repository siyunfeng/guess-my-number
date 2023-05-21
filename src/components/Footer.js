import iconLinkedIn from '../img/nav-linkedin.svg';
import iconGitHub from '../img/nav-github.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='social-icon'>
          <a href='https://www.linkedin.com/in/siyunfeng/'>
            <img src={iconLinkedIn} alt='My LinkedIn' />
          </a>
          <a href='https://github.com/siyunfeng'>
            <img src={iconGitHub} alt='My GitHub' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
