import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import {ProductType} from '../../types/product';
import cn from 'classnames';
import Button from '../Button';
import CartIcon from '/public/icons/icon-cart.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    product: ProductType;
};

const ProductCard: React.FC<IProps> = ({ product, className, ...props }) => {
    const {
        thumbnail, category, name, description,
        price, originalPrice,
    } = product;

    return (
        <div className={cn(styles.productCard, className)}
             {...props}
        >
            <picture>
                <source srcSet={thumbnail.mobile}
                        media={'(min-width: 992px)'}
                />

                <img className={styles.thumbnail}
                     src={thumbnail.desktop}
                     alt={name}
                />
            </picture>
            <div className={styles.body}>
                <div className={styles.category}>
                    {category}
                </div>
                <h2 className={styles.name}>
                    {name}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>
                        ${price?.toFixed(2)}
                    </span>
                    <span className={styles.originalPrice}>
                        ${originalPrice?.toFixed(2)}
                    </span>
                </div>
                <div className={styles.buttonContainer}>
                    <Button icon={<CartIcon />}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
