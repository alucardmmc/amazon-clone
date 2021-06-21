import React from 'react';
import { useStateValue } from '../context/StateProvider';
import styles from './Product.module.css';

const Product = (props) => {
  const [state, dispatch] = useStateValue();

  const addToBasketHandler = () => {
    // dispatch item into data layer;
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{props.title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>
      <div className={styles.product__rating}>
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>

      <img src={props.image} alt="Product" />

      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
};

export default Product;
