export function multiply(a, b) {
    // TODO: implement

    //Matrix A elements
    var matAx1 = a[0];
    var matAx2 = a[1];
    var matAx3 = a[2];
    var matAx4 = a[3];
    var matAy1 = a[4];
    var matAy2 = a[5];
    var matAy3 = a[6];
    var matAy4 = a[7];
    var matAz1 = a[8];
    var matAz2 = a[9];
    var matAz3 = a[10];
    var matAz4 = a[11];
    var matAw1 = a[12];
    var matAw2 = a[13];
    var matAw3 = a[14];
    var matAw4 = a[15];

    //Matrix B elements
    var matBx1 = b[0];
    var matBx2 = b[1];
    var matBx3 = b[2];
    var matBx4 = b[3];
    var matBy1 = b[4];
    var matBy2 = b[5];
    var matBy3 = b[6];
    var matBy4 = b[7];
    var matBz1 = b[8];
    var matBz2 = b[9];
    var matBz3 = b[10];
    var matBz4 = b[11];
    var matBw1 = b[12];
    var matBw2 = b[13];
    var matBw3 = b[14];
    var matBw4 = b[15];

    //Calculation
    var FinalMatrix = new Float32Array(16);

        FinalMatrix[0] = (matAx1*matBx1)+(matAx2*matBy1)+(matAx3*matBz1)+(matAx4*matBw1);
        FinalMatrix[1] = (matAx1*matBx2)+(matAx2*matBy2)+(matAx3*matBz2)+(matAx4*matBw2);
        FinalMatrix[2] = (matAx1*matBx3)+(matAx2*matBy3)+(matAx3*matBz3)+(matAx4*matBw3);
        FinalMatrix[3] = (matAx1*matBx4)+(matAx2*matBy4)+(matAx3*matBz4)+(matAx4*matBw4);
        FinalMatrix[4] = (matAy1*matBx1)+(matAy2*matBy1)+(matAy3*matBz1)+(matAy4*matBw1);
        FinalMatrix[5] = (matAy1*matBx2)+(matAy2*matBy2)+(matAy3*matBz2)+(matAy4*matBw2);
        FinalMatrix[6] = (matAy1*matBx3)+(matAy2*matBy3)+(matAy3*matBz3)+(matAy4*matBw3);
        FinalMatrix[7] = (matAy1*matBx4)+(matAy2*matBy4)+(matAy3*matBz4)+(matAy4*matBw4);
        FinalMatrix[8] = (matAz1*matBx1)+(matAz2*matBy1)+(matAz3*matBz1)+(matAz4*matBw1);
        FinalMatrix[9] = (matAz1*matBx2)+(matAz2*matBy2)+(matAz3*matBz2)+(matAz4*matBw2);
        FinalMatrix[10] = (matAz1*matBx3)+(matAz2*matBy3)+(matAz3*matBz3)+(matAz4*matBw3);
        FinalMatrix[11] = (matAz1*matBx4)+(matAz2*matBy4)+(matAz3*matBz4)+(matAz4*matBw4);
        FinalMatrix[12] = (matAw1*matBx1)+(matAw2*matBy1)+(matAw3*matBz1)+(matAw4*matBw1);
        FinalMatrix[13] = (matAw1*matBx2)+(matAw2*matBy2)+(matAw3*matBz2)+(matAw4*matBw2);
        FinalMatrix[14] = (matAw1*matBx3)+(matAw2*matBy3)+(matAw3*matBz3)+(matAw4*matBw3);
        FinalMatrix[15] = (matAw1*matBx4)+(matAw2*matBy4)+(matAw3*matBz4)+(matAw4*matBw4);

    return FinalMatrix;
}

export function transform(a, v) {
    // TODO: implement

    //Matrix A elements
    var matAx1 = a[0];
    var matAx2 = a[1];
    var matAx3 = a[2];
    var matAx4 = a[3];
    var matAy1 = a[4];
    var matAy2 = a[5];
    var matAy3 = a[6];
    var matAy4 = a[7];
    var matAz1 = a[8];
    var matAz2 = a[9];
    var matAz3 = a[10];
    var matAz4 = a[11];
    var matAw1 = a[12];
    var matAw2 = a[13];
    var matAw3 = a[14];
    var matAw4 = a[15];

     //Vector elements 
    var vecX = v[0];
    var vecY = v[1];
    var vecZ = v[2];
    var vecW = v[3];

    //Calculation
    let FinalResult = new Float32Array(4);
        FinalResult[0] = (matAx1*vecX)+(matAx2*vecY)+(matAx3*vecZ)+(matAx4*vecW);
        FinalResult[1] = (matAy1*vecX)+(matAy2*vecY)+(matAy3*vecZ)+(matAy4*vecW);
        FinalResult[2] = (matAz1*vecX)+(matAz2*vecY)+(matAz3*vecZ)+(matAz4*vecW);
        FinalResult[3] = (matAw1*vecX)+(matAw2*vecY)+(matAw3*vecZ)+(matAw4*vecW);
    return FinalResult;
}

export function identity() {
    // TODO: implement
    
    return [1, 0, 0, 0 , 0, 1, 0, 0 , 0, 0, 1, 0 , 0, 0, 0, 1];
}

export function translation(dx, dy, dz) {
    // TODO: implement
    return [1, 0, 0, dx , 0, 1, 0, dy , 0, 0, 1, dz , 0, 0, 0, 1];
}

export function scale(sx, sy, sz) {
    // TODO: implement
    return [sx, 0, 0, 0, 0, sy, 0, 0 , 0, 0, sz, 0 , 0, 0, 0, 1];
}

export function rotationX(angle) {
    // TODO: implement
    let RotXcos = Math.cos(angle);
    let RotXsin = Math.sin(angle);
    return [1, 0, 0, 0, 0, RotXcos, (-RotXsin), 0 , 0, RotXsin, RotXcos, 0, 0, 0, 0, 1];
}

export function rotationY(angle) {
    // TODO: implement
    let RotYcos = Math.cos(angle);
    let RotYsin = Math.sin(angle);
    return [RotYcos, 0, RotYsin, 0, 0, 1, 0, 0, (-RotYsin), 0, RotYcos, 0, 0, 0, 0, 1];

}

export function rotationZ(angle) {
    // TODO: implement
    let RotZcos = Math.cos(angle);
    let RotZsin = Math.sin(angle);
    return [RotZcos, (-RotZsin), 0, 0, RotZsin, RotZcos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

export function perspective(d) {
    // TODO: implement
    let a = 1/d;
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, a, 0];
    
}

export function viewport(x, y, w, h) {
    // TODO: implement
    let a = w/2;
    let b = a + x;
    var c = h/2;
    var d = c + y;

    return [a, 0, 0, b, 0, -c, 0, d, 0, 0, 1, 0, 0, 0, 0, 1];
}
