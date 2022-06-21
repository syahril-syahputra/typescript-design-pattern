//disini kodisini nya jabatan dan gaji akan selalu sama

interface IKaryawan {
    name: string,
    jabatan: string,
    gaji: number,
}

class karyawan implements IKaryawan {
    name = "";
    jabatan = "";
    gaji = 0;

    constructor(name: string = "", jabatan: string = "", gaji: number = 0) {
        this.name = name
        this.jabatan = jabatan
        this.gaji = gaji
    }
}
//factory mempermudah kita membuat object yang sama
class FactoryKaryawan {
    createManager(name: string): IKaryawan {
        return new karyawan(name, "manager", 12000000)
    }
    createStaff(name: string): IKaryawan {
        return new karyawan(name, "staff", 6000000)
    }
}

const syahril = new FactoryKaryawan().createManager("syahril");
const aska = new FactoryKaryawan().createStaff("aska");
console.log(syahril)
console.log(aska)