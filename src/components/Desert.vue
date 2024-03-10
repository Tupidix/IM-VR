<script setup>
  
</script>

<template>
      <!-- shot -->
      <a-entity id="shot" sound="src: #gunshot; volume: 1; positional: false; on: play-sound-shot"></a-entity>
      <a-entity id="douleur" sound="src: #pain; volume: 1; positional: false; on: play-sound-pain"></a-entity>
      <a-entity id="musiqueDesert" sound="src: #musicDesert; volume: 1; positional: false; on: play-sound-desert"></a-entity>
      <!-- navmesh -->
      <a-entity
        geometry="primitive: plane; height: 6; width: 6.2"
        position="-0.3 11 5.3"
        rotation="-90 0 0"
        data-role="nav-mesh"
        material="color: blue"
        visible="false">
      </a-entity>
      <!-- Sable -->
      <a-entity position="0 10 0" gltf-model="#sand" scale="100 3 100" ></a-entity>
      <!-- panneau -->
      <a-entity position="0 12 -2.5" gltf-model="#sign" scale="1.5 1.5 1.5" id="panneau"></a-entity>
      <!-- chrono -->
      <a-entity position="0 12.45 -2.3" text="value: 10:00; color: red; align: center;" scale="10 10 10" id="minuteur"></a-entity>
      <!-- Ponts -->
      <a-entity position="8.698 11.700 -4.126" rotation="0 46.979 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-14.913 11.700 2.562" rotation="0 136.979 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <a-entity position="-4.529 11.700 -5.820" rotation="0 90 0" gltf-model="#bridge" scale=".01 .01 .01"></a-entity>
      <!-- bandit face-->
      <a-entity id='banditCentre'>
      </a-entity>
      <!-- bandit gauche -->
      <a-entity id='banditGauche' position="-7.790 0 3.217" rotation="0 46.979 0">
      </a-entity>
      <!-- bandit droite -->
      <a-entity id='banditDroite' position="8.030 0 2.977" rotation="0 316.979 0">
      </a-entity>

      <!-- cartons -->
      <!-- <a-entity position="5.508 29.3 -5.331" rotation="1.862 11.622 154.967" gltf-model="#cardboard" scale="10 10 10" animation="property: position; to: 5.3 50 -3; dur: 1000; easing: linear; loop: true"></a-entity>
      <a-plane color="#b58058" position="0 10.84 1.5" rotation="-90 0 0" height="10" width="10" animation="property: position; to: 0 -50 0; dur: 1000; easing: linear; loop: true"></a-plane> -->

      
</template>
