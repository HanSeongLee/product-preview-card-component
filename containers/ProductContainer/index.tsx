import React, {HTMLAttributes} from 'react';
import ProductCard from '../../components/ProductCard';
import {ProductType} from '../../types/product';

const product: ProductType = {
    thumbnail: {
        mobile: '/img/image-product-mobile.jpg',
        desktop: '/img/image-product-desktop.jpg',
    },
    category: 'perfume',
    name: 'Gabrielle Essence Eau De Parfum',
    description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    price: 149.99,
    originalPrice: 169.99,
};

const ProductContainer: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <ProductCard product={product} />
    );
};

export default ProductContainer;
