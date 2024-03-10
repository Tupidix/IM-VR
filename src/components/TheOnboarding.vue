<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>The Box</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
      <section>
        <h4>Movement modes support</h4>
        <ul>
          <li>
            Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
            control and click for shoot
          </li>
          <li>
            Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
            backward + Gaze cursor for click
          </li>
          <li>
            VR Headset – AR/VR walk + right hand to shoot and aim cursor for click
          </li>
        </ul>
      </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/a-big-red-button-78aa2ad55f3c461b84fbb85a530657e2" target="_blank">A Big Red Button</a>
          </dt><dd>
            by <a href="https://sketchfab.com/logan.bauer" target="_blank">click here for more free 3 models (Logan Bauer)</a>
          under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/cardboard-boxes-713484d8f2284528bbd28ad41e197b24" target="_blank">Cardboard Boxes</a>
          </dt><dd>
            by <a href="https://sketchfab.com/juancarloscr" target="_blank">JuanCarlos CR</a>
          under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/love-low-poly-dd3b881a34904991878dc6a5a05aa1f6" target="_blank">Love Low Poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/VladislavFehu" target="_blank">VARRRG</a>
          under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/mexican-outlaw-2270ee74361d4a5f8fab11ce64b8e7d1" target="_blank">Mexican Outlaw</a>
          </dt><dd>
            by <a href="https://sketchfab.com/JuriK" target="_blank">Juri Knauth</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/old-bridge-a8b48f98fc194c3b8c430c711a2ba06d" target="_blank">Old bridge</a>
          </dt><dd>
            by <a href="https://sketchfab.com/gunnarcorrea" target="_blank">Gunnar Correa</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sand-d491e5f026234eaea7b3a36fd48da21b" target="_blank">Sand</a>
          </dt><dd>
            by <a href="https://sketchfab.com/noortjeschuur" target="_blank">n0stardust
          </a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/sci-fi-pistol-c23394d709d14772adf355da84408edc" target="_blank">Sci-fi pistol</a>
          </dt><dd>
            by <a href="https://sketchfab.com/eugen_vahrushin" target="_blank">Eugen Vahrushin</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/wooden-sign-256975ecc4a947a79ffe2a0e963e8bbd" target="_blank">🧱Wooden Sign</a>
          </dt><dd>
            by <a href="https://sketchfab.com/carlossamuelariza" target="_blank">Carlos</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
