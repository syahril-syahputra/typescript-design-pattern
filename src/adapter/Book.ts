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

  public getJudul(): string {
    return this.judul;
  }

  public setJudul(judul: string): void {
    this.judul = judul;
  }

  public getPenulis(): string {
    return this.penulis;
  }

  public setPenulis(penulis: string): void {
    this.penulis = penulis;
  }

  public getTglTerbit(): Date {
    return this.tglTerbit;
  }

  public setTglTerbit(tglTerbit: Date): void {
    this.tglTerbit = tglTerbit;
  }

  public getHarga(): number {
    return this.harga;
  }

  public setHarga(harga: number): void {
    this.harga = harga;
  }

  constructor(judul: string, penulis: string, tglTerbit: Date, harga: number) {
    this.judul = judul;
    this.penulis = penulis;
    this.tglTerbit = tglTerbit;
    this.harga = harga;
  }
}
