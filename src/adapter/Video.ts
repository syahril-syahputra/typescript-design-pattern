interface IVideo{
    judul : string,
    artis : string,
    tglRelease :Date,
    harga : number
}

class Video implements IVideo{
    public judul: string;
    public artis: string;
    public tglRelease: Date;
    public harga: number;

    public getJudul(): string {
        return this.judul;
    }

    public setJudul(judul: string): void {
        this.judul = judul;
    }

    public getArtis(): string {
        return this.artis;
    }

    public setArtis(artis: string): void {
        this.artis = artis;
    }

    public getTglRelease(): Date {
        return this.tglRelease;
    }

    public setTglRelease(tglRelease: Date): void {
        this.tglRelease = tglRelease;
    }

    public getHarga(): number {
        return this.harga;
    }

    public setHarga(harga: number): void {
        this.harga = harga;
    }



  constructor(
    judul: string, 
    artis: string, 
    tglRelease: Date, 
    harga: number
) {
    this.judul = judul
    this.artis = artis
    this.tglRelease = tglRelease
    this.harga = harga
  }


}