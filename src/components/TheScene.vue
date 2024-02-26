<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';
  import '../aframe/pavage.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <!-- <a-scene> -->
  <a-scene stats fog="type: linear; color: #005c96; near: 1; far: 50" background="color: #005c96">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="cardboard" src="assets/cardboard.glb"></a-asset-item>
    </a-assets>

    <!-- <a-entity light="type: ambient; color: #FFF; intensity: 0.1"></a-entity>
    <a-entity light="type: spot; color: #40E0D0; angle: 145;"></a-entity> -->
  
    <template v-if="allAssetsLoaded">
      <a-ocean color="#92E2E2" width="100" depth="100" density="50" speed="0.3" amplitude="0" amplitude-variance="0.1"></a-ocean>
      <a-ocean color="#92E2E2" width="100" depth="100" density="50" speed="0.3"  amplitude="0"  amplitude-variance="0.15"></a-ocean>
      <a-entity pavage="tileSize: 1; cols: 5; rows: 5; offset: 0.1; color1: #C0C0C0; color2: #FA8072;"></a-entity>
      <a-box color="#FFF"></a-box>
      
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
  </a-scene>
</template>