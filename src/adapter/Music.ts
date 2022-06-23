interface IMusic{
    judul : string,
    penyanti : string,
    harga : number,
    tglRelease : Date
}

class Music implements IMusic{
    public judul: string;
    public penyanti: string;
    public harga: number;
    public tglRelease: Date;

    public getJudul(): string {
        return this.judul;
    }

    public setJudul(judul: string): void {
        this.judul = judul;
    }

    public getPenyanti(): string {
        return this.penyanti;
    }

    public setPenyanti(penyanti: string): void {
        this.penyanti = penyanti;
    }

    public getHarga(): number {
        return this.harga;
    }

    public setHarga(harga: number): void {
        this.harga = harga;
    }

    public getTglRelease(): Date {
        return this.tglRelease;
    }

    public setTglRelease(tglRelease: Date): void {
        this.tglRelease = tglRelease;
    }


  constructor(
    judul: string,
    penyanti: string,
    harga: number,
    tglRelease: Date
) {
    this.judul = judul
    this.penyanti = penyanti
    this.harga = harga
    this.tglRelease = tglRelease
  }





}

export default Music