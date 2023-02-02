import { useMessage } from 'naive-ui';
import * as THREE from 'three';
import { ref } from 'vue';
import { ThreeBase } from './ThreeBase';

const loadLight = () => {
	// 创建全局光照
	const ambient = new THREE.AmbientLight(0xffdada);

	// 创建地平面
	const planeGeometry = new THREE.PlaneGeometry(300, 300); // 生成平面几何
	const planeMaterial = new THREE.MeshLambertMaterial();
	const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial); // 生成平面网格
	planeMesh.receiveShadow = true; // 设置平面网格为接受阴影的投影面
	planeMesh.rotation.x = -Math.PI / 2; // 绕X轴旋转90度
	planeMesh.position.y = -23;

	// 创建平行光
	const directionalLight = new THREE.DirectionalLight(0xf9e79f);
	directionalLight.position.set(-100, 50, -100);
	directionalLight.castShadow = true;

	directionalLight.shadow.mapSize.height = 1024;
	directionalLight.shadow.mapSize.width = 1024;
	directionalLight.shadow.camera.near = 20;
	directionalLight.shadow.camera.far = 4000;
	directionalLight.shadow.camera.left = -50;
	directionalLight.shadow.camera.right = 50;
	directionalLight.shadow.camera.top = 50;
	directionalLight.shadow.camera.bottom = -50;

	return { ambient, planeMesh, directionalLight };
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
			model.position.y = -22;

			model.traverse((obj) => {
				if (obj.type === 'Mesh') {
					obj.castShadow = true;
					obj.receiveShadow = true;
				}

				if (obj.type === 'SkinnedMesh') {
					// 即使物体中心点看不到也不消失（模型实际中心点位置跑到了相机的视锥体外面）
					obj.frustumCulled = false;
				}
			});

			const { ambient, planeMesh, directionalLight } = loadLight();

			if (import.meta.env.DEV) {
				threeBase
					.addStats()
					.addGridHelper(model)
					.addAxesHelper(10)
					.addDirectionalLightHelper(directionalLight, 10);
			}

			[ambient, planeMesh, directionalLight, model].forEach((item) =>
				threeBase.scene.add(item)
			);

			threeBase.render();
		} catch (error) {
			console.error(error);
			message.warning('模型加载失败');
		}
	};

	return { progress, init };
};
