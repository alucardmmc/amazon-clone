import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';

import styles from './Subtotal.module.css';

const Subtotal = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({state.basket?.length} items): 
              <strong> {value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={state.totalAmount}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
