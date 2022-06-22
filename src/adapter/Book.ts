interface IBook {
  judul: string;
  penulis: string;
  tglTerbit: Date;
  harga: number;
  
}

class Book implements IBook {
  public judul: string;
  public penulis: string;
  public tglTerbit: Date;
  public harga: number;

  constructor(judul: string, penulis: string, tglTerbit: Date, harga: number) {
    this.judul = judul;
    this.penulis = penulis;
    this.tglTerbit = tglTerbit;
    this.harga = harga;
  }

}
