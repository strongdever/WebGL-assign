import * as Matrix from './Matrix.mjs';
export class Node {

    constructor() {
        this.translation = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
    }

    get forwardTransform() {
        // TODO: implement
        const translacija1 = Matrix.translation(this.translation[0],this.translation[1],this.translation[2]);
        const rotacijaXosi1 = Matrix.rotationX(this.rotation[0]);
        const rotacijaYosi1 = Matrix.rotationY(this.rotation[1]);
        const rotacijaZosi1 = Matrix.rotationZ(this.rotation[2]);
        const Mscale = Matrix.scale(this.scale[0],this.scale[1],this.scale[2]);

        const mnozenjeRotacijaT1 = Matrix.multiply(rotacijaZosi1, rotacijaYosi1);
        const mnozenjeRotacijaT2 = Matrix.multiply(mnozenjeRotacijaT1, rotacijaXosi1);
        const mnozenjeTranslacijaT1 = Matrix.multiply(translacija1, mnozenjeRotacijaT2);
        const FinalTransform1 = Matrix.multiply(mnozenjeTranslacijaT1, Mscale);

        return FinalTransform1;
    }

    get inverseTransform() {
        // TODO: implement
        const translacija2 = Matrix.translation(-this.translation[0],-this.translation[1],-this.translation[2]);
        const rotacijaXosi2 = Matrix.rotationX(-this.rotation[0]);
        const rotacijaYosi2 = Matrix.rotationY(-this.rotation[1]);
        const rotacijaZosi2 = Matrix.rotationZ(-this.rotation[2]);

        const mnozenjeRotacijaI1 = Matrix.multiply(rotacijaZosi2, rotacijaYosi2);
        const mnozenjeRotacijaI2 = Matrix.multiply(mnozenjeRotacijaI1, rotacijaXosi2);
        const FinalTransform2 = Matrix.multiply(mnozenjeRotacijaI2, translacija2);

        return FinalTransform2;
    }
}