import {ennemies} from '../store/game.js';

AFRAME.registerComponent('animation-bandit', {
schema: {
    },
  
    init: function() {
        this.el.addEventListener('click', ()=>{
            this.el.setAttribute('animation', 'property: rotation; to: -90 0 0; dur: 500; easing: linear; loop: false');
            this.el.removeAttribute('clickable');
            ennemies.value -= 1;
            console.log(ennemies.value);
        });
    },
  
  
  });