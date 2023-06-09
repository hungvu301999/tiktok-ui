import classNames from 'classnames/bind';
//import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCircleXmark,
  faEllipsisVertical,
  faGear,
  faLanguage,
  faMagnifyingGlass,
  faPlus,
  faSignOut,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faKeyboard, faMoon, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Vietnamese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
  },
];

const USER_MENU = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
  },
  {
    icon: <FontAwesomeIcon icon={faTiktok} />,
    title: 'Get Coins',
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: 'View Analytics',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Logout',
    separate: true,
  },
];

function Header() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const [searchResult, SetSearchResuilt] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      SetSearchResuilt([1, 2, 3]);
    }, 0);
  }, []);

  const handleOnchange = (data) => {
    console.log(data);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok"></img>
        </div>
        <HeadlessTippy
          interactive
          appendTo={document.body}
          visible={visible && searchResult.length >= 1}
          onClickOutside={hide}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-item')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')} onClick={visible ? hide : show}>
            <input placeholder="Tìm kiếm" spellCheck={false}></input>
            <div className={cx('wrapper-icons')}>
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </div>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button text={+true}>
                <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
                Upload
              </Button>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('messages-btn')}>
                  <img className={cx('messages')} src={images.messages} alt="messages"></img>
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('inbox-btn')}>
                  <img className={cx('inbox')} src={images.inbox} alt="inbox"></img>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text={+true}>
                <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
                Upload
              </Button>
              <Button primary={+true}>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleOnchange}>
            {currentUser ? (
              <button>
                <img
                  className={cx('user-avt')}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/cdace0c1e6c3ae2877a0fd5b1c40a878~c5_720x720.jpeg?x-expires=1686477600&x-signature=8LqlhLCpVNelcBxf6zQ%2BChpe1rg%3D"
                  alt="Vu Van Hung"
                ></img>
              </button>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
