AFRAME.registerComponent('animation-bandit', {
schema: {
    },
  
    init: function() {
        console.log('animation-bandit');
        this.el.addEventListener('click', ()=>{
            this.el.setAttribute('animation', 'property: rotation; to: -90 0 0; dur: 500; easing: linear; loop: false');
            ennemis -= 1;
        });
    },
  
  
  });