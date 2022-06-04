import React from 'react';
import rendered from 'react-test-renderer';
import ProductCard from '../../src/components/ProductCard';
import { product2 } from './data/products';
import { ProductImage } from './../../src/components/ProductImage';

describe('ProductImage', () => {
  test('Debe mostrar el componente con una img', () => {
    const wrapper = rendered.create(<ProductImage img={product2.img} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe mostrar el componente con la img del producto', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
