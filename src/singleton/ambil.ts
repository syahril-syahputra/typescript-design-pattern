import sample from './sample'

const data = sample.Singleton.getInstance();
const data2 = sample.Singleton.getInstance();

console.log(data === data2)