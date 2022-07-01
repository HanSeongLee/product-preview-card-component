import {ThumbnailType} from './thumbnail';

export type ProductType = {
    thumbnail: ThumbnailType;
    category: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
};
