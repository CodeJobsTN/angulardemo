import { IProduct } from "../models/product.model";

export const productList: IProduct[] = [
  {
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' ,
   name: 'Fancy Product' ,
   discountedPrice: 40.00,
   price: 80.00 ,
   rate: 0,
   sale:  false,
   productColor: 'red'
  },
  {
    image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' ,
   name: 'Special Item',
   discountedPrice: 18.00,
   price: 20.00 ,
   rate: 5,
   sale: true,
   productColor: 'gray'
  },
  {
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' ,
   name: 'Sale Item' ,
   discountedPrice: 25.00 ,
   price: 50.00,
   rate: 3,
   sale:  true,
   productColor: 'green'
  },
  {
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' ,
   name: 'Popular Item' ,
   discountedPrice: 25.00 ,
   price: 40.00,
   rate: 0,
   sale:  false,
   productColor: 'blue'
  }
]

