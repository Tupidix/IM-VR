<script setup>

</script>

<template>
      <!-- Sable -->
      <a-entity position="0 10 0" clickable gltf-model="#sand" scale="100 3 100" ></a-entity>
      <!-- Ponts -->
      <a-entity position="8.698 11.700 -4.126" clickable rotation="0 46.979 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-14.913 11.700 2.562" clickable rotation="0 136.979 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-4.529 11.700 -5.820" clickable rotation="0 90 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <!-- bandit face-->
      <a-entity position="5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="2.2 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="0.7 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="-0.7 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="-2.2 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="-3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <a-entity position="-5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      <!-- bandit gauche-->
      <a-entity position="-7.790 0 3.217" rotation="0 46.979 0">
        <a-entity position="5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="2.2 12.7 -4" clickable gltf-model="#bandit" ></a-entity>
        <a-entity position="0.7 12.7 -4" clickable gltf-model="#bandit" ></a-entity>
        <a-entity position="-0.7 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-2.2 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      </a-entity>
      <!-- bandit droite -->
      <a-entity position="8.030 0 2.977" rotation="0 316.979 0">
        <a-entity position="5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="2.2 12.7 -4" clickable gltf-model="#bandit" ></a-entity>
        <a-entity position="0.7 12.7 -4" clickable gltf-model="#bandit" ></a-entity>
        <a-entity position="-0.7 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-2.2 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-3.8 12.7 -4" clickable gltf-model="#bandit"></a-entity>
        <a-entity position="-5.4 12.7 -4" clickable gltf-model="#bandit"></a-entity>
      </a-entity>
      <!-- cartons -->
      <!-- <a-entity position="5.508 29.3 -5.331" rotation="1.862 11.622 154.967" gltf-model="#cardboard" scale="10 10 10" animation="property: position; to: 5.3 50 -3; dur: 1000; easing: linear; loop: true"></a-entity>
      <a-plane color="#b58058" position="0 10.84 1.5" rotation="-90 0 0" height="10" width="10" animation="property: position; to: 0 -50 0; dur: 1000; easing: linear; loop: true"></a-plane> -->
</template>