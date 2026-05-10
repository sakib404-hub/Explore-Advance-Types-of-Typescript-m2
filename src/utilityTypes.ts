 //? utility types 

 type Product = {
    id : number,
    name : string,
    price : number,
    stock : number,
    color ? : string
 }

//  type ProductSummery = {
//     id : number,
//     name : string,
//     price : number
//  }

type ProductSummery = Pick<Product, 'id' | 'name' | 'price'>;

type ProductSummeryWithoutstock = Omit <Product, 'stock' | 'color'>;

type ProductWithColor = Required<Product> //? every available property is required nothing remain optional

const product : ProductWithColor = {
    id : 123,
    name : 'Pen Holder',
    price : 1891,
    stock : 10,
    color : 'black'
}

type ProductPartial = Partial<Product> //? making every property optional

type ProductReadOnly = Readonly<Product> //? making every product readonly 

const product1 = {
    id : 123,
    name : 'Mouse',
    price : 20
}

const emptyObj : object = {}  
const emptyTwo : Record<string, unknown> = {}; //? if empty object is needed to be decleared