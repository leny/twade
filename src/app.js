/* leny/twadé
 *
 * /src/app.js - Main entry point
 *
 * coded by leny@flatLand!
 * started at 16/02/2021
 */

import "./styles.scss";

import {Scene, PerspectiveCamera, WebGLRenderer, Color} from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

import speederURL from "url:./data/models/speeder.glb";

const {innerWidth, innerHeight} = window;
const [width, height] = [innerWidth, innerHeight];

const scene = new Scene();
const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(width, height);

document.querySelector("#app").appendChild(renderer.domElement);

camera.position.x = 2.5;
camera.position.y = 2.5;
camera.position.z = 10;

const loader = new GLTFLoader();

let speeder;

loader.load(
    speederURL,
    gltf => {
        gltf.scene.traverse(child => {
            if (child.isMesh) {
                child.material.emissive = child.material.color;
                child.material.emissiveMap = child.material.map;
            }
        });
        scene.add(gltf.scene);
        speeder = gltf.scene;
    },
    ({loaded, total}) => console.log(`${(loaded / total) * 100}% loaded`),
    console.error,
);

const animate = () => {
    requestAnimationFrame(animate);
    if (speeder) {
        speeder.rotation.x += 0.01;
        speeder.rotation.y += 0.01;
        speeder.rotation.z += 0.01;
    }
    renderer.render(scene, camera);
};

animate();
