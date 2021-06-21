import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import styles from './Header.module.css';
import { useStateValue } from '../context/StateProvider';

const Header = () => {
  const [state, dispatch] = useStateValue();

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className={styles.header__logo}
        />
      </Link>

      <div className={styles.header__search}>
        <input className={styles['header__search-input']} />
        <SearchIcon className={styles['header__search-icon']}></SearchIcon>
      </div>

      <div className={styles.header__nav}>
        <div className={styles.header__option}>
          <span className={styles['header__option--line-one']}>
            Hello Guest
          </span>
          <span className={styles['header__option--line-two']}>Sign In</span>
        </div>

        <div className={styles.header__option}>
          <span className={styles['header__option--line-one']}>Returns</span>
          <span className={styles['header__option--line-two']}>& Orders</span>
        </div>

        <div className={styles.header__option}>
          <span className={styles['header__option--line-one']}>Your</span>
          <span className={styles['header__option--line-two']}>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className={styles['header__option--basket']}>
            <ShoppingBasketIcon />
            <span
              className={`${styles['header__option--line-two']} ${styles['header__basket--count']}`}
            >
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
