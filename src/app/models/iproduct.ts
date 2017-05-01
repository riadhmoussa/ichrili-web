import { ICategory } from './icategory';
import { IMarket } from './imarket';
export class IProduct {
    id: string;
    product_label: string;
    product_category: ICategory;
    market: [IMarket];
    unit: string;
    price_unit: string;
    product_photo_url: string;
}
