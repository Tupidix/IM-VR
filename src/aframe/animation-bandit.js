import {ennemies} from '../store/game.js';

AFRAME.registerComponent('animation-bandit', {
schema: {
    },
  
    init: function() {
        const douleur = document.querySelector('#douleur');

        this.el.addEventListener('click', ()=>{
            this.el.setAttribute('animation', 'property: rotation; to: -90 0 0; dur: 500; easing: linear; loop: false');
            this.el.removeAttribute('clickable');
            douleur.components.sound.stopSound();
            douleur.emit('play-sound-pain');
            ennemies.value -= 1;
        });
    },
  });