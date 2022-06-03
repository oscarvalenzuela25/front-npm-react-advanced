import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from 'front-npm-react-advanced';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={product1}
      className="bg-dark text-white"
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    >
      {({ count, isMaxCountReached, increaseBy, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
