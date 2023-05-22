import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ primary, outline = 0, text = 0, disabled = 0, to, href, children, onClick, passProps }) {
  let Comp = 'button';
  const props = {
    onClick,
    primary,
    outline,
    text,
    disabled,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof [key] === 'function') {
        delete props.key;
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    disabled,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
