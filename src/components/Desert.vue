<script setup>
const allAssetsLoaded = ref(false);
</script>

<template>
    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="sand" src="assets/sand.glb"></a-asset-item>
      <a-asset-item id="bridge" src="assets/old_bridge.glb"></a-asset-item>
      <a-asset-item id="bandit" src="assets/mexican_outlaw.glb"></a-asset-item>
      <a-asset-item id="cardboard" src="assets/cardboard.glb"></a-asset-item>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <!-- Sable -->
      <a-entity position="0 10 0" gltf-model="#sand" scale="100 3 100" ></a-entity>
      <!-- Ponts -->
      <a-entity position="-4.529 11.700 10.467" rotation="0 90 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="8 11.700 -2.158" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-8 11.700 -2.158" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-4.529 11.700 -5.820" rotation="0 90 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <!-- bandit -->
      <a-entity position="5.3 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="3.8 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="2.2 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="0.7 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="-0.8 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="-2.4 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="-3.8 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <a-entity position="-5.3 12.7 -4" gltf-model="#bandit" scale="1 1 1" animation="property: rotation; to: 0 0 0; dur: 500; easing: linear; loop: false"></a-entity>
      <!-- cartons -->
      <!-- <a-entity position="5.508 29.3 -5.331" rotation="1.862 11.622 154.967" gltf-model="#cardboard" scale="10 10 10" animation="property: position; to: 5.3 50 -3; dur: 1000; easing: linear; loop: true"></a-entity>
      <a-plane color="#b58058" position="0 10.84 1.5" rotation="-90 0 0" height="10" width="10" animation="property: position; to: 0 -50 0; dur: 1000; easing: linear; loop: true"></a-plane> -->
      
      

      <a-entity
          geometry="primitive: plane; height: 5; width: 5"
          position="0 0 0"
          rotation="-90 0 0"
          data-role="nav-mesh"
          material="color: blue"
          visible="false">
      </a-entity>
    </template>
    <TheCameraRig position="0 11.3 0"/>
</template>