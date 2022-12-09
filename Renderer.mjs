import * as Matrix from './Matrix.mjs';


export class Renderer {
  constructor(contxt) {
    this.contxt = contxt;
  }

  drawTriangleOnCanvas(node) {
    // initialize the path
    this.contxt.beginPath();

    this.contxt.moveTo(node[0][0], node[0][1]); 
    this.contxt.lineTo(node[1][0], node[1][1]);
    this.contxt.lineTo(node[2][0], node[2][1]);

    // stop the path
    this.contxt.closePath();
    // add stroke
    this.contxt.stroke();
  }
  
  render(camera, model) {

    let verticesWithDim = [];
    // iterate and take every 3 elements as one vertices definition
    for (let i = 0; i < model.vertices.length; i+=3) {
      // slice the array chunk that is being iterated
      let oneDimension = model.vertices.slice(i, i + 3);
      // add 1 on the end of the chunk
      oneDimension.push(1);
      // insert the chunk into the final result array
      verticesWithDim.push(oneDimension);
    }

    // start with clear canvas
    this.contxt.clearRect(0, 0, this.contxt.canvas.width, this.contxt.canvas.height);
    // set the camera matrix and the viewport matrix 
    let cameraModelMatrix = Matrix.multiply(camera.inverseTransform, model.forwardTransform);
    cameraModelMatrix = Matrix.multiply(Matrix.perspective(camera.perspective), cameraModelMatrix);
    let viewPort = Matrix.viewport(0, 0, 512, 512);
    viewPort = Matrix.multiply(viewPort, cameraModelMatrix);

    for (let i = 0; i < verticesWithDim.length; i++) {
        // coordinates multiplication
        verticesWithDim[i] = Matrix.transform(viewPort, verticesWithDim[i]);
         // coordinates normtalization
        verticesWithDim[i][1] = camera.perspective * verticesWithDim[i][1] / verticesWithDim[i][2];
        verticesWithDim[i][0] = camera.perspective * verticesWithDim[i][0] / verticesWithDim[i][2];
    }

    

    
    // triangles drawing on canvas
    for (let i = 0; i < model.indices.length; i += 3) {
        const resultDrawing = this.drawTriangleOnCanvas(
          [
            verticesWithDim[model.indices[i]],
            verticesWithDim[model.indices[i + 1]],
            verticesWithDim[model.indices[i + 2]]
          ]
        );
    }
  }
}