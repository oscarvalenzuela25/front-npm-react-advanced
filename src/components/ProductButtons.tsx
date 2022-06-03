import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // El useCallback en si es para tener una funcion que se ejecuta con dependencias.
  // Imagina que en vez del callback es un useEffect con las dependencias y estas actualizando un estado
  // Aqui actualiza la funcion basado en las dependencias
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {' '}
        -{' '}
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={
          isMaxReached()
            ? `${styles.disabled} ${styles.buttonAdd}`
            : styles.buttonAdd
        }
        onClick={() => !isMaxReached() && increaseBy(1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};
