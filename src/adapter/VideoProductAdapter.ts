import Video from "./Video";
import IProduct from "./ProductAdapter";

class VideoProductAdapater implements IProduct {
    name: string;
    price: number;
    artis: string;
    tglRelease: Date;

    constructor(video: Video) {
        this.name = video.judul;
        this.price = video.harga;
        this.artis = video.artis;
        this.tglRelease = video.tglRelease;
    }
    build = () => {
        return {...this}
    }
}
export default VideoProductAdapater
