# Front NPM react advanced

Este es un paquete de pruebas de despliegue en NPM

## Example

```
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from 'front-npm-react-advanced';

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
```
