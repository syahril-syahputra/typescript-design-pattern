namespace sample {
    export class Singleton {
        private static instance: Singleton;

        public static getInstance(): Singleton {
            //ddisini kita cek kalau dia belum di ekesekusi maka dia akan di instance variable
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }

        getFullname = (): string => {

            const nama = "syahril"
            const nama2 = "syahputra"

            return `${nama} ${nama2}`
        }
    }

    const singleton = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();


    //ini contoh tampa single ton
    const false1 = new Singleton();
    const false2 = new Singleton();


}
export default sample;