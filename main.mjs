import { Renderer } from './Renderer.mjs';
import { Node } from './Node.mjs';
import { multiply, rotationX } from './Matrix.mjs';

const input = document.querySelector('textarea');
const canvas = document.querySelector('canvas');
const renderer = new Renderer(canvas.getContext('2d'));

const camera = new Node();
camera.perspective = 1;

const model = new Node();
model.vertices = [];
model.indices = [];

input.addEventListener('change', e => {
    const scene = JSON.parse(input.value);

    camera.translation = [...scene.camera.translation];
    camera.rotation = [...scene.camera.rotation];
    camera.perspective = scene.camera.perspective;

    model.translation = [...scene.model.translation];
    model.rotation = [...scene.model.rotation];
    model.scale = [...scene.model.scale];

    model.vertices = [...scene.vertices];
    model.indices = [...scene.indices];
    if (scene.normals != null) {
        model.normals = [...scene.normals];
    }

    renderer.render(camera, model);
});

let scaleFactor = 0.3;
let speed = 0.3;
let rotSpeed = 0.05;
window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "KeyA":
      model.translation[0] -= speed;
      break;
    case "KeyD":
      model.translation[0] += speed;
      break;
    case "KeyW":
      model.translation[2] += speed;
      break;
    case "KeyS":
      model.translation[2] -= speed;
      break;
    case "KeyZ":
      model.scale[0] += scaleFactor;
      model.scale[1] += scaleFactor;
      model.scale[2] += scaleFactor;
      break;
    case "KeyX":
      model.scale[0] -= scaleFactor;
      model.scale[1] -= scaleFactor;
      model.scale[2] -= scaleFactor;
      break;
    case "KeyE":
      model.rotation[1] -= rotSpeed;
      break;
    case "KeyQ":
      model.rotation[1] += rotSpeed;
      break;
    case "KeyU":
      camera.rotation[1] -= rotSpeed;
      break;
    case "KeyO":
      camera.rotation[1] += rotSpeed;
      break;
    case "KeyJ":
      camera.translation[0] -= speed;
      break;
    case "KeyL":
      camera.translation[0] += speed;
      break;
    case "KeyI":
      camera.translation[2] += speed;
      break;
    case "KeyK":
      camera.translation[2] -= speed;
      break;
    default:
      break;
  }

  renderer.render(camera, model);
});

