import { useMessage } from 'naive-ui';
import * as THREE from 'three';
import { ref } from 'vue';
import { ThreeBase } from './ThreeBase';

const loadLight = (scene: THREE.Scene) => {
	const ambient = new THREE.AmbientLight(0xaed6f1);
	scene.add(ambient);

	const directionalLight = new THREE.DirectionalLight(0xf9e79f, 0.3);
	directionalLight.position.set(50, 50, 50);

	scene.add(directionalLight);
};

export const useModel = () => {
	const message = useMessage();
	const progress = ref(0);

	const init = async (ele: HTMLElement) => {
		try {
			const threeBase = new ThreeBase(ele, {
				enableAnimate: true,
			});

			const assetUrl = new URL(
				`../../assets/model/smol_ame_in_an_upcycled_terrarium_hololiveen.glb`,
				import.meta.url
			).href;

			const gltf = await threeBase.loadGLTF(assetUrl, (v) => {
				progress.value = v;
			});
			const { scene: model } = gltf;
			model.scale.set(20, 20, 20);
			model.position.y = -20;
			model.traverse((obj) => {
				if (obj.type === 'SkinnedMesh') {
					// 即使物体中心点看不到也不消失（模型实际中心点位置跑到了相机的视锥体外面）
					obj.frustumCulled = false;
				}
			});

			loadLight(threeBase.scene);

			threeBase.scene.add(model);
			if (import.meta.env.DEV) {
				threeBase.addAxesHelper(10).addStats().addGridHelper();
			}

			threeBase.renderModel();
		} catch (error) {
			console.error(error);
			message.warning('模型加载失败');
		}
	};

	return { progress, init };
};
