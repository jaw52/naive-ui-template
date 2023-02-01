import { useCreateDiscreteApi } from '@/hooks/useCreateDiscreteApi';
import { ThreeBase } from './ThreeBase';
import * as THREE from 'three';

const loadLight = (scene: THREE.Scene) => {
	const ambient = new THREE.AmbientLight(0xaed6f1);
	scene.add(ambient);

	const directionalLight = new THREE.DirectionalLight(0xf9e79f, 0.3);
	directionalLight.position.set(50, 50, 50);

	scene.add(directionalLight);
};

export const initModel = async (ele: HTMLElement) => {
	const threeBase = new ThreeBase(ele, {
		enableAnimate: true,
	});
	const { message, loadingBar } = useCreateDiscreteApi();
	try {
		const assetUrl = new URL(
			`../../assets/model/smol_ame_in_an_upcycled_terrarium_hololiveen.glb`,
			import.meta.url
		).href;

		const gltf = await threeBase.loadGLTF(assetUrl, (v) => {
			if (v === 0) {
				loadingBar.start();
			}

			if (v === 100) {
				loadingBar.finish();
			}
		});

		gltf.scene.scale.set(25, 25, 25);
		loadLight(threeBase.scene);

		threeBase.scene.add(gltf.scene);
		// threeBase.addAxesHelper(10).addStats().addGridHelper().addGUI()

		threeBase.renderModel();
	} catch (error) {
		message.warning('模型加载失败');
	}
};
