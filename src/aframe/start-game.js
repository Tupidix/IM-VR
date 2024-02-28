import { vies } from '../store/game.js';

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
            var miniJeux = 0;
            var gameCleared = false;

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
                console.log(boite.outerHTML);
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
                if (vies.value> 0) {
                    gameCleared = false;
                    miniJeux = 1;

                        if (miniJeux == 1) {
                        var ennemis = 6;
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

                        //prend au hasard 2 valeurs de banditposx et les push dans banditselectionnes
                        for (let i = 0; i < 2; i++) {
                            let bandit = banditPosXCopieFace.splice(Math.floor(Math.random() * banditPosXCopieFace.length), 1);
                            banditFace.push(bandit);
                        }

                        banditFace.forEach(bandit => {
                            const newBandit = document.createElement('a-entity');
                            newBandit.setAttribute('position', `${bandit} 12.7 -4`);
                            newBandit.setAttribute('animation-bandit', '');
                            newBandit.setAttribute('clickable', '');
                            newBandit.setAttribute('gltf-model', '#mexicain');
                            banditCentre.appendChild(newBandit);
                        });

                        for (let i = 0; i < 2; i++) {
                            let bandit = banditPosXCopieGauche.splice(Math.floor(Math.random() * banditPosXCopieGauche.length), 1);
                            tabBanditGauche.push(bandit);
                        }

                        tabBanditGauche.forEach(bandit => {
                            const newBandit = document.createElement('a-entity');
                            newBandit.setAttribute('position', `${bandit} 12.7 -4`);
                            newBandit.setAttribute('animation-bandit', '');
                            newBandit.setAttribute('clickable', '');
                            newBandit.setAttribute('gltf-model', '#mexicain');
                            banditGauche.appendChild(newBandit);
                        });

                        for (let i = 0; i < 2; i++) {
                            let bandit = banditPosXCopieDroite.splice(Math.floor(Math.random() * banditPosXCopieDroite.length), 1);
                            tabBanditDroite.push(bandit);
                        }

                        tabBanditDroite.forEach(bandit => {
                            const newBandit = document.createElement('a-entity');
                            newBandit.setAttribute('position', `${bandit} 12.7 -4`);
                            newBandit.setAttribute('animation-bandit', '');
                            newBandit.setAttribute('clickable', '');
                            newBandit.setAttribute('gltf-model', '#mexicain');
                            banditDroite.appendChild(newBandit);
                        });

                        console.log(banditFace);
                        console.log(banditGauche);
                        console.log(banditDroite);
                        


                        setTimeout(animateOpen, 5000);
                        setTimeout(animateClose, 13000);
                        if (ennemis = 0) {
                            gameCleared = true;
                        } else {
                            vies.value -= 1;
                        }
                        console.log(vies.value);
                    } else if (miniJeux == 2) {
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