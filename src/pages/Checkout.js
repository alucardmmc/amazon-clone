import React from 'react';

import Subtotal from '../components/Subtotal';

import styles from './Checkout.module.css';

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          className={styles.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        <div>
          <h2 className={styles.checkout__title}>
            Your Shopping Basket
          </h2>

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className={styles.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
