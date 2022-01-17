export interface IProduct {
  id?:string;
  name?: string;
  price?: number;
  discountedPrice?: number;
  image?: string;
  rate?: number;
  sale?: boolean;
  productColor?: string
}

export class Product implements IProduct {

  constructor(public name?: string,public price?: number){
    this.name = name;
    this.price = price;
  }

}
