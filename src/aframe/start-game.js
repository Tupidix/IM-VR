import { vies, ennemies, gameCleared, miniJeux } from '../store/game.js';

AFRAME.registerComponent('start-game', {
    schema: {
        },
      
        init: function() {

            const camera = document.querySelector('#camera-rig');
            const mainroom = document.querySelector('#mainroom');
            const boite = document.querySelector('#carton');
            const boiteSol = document.querySelector('#cartonSol');
            const banditCentre = document.querySelector('#banditCentre');
            const banditGauche = document.querySelector('#banditGauche');
            const banditDroite = document.querySelector('#banditDroite');

            //watch life if 0 =< end game
            // watch((vies, (value) => {
            //     if (value <= 0) {
            //         console.log('game over');
            //     }
            // }));


            function animateOpen() {
                var boiteOuvre = boite.object3D.position.y + 10;
                var solOuvre = boiteSol.object3D.position.y - 5;
                boite.setAttribute('animation', `property: position; to: 5.508 ${boiteOuvre} -2.331; dur: 1000; easing: linear; loop: false`);
                boiteSol.setAttribute('animation', `property: position; to: 0 ${solOuvre} 4.5; dur: 1000; easing: linear; loop: false`);
            };

            function animateClose() {
                var boiteOuvre = boite.object3D.position.y - 10;
                var solOuvre = boiteSol.object3D.position.y + 5;
                boite.setAttribute('animation', `property: position; to: 5.508 ${boiteOuvre} -2.331; dur: 1000; easing: linear; loop: false`);
                boiteSol.setAttribute('animation', `property: position; to: 0 ${solOuvre} 4.5; dur: 1000; easing: linear; loop: false`);
            };

            function retourneUnOuDeux() {
                return Math.floor(Math.random() * 2) + 1;
            }

            this.el.addEventListener('click', ()=>{
                var boutonDescends = this.el.object3D.position.y -5;
                this.el.setAttribute('animation', `property: position; to: 0 ${boutonDescends} 0; dur: 3000; easing: linear; loop: false`);
                vies.value = 3;
                if (vies.value > 0) {
                    gameCleared.value = false;
                    miniJeux.value = 1;

                        if (miniJeux.value == 1) {
                        ennemies.value =6;
                        //set camera y position with object3d
                        camera.object3D.position.y = 11;
                        mainroom.object3D.position.y = 11;

                        //fait appraître les bandits
                        let banditPosX = [5.4, 3.8, 2.2, 0.7, -0.7, -2.2, -3.8, -5.4];
                        let banditPosXCopieFace = [...banditPosX];
                        let banditPosXCopieGauche = [...banditPosX];
                        let banditPosXCopieDroite = [...banditPosX];
                        let banditFace = [];
                        let tabBanditGauche = [];
                        let tabBanditDroite = [];

                        //selectionne 2 bandits par ponts et les affiches
                        function afficheBandit(x, y, z) {
                            for (let i = 0; i < 2; i++) {
                                let bandit = x.splice(Math.floor(Math.random() * x.length), 1);
                                y.push(bandit);
                            }
                            console.log(y);

                            y.forEach(bandit => {
                                const newBandit = document.createElement('a-entity');
                                newBandit.setAttribute('position', `${bandit} 12.7 -4`);
                                newBandit.setAttribute('animation-bandit', '');
                                newBandit.setAttribute('class','bandit');
                                newBandit.setAttribute('clickable', '');
                                newBandit.setAttribute('gltf-model', '#mexicain');
                                z.appendChild(newBandit);
                            });
                        };
                    
                        afficheBandit(banditPosXCopieFace, banditFace, banditCentre);
                        afficheBandit(banditPosXCopieGauche, tabBanditGauche, banditGauche);
                        afficheBandit(banditPosXCopieDroite, tabBanditDroite, banditDroite);

                        setTimeout(animateOpen, 5000);
                        setTimeout(animateClose, 15000);

                        function verificationJeu() {
                            if (ennemies.value == 0) {
                                gameCleared.value = true;
                            } else {
                                vies.value -= 1;
                            }
                            console.log(vies.value);
                        };                        

                        //retire tous les éléments qui possèdent la classe bandit
                        function retireBandit(){
                            const bandits = document.querySelectorAll('.bandit');
                            bandits.forEach(bandit => {
                                bandit.parentNode.removeChild(bandit);
                            });
                        };
                        setTimeout(retireBandit, 15000);
                        setTimeout(verificationJeu,16000);

                    } else if (miniJeux.value == 2) {
                        //code minijeux 2

                        // var ennemis = 6;

                        // //set camera y position with object3d
                        // camera.object3D.position.y = 11;
                        // mainroom.object3D.position.y = 11;

                        // setTimeout(animateOpen, 3000);
                        // if (ennemis = 0) {
                        //     gameCleared = true;
                        // } else {
                        //     vies -= 1;
                        // }
                        // setTimeout(animateClose, 13000);
                    }
                } else if (vies.value = 0) {
                    var boutonMonte = this.el.object3D.position.y +5;
                this.el.setAttribute('animation', `property: position; to: 0 ${boutonMonte} 0; dur: 3000; easing: linear; loop: false`);
                }
            });
        },
      });