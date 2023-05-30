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
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/cdace0c1e6c3ae2877a0fd5b1c40a878~c5_100x100.jpeg?x-expires=1685516400&x-signature=aXeFL8nmprjXsZ9PDjsul0lHark%3D"
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
