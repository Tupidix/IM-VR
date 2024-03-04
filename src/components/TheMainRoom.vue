<script setup>
import '../aframe/start-game.js';
</script>

<template>
  
<a-entity id="mainroom">
    <!-- cartons -->
    <a-entity id="toproom">
      <a-entity position="5.508 18.3 -2.331" rotation="1.862 11.622 154.967" id="carton" gltf-model="#cardboard" scale="10 10 10"></a-entity>
      <!-- scores -->
      <a-entity text="value: Score; align: center;" position="-0.530 5.5 2.151" scale="15 15 15" ></a-entity>
      <a-entity text="value: 0; align: center;" id="score" position="-0.530 3 2.151" scale="100 100 100" ></a-entity>
      <a-entity text="value: Top Scores; align: center;" position="-3.2 4 5.2" scale="15 15 15" rotation="0 90 0"></a-entity>
      <a-entity position="0 0 0.3">
      <a-entity text="value: 1st: ; align: center; color: #FFD700;"  position="-3.2 3 7.2" scale="10 10 10" rotation="0 90 0"></a-entity>
      <a-entity text="value: 0 ; align: center; color: #FFD700;" id="top1" position="-3.2 3 6.5" scale="10 10 10" rotation="0 90 0"></a-entity>
      <a-entity text="value: 2nd: ; align: center; color: #C0C0C0;"  position="-3.2 3 5.2" scale="10 10 10" rotation="0 90 0"></a-entity>
      <a-entity text="value: 0 ; align: center; color: #C0C0C0;" id="top2" position="-3.2 3 4.5" scale="10 10 10" rotation="0 90 0"></a-entity>
      <a-entity text="value: 3rd: ; align: center; color: #b08d57;"  position="-3.2 3 3.2 " scale="10 10 10" rotation="0 90 0"></a-entity>
      <a-entity text="value: 0 ; align: center; color: #b08d57;" id="top3" position="-3.2 3 2.5" scale="10 10 10" rotation="0 90 0"></a-entity>
    </a-entity>

        <a-entity id="coeurs" position="-0.2 1.5 0">
          <a-entity gltf-model="#heart" id="heart2" class="heart" scale=".006 .006 .006" position="0 2 3" visible="false"></a-entity>
          <a-entity gltf-model="#heart" id="heart1" class="heart" scale=".006 .006 .006" position="-2 2 3" visible="false"></a-entity>
          <a-entity gltf-model="#heart" id="heart3" class="heart" scale=".006 .006 .006" position="2 2 3" visible="false"></a-entity>
        </a-entity>
    </a-entity>

      <a-plane color="#b58058" position="0 0 4.5" rotation="-90 0 0" id="cartonSol" height="10" width="10"></a-plane>
      <a-entity position="-0.68 0 5" scale="0.002 0.002 0.002" id="boutton" start-game clickable gltf-model="#boutton"></a-entity>
</a-entity>


    

</template>