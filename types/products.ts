export interface Product {
    id: number;
    productName: string;
    inventory: string;
    color: string;
    description: string;
    price: string;
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
