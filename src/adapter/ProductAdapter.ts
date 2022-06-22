interface IProduct{
    name : string,
    price : number,
    artis : string,
    tglRelease : Date,
}


class ProductAdapter implements IProduct{
    name: string;
    price: number;
    artis: string;
    tglRelease: Date;

  constructor(
    name: string, 
    price: number, 
    artis: string, 
    tglRelease: Date
) {
    this.name = name
    this.price = price
    this.artis = artis
    this.tglRelease = tglRelease
  }
    
}