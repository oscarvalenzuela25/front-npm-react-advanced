import React from 'react';
import rendered from 'react-test-renderer';
import ProductCard from '../../src/components/ProductCard';
import { product2 } from './data/products';

describe('ProductImage', () => {
  test('Debe mostrar el componente con una img', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <h1>Titulo</h1>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
