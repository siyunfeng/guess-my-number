import iconLinkedIn from '../img/nav-linkedin.svg';
import iconGitHub from '../img/nav-github.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='social-icon'>
          <a
            href='https://www.linkedin.com/in/siyunfeng/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={iconLinkedIn} alt='My LinkedIn' />
          </a>
          <a
            href='https://github.com/siyunfeng'
            target='_blank'
            rel='noreferrer'
          >
            <img src={iconGitHub} alt='My GitHub' />
          </a>
        </div>
        <p>
          Made with ❤️ by{' '}
          <a
            href='https://siyun-feng.onrender.com/'
            target='_blank'
            rel='noreferrer'
          >
            Siyun Feng
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
