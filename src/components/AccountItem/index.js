import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/cdace0c1e6c3ae2877a0fd5b1c40a878~c5_720x720.jpeg?x-expires=1684566000&x-signature=ccLn1z3N%2BmPFPHNfdW8MMGl%2B9uo%3D"
        alt="tiktoker"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Vu Van Hung <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('username')}>vuvanhung</p>
      </div>
    </div>
  );
}

export default AccountItem;
