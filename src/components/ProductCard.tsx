import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import React, { createContext, CSSProperties } from 'react';
import {
  ProductContextProps,
  Product,
  OnChangesArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

export interface Props {
  // Patrones de componentes
  // children: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: ({ product, count }: OnChangesArgs) => void;
  value?: number;

  //State initializer
  children: (args: ProductCardHandlers) => JSX.Element;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
