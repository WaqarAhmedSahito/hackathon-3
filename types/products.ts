export interface Product {
    id: string;
    productName: string;
    inventory: number;
    color: string;
    description: string;
    price: number;
    image :{
        asset: {
            _ref : string;
            _type: "image";
        }
    };
    category: string;
    _type: "product";
    slug: {
        _type:"slug";
        current: string;
    }
}
