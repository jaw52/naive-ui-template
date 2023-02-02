import { GUI } from 'dat.gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type InitState = {
	background?: string;
	fov: number;
	near: number;
	far: number;
	/* 是否开启动画 */
	enableAnimate?: boolean;
};

export class ThreeBase {
	scene: THREE.Scene;

	element: HTMLElement;

	camera: THREE.PerspectiveCamera;

	renderer: THREE.WebGLRenderer;

	control: OrbitControls;

	initState: InitState;

	clock: THREE.Clock;

	stats: null | Stats;

	mixer: null | THREE.AnimationMixer;

	constructor(element: HTMLElement, params?: Partial<InitState>) {
		this.element = element;

		this.initState = {
			fov: 60,
			near: 0.1,
			far: 1000,
			...params,
		};

		this.stats = null;
		this.mixer = null;
		this.clock = new THREE.Clock();
		this.scene = new THREE.Scene();
		this.camera = this.setupCamera();
		this.renderer = this.setupRenderer();
		this.control = this.setupControl();
	}

	private setupCamera() {
		const { fov, near, far } = this.initState;
		const aspect = this.element.offsetWidth / this.element.offsetHeight;

		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

		camera.position.set(30, 40, 60);
		camera.lookAt(this.scene.position);

		return camera;
	}

	private setupRenderer() {
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);
		if (this.initState?.background) {
			renderer.setClearColor(this.initState.background, 1.0);
		}
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.setPixelRatio(window.devicePixelRatio);

		this.element.appendChild(renderer.domElement);
		return renderer;
	}

	private setupControl() {
		const control = new OrbitControls(this.camera, this.renderer.domElement);
		// 禁止鼠标右键拖动
		control.enablePan = false;
		control.maxDistance = 200;
		control.update();
		return control;
	}

	renderModel() {
		if (this.stats !== null) {
			this.stats.update();
		}

		if (this.initState.enableAnimate) {
			const delta = this.clock.getDelta();
			(this.mixer as THREE.AnimationMixer).update(delta);
		}

		this.control.update();
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.renderModel.bind(this));
		return this;
	}

	loadGLTF(url: string, onProgress?: (v: number) => void): Promise<GLTF> {
		const loader = new GLTFLoader();

		return new Promise<GLTF>((resolve, reject) => {
			loader.load(
				url,
				(gltf) => {
					if (this.initState.enableAnimate) {
						const mixer = new THREE.AnimationMixer(gltf.scene);
						mixer.clipAction(gltf.animations[0]).play();
						this.mixer = mixer;
					}

					resolve(gltf);
				},
				(xhr) => onProgress?.(Math.round((xhr.loaded / xhr.total) * 100)),
				(error) => reject(error)
			);
		});
	}

	// ============================插件================================
	addAxesHelper(size?: number) {
		const axesHelper = new THREE.AxesHelper(size);
		this.scene.add(axesHelper);
		return this;
	}

	addGridHelper(size = 100, divisions = 10) {
		const gridHelper = new THREE.GridHelper(
			size,
			divisions,
			0xff0000,
			0x444444
		);
		this.scene.add(gridHelper);
		return this;
	}

	addGUI() {
		const gui = new GUI();
		if (this.initState?.background) {
			const sceneFolder = gui.addFolder('场景');
			sceneFolder
				.addColor(this.initState, 'background')
				.onChange((v) => this.renderer.setClearColor(v, 1.0));
		}

		const cameraFolder = gui.addFolder('摄像机');
		cameraFolder
			.add(this.camera, 'fov', 1, 180)
			.step(5)
			.onChange(() => this.camera.updateProjectionMatrix());
		cameraFolder
			.add(this.camera, 'near', 0.1, 1)
			.step(0.1)
			.onChange(() => this.camera.updateProjectionMatrix());
		cameraFolder
			.add(this.camera, 'far', 1, 2000)
			.step(100)
			.onChange(() => this.camera.updateProjectionMatrix());
		return this;
	}

	addStats() {
		// @ts-ignore
		const stats = new Stats() as Stats;
		stats.setMode(0);

		document.body.appendChild(stats.domElement);
		this.stats = stats;
		return this;
	}
}
