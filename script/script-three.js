import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.08);
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 25;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// controles de câmera
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minDistance = 5; 
controls.maxDistance = 50;

//post-processing
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 1.5)
bloomPass.threshold = 0;
bloomPass.strength = 1.5;
bloomPass.radius = 0.9;
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);


// função para gerar pontos aleatórios em um raio
function getRandomSpherePoint({ radius = 10}) {
    const minRadius = radius * 0.25;
    const maxRadius = radius - minRadius;
    const range = Math.random() * maxRadius + minRadius;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    return {
        x: range * Math.sin(phi) * Math.cos(theta),
        y: range * Math.sin(phi) * Math.sin(theta),
        z: range * Math.cos(phi),
    };
}

const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({color: 0x00ff00,});
const edges = new THREE.EdgesGeometry(geo);


// criação dos cubos
function getBox() {
    const box = new THREE.LineSegments(edges, mat);
    return box;
}

const boxGroup = new THREE.Group();
boxGroup.userData.update = (timeStamp) => {
    boxGroup.rotation.x = timeStamp * 0.0001;
    boxGroup.rotation.y = timeStamp * 0.0001;
}
scene.add(boxGroup);


// posicionamento dos cubos
const numBoxes = 1000;
const radius = 45;
for(let i = 0; i < numBoxes; i++) {
    const box = getBox();
    const { x, y, z } = getRandomSpherePoint({ radius }); 
    box.position.set(x, y, z)
    box.rotation.set(x, y, z)
    scene.add(box);
    boxGroup.add(box)
};

// luz
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

// animação
function animate(timeStamp = 0) {
    requestAnimationFrame(animate);
    boxGroup.userData.update(timeStamp);
    composer.render(scene, camera);
    controls.update();
}

animate();


//configurações de redimensionamento
function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
window.addEventListener("resize", handleWindowResize, false);