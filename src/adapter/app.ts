import Music from "./Music"
import MusicProductAdapter from "./MusicProductAdapter"
import IProduct from "./ProductAdapter"
import Video from "./Video"
import VideoProductAdapater from "./VideoProductAdapter"

const Avenger = new Video("Avenger", "Tony Stark Dan Steve Roger", new Date(), 240000)
const linkinpark = new Music("In The End", "Linkin Park", 250000, new Date())


const videAdapter = new VideoProductAdapater(Avenger)
const linkinparkAdapter = new MusicProductAdapter(linkinpark)

const data : IProduct[] = []

data.push(videAdapter)
data.push(linkinparkAdapter)

console.log(data)