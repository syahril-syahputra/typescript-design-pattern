import Music from "./Music";
import IProduct from "./ProductAdapter";

class MusicProductAdapter implements IProduct {
    name: string;
    price: number;
    artis: string;
    tglRelease: Date;

    constructor(music: Music) {
        this.name = music.getJudul();
        this.price = music.getHarga();
        this.artis = music.getPenyanti();
        this.tglRelease = music.getTglRelease()
    }

    build = () => {
        return {...this}
    }
}
export default MusicProductAdapter
