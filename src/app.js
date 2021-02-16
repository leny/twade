/* leny/twadé
 *
 * /src/app.js - Main entry point
 *
 * coded by leny@flatLand!
 * started at 16/02/2021
 */

import "./styles.scss";

import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";

const {innerWidth, innerHeight} = window;
const [width, height] = [innerWidth, innerHeight];

const scene = new Scene();
const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(width, height);

document.querySelector("#app").appendChild(renderer.domElement);

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({color: 0x00ff00});
const cube = new Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();
