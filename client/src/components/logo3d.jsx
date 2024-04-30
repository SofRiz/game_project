import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const Logo3d = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    )
    camera.position.set(0, 0, 0)
    camera.lookAt(0, 0, 0)
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    // Luz ambiental
    const ambient_light = new THREE.AmbientLight('#FFF', 0.5)
    scene.add(ambient_light)
    // Punto de luz
    const light = new THREE.PointLight('#FFF', 1, 100)
    light.position.set(15, 15, 15)
    scene.add(light)
    // Permite mover la camara al rededor de un objeto
    const controls = new OrbitControls(camera, renderer.domElement)
    // Carga de modelo en formato GLB
    const loader = new GLTFLoader()
    loader.load('models/escudo_universae.glb', (gltf) => {
        const model = gltf.scene
        model.scale.set(0.3, 0.3, 0.3)
        model.position.set(0, 0, 0)
        scene.add(model)
        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
            // Rotar modelo
            model.rotation.y += 0.01
        }
        animate();
    }, undefined, (error) => {
        console.error(error)
    })
}

export default Logo3d;
