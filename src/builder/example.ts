namespace contohBuilder {

    interface ISiswa {
        name: string,
        age: number,
        kelas: string,

    }
    class siswaBuilder implements ISiswa {
        name = "";
        age = 12;
        kelas = "asdsad";


        constructor(name: string = "", age: number = 0, kelas: string = "") {
            this.name = name
            this.age = age
            this.kelas = kelas
        }


        public getName(): string {
            return this.name;
        }

        public setName(name: string): void {
            this.name = name;
        }

        public getAge(): number {
            return this.age;
        }

        public setAge(age: number): void {
            this.age = age;
        }

        public getKelas(): string {
            return this.kelas;
        }

        public setKelas(kelas: string): void {
            this.kelas = kelas;
        }

        public getSiswa(): ISiswa {
            return { name: this.name, age: this.age, kelas: this.kelas }
        }
    }

    const syahril = new siswaBuilder();
    syahril.setName("syahril");
    syahril.setAge(12)

    console.log(syahril)


    console.log(syahril.getName())
}