import classNames from 'classnames/bind';
//import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faEllipsisVertical,
  faLanguage,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faKeyboard, faMoon, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

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
        <Tippy
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text={+true}>
            <FontAwesomeIcon className={cx('icon-upload')} icon={faPlus} />
            Upload
          </Button>
          <Button primary={+true}>Log in</Button>
          <Menu items={MENU_ITEMS} onChange={handleOnchange}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
