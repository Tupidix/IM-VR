import { miniJeux} from '../store/game.js';

AFRAME.registerComponent('controller-events', {
    init: function () {
      var el = this.el;
      this.theShot = document.querySelector('#shot');
      this.shoot = this.shoot.bind(this);
        el.addEventListener('gripdown', this.shoot);
        el.addEventListener('trackpaddown', this.shoot);
        el.addEventListener('triggerdown', this.shoot);
    },

    shoot: function () {
        
        if (miniJeux.value == 1) {
            this.theShot.components.sound.stopSound();
            this.theShot.emit('play-sound-shot');
        }
    }
  });