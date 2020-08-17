// You can use import statements here!
//
// More information about how to do this here:
// https://threejs.org/docs/#manual/en/introduction/Import-via-modules

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshNormalMaterial,
  Mesh,
  ConeBufferGeometry,
  Shape,
  ExtrudeBufferGeometry
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);




// put all your codes from here




const shape = new Shape();
const x = -2.5;
const y = -5;
shape.moveTo(x + 2.5, y + 2.5);
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
const extrudeSettings = {
  steps: 2,  
  depth: 2,  
  bevelEnabled: true,  
  bevelThickness: 1,  
  bevelSize: 1,  
  bevelSegments: 2, 
};
const geometry = new ExtrudeBufferGeometry(shape, extrudeSettings);

//to here








const material = new MeshNormalMaterial();
const mesh = new Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 5;

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
