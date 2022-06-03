import { useEffect, useRef, useState } from 'react';
import {
  Product,
  OnChangesArgs,
  InitialValues,
} from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: ({ product, count }: OnChangesArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ product, count: value });
    }
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = newValue <= initialValues?.maxCount ? newValue : counter;
    }
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    reset,
  };
};

export default useProduct;
