<script setup>
  import { ref } from 'vue';
  import Desert from './Desert.vue';
  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';
  import '../aframe/pavage.js';
  import '../aframe/animation-bandit.js';
  import '../aframe/bind-position.js';
  import '../aframe/bind-rotation.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <!-- <a-scene stats> -->
  <a-scene stats fog="type: linear; color: #005c96; near: 1; far: 50" background="color: #005c96">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="sand" src="assets/sand.glb"></a-asset-item>
      <a-asset-item id="bridge" src="assets/old_bridge.glb"></a-asset-item>
      <a-asset-item id="mexicain" src="assets/mexican_outlaw.glb"></a-asset-item>
      <a-asset-item id="cardboard" src="assets/cardboard.glb"></a-asset-item>
      <a-asset-item id="boutton" src="assets/a_big_red_button.glb"></a-asset-item>
      <a-asset-item id="heart" src="assets/heart_in_love.glb"></a-asset-item>
      <a-asset-item id="gun" src="assets/sci-fi_pistol.glb"></a-asset-item>
    </a-assets>

    <!-- <a-entity light="type: ambient; color: #FFF; intensity: 0.1"></a-entity>
    <a-entity light="type: spot; color: #40E0D0; angle: 145;"></a-entity> -->
  
    <template v-if="allAssetsLoaded">
      <TheMainRoom />
      <Desert />
      <a-entity bind-position="target: #hand-right;" bind-rotation="target: #hand-right; convertToLocal: true;" >
        <a-entity gltf-model="#gun" position="-0.045 -0.045 0" rotation="0 270 70" scale="0.015 0.015 0.015" >
        </a-entity>
      </a-entity>
    </template>
    <TheCameraRig position="-0.8 0 6.8"/>
    <!-- position main "-0.8 0 3.8" -->
    <!-- position mini-jeu tir "0 11.3 0" -->
    <!-- appel pavage <a-entity pavage="tileSize: 1; cols: 5; rows: 5; offset: 0.1; color1: #C0C0C0; color2: #FA8072;"></a-entity> -->
  </a-scene>
</template>