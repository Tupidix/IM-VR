<script setup>
import '../aframe/start-game.js';
</script>

<template>
  
<a-entity id="mainroom">
    <!-- cartons -->
      <a-entity position="5.508 18.3 -2.331" rotation="1.862 11.622 154.967" id="carton" gltf-model="#cardboard" scale="10 10 10"></a-entity>
      <a-plane color="#b58058" position="0 0 4.5" rotation="-90 0 0" id="cartonSol" height="10" width="10"></a-plane>
      <a-entity position="-0.68 0 5" scale="0.002 0.002 0.002" start-game clickable gltf-model="#boutton"></a-entity>
</a-entity>
<!-- animation sol: animation="property: position; to: 0 -50 0; dur: 1000; easing: linear; loop: true" -->
<!-- animation boite: animation="property: position; to: 5.3 50 -3; dur: 1000; easing: linear; loop: true" -->

    

</template>