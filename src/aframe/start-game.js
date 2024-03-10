import { vies, ennemies, gameCleared, miniJeux, score, numero1, numero2, numero3} from '../store/game.js';

AFRAME.registerComponent('start-game', {
    schema: {
        },
      
        init: function() {

            const camera = document.querySelector('#camera-rig');
            const mainroom = document.querySelector('#mainroom');
            const toproom = document.querySelector('#toproom');
            const boiteSol = document.querySelector('#cartonSol');
            const banditCentre = document.querySelector('#banditCentre');
            const banditGauche = document.querySelector('#banditGauche');
            const banditDroite = document.querySelector('#banditDroite');
            const coeur1 = document.querySelector('#heart1');
            const coeur2 = document.querySelector('#heart2');
            const coeur3 = document.querySelector('#heart3');
            const boutton = this.el;
            const scoreAffiche = document.querySelector('#score');
            const top1 = document.querySelector('#top1');
            const top2 = document.querySelector('#top2');
            const top3 = document.querySelector('#top3');
            const musiqueDesert = document.querySelector('#musiqueDesert');
            const minuteurEl = document.querySelector('#minuteur');
            
            let stop = 15000;
                // Fonction pour démarrer le minuteur
                function demarrerMinuteur() {
                let retireTemps = 20 * score.value;
                let tempsRestant = 10000 - retireTemps;
                stop = tempsRestant + 5000;
                    let intervalId = setInterval(function() {
                      if (tempsRestant > 0) {
                        tempsRestant -= 10; // Décrémenter de 10 millisecondes
                        let secondes = Math.floor((tempsRestant / 1000) % 60); // Calculer les secondes
                        let millisecondes = tempsRestant % 1000 / 10; // Calculer les millisecondes
              
                        // Formatage pour toujours afficher deux chiffres
                        secondes = String(secondes).padStart(2, '0');
                        millisecondes = String(millisecondes).padStart(2, '0');
              
                        // Mise à jour de l'entité texte avec le temps restant
                        minuteurEl.setAttribute('text', 'value', `${secondes}:${millisecondes}`);
                      } else {
                        clearInterval(intervalId); // Arrête le minuteur à 0
                        // Optionnel : afficher un message ou déclencher un événement
                        minuteurEl.setAttribute('text', 'value', "0");
                      }
                    }, 10); // Mettre à jour toutes les 10 millisecondes
                  }

            function revealAllHearts (x,y,z) {
                x.setAttribute('visible', 'true');
                y.setAttribute('visible', 'true');
                z.setAttribute('visible', 'true');
            }

            function animateOpen() {
                let boiteOuvre = toproom.object3D.position.y + 10;
                let solOuvre = boiteSol.object3D.position.y - 5;
                toproom.setAttribute('animation', `property: position; to: 0 ${boiteOuvre} 0; dur: 500; easing: linear; loop: false`);
                boiteSol.setAttribute('animation', `property: position; to: 0 ${solOuvre} 4.5; dur: 500; easing: linear; loop: false`);
            };

            function animateClose() {
                let boiteOuvre = toproom.object3D.position.y - 10;
                let solOuvre = boiteSol.object3D.position.y + 5;
                toproom.setAttribute('animation', `property: position; to: 0 ${boiteOuvre} 0; dur: 500; easing: linear; loop: false`);
                boiteSol.setAttribute('animation', `property: position; to: 0 ${solOuvre} 4.5; dur: 500; easing: linear; loop: false`);
            };

            function retourneUnOuDeux() {
                return Math.floor(Math.random() * 2) + 1;
            }

            function enregistreScore() {
                if (score.value >= numero1.value) {
                    numero3.value = numero2.value;
                    numero2.value = numero1.value;
                    numero1.value = score.value;
                    top3.setAttribute('text', `value: ${numero3.value};`);
                    top2.setAttribute('text', `value: ${numero2.value};`);
                    top1.setAttribute('text', `value: ${numero1.value};`);
                    scoreAffiche.setAttribute('text', `value: ${score.value}; color: #FFD700`);
                } else if (score.value >= numero2.value && score.value < numero1.value) {
                    numero3.value = numero2.value;
                    numero2.value = score.value;
                    top3.setAttribute('text', `value: ${numero3.value};`);
                    top2.setAttribute('text', `value: ${numero2.value};`);
                    scoreAffiche.setAttribute('text', `value: ${score.value}; color: #C0C0C0`);
                } else if (score.value >= numero3.value && score.value < numero2.value) {
                    numero3.value = score.value;
                    top3.setAttribute('text', `value: ${numero3.value};`);
                    scoreAffiche.setAttribute('text', `value: ${score.value}; color: #b08d57`);
                }
            }

            function lanceMiniJeu() {
                if (miniJeux.value == 1) {
                    ennemies.value = 6;

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
                        // console.log(y);

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
                    setTimeout(() => musiqueDesert.emit('play-sound-desert'), 5000);
                    setTimeout(demarrerMinuteur, 5000);
                    
                    console.log(stop);
                    setTimeout(animateClose, stop);
                    setTimeout(() => musiqueDesert.components.sound.stopSound(), stop);

                    function verificationJeu() {
                        if (ennemies.value == 0) {
                            gameCleared.value = true;
                            score.value += 1;
                            scoreAffiche.setAttribute('text', `value: ${score.value};`);
                        } else {
                            vies.value -= 1;
                        }

                        console.log("score:" + score.value);
                        console.log("vies :" + vies.value);

                        if (vies.value == 2) {
                            coeur3.setAttribute('visible', 'false');
                        } else if (vies.value == 1) {
                            coeur2.setAttribute('visible', 'false');
                        } else if (vies.value == 0) {
                            coeur1.setAttribute('visible', 'false');
                        }

                        if (vies.value > 0) {
                            lanceMiniJeu();
                        } else {
                            let boutonMonte = boutton.object3D.position.y + 2;
                            boutton.setAttribute('animation', `property: position; to: -0.68 ${boutonMonte} 5; dur: 2000; easing: linear; loop: false`);
                            boutton.setAttribute('clickable');
                            enregistreScore();
                        }
                    };                        

                    //retire tous les éléments qui possèdent la classe bandit
                    function retireBandit(){
                        const bandits = document.querySelectorAll('.bandit');
                        bandits.forEach(bandit => {
                            bandit.parentNode.removeChild(bandit);
                        });
                    };
                    setTimeout(retireBandit, 15300);
                    setTimeout(verificationJeu,15300);

                } else if (miniJeux.value == 2) {
                    //code minijeux 2
                }
            }

            this.el.addEventListener('click', ()=>{
                revealAllHearts(coeur1, coeur2, coeur3);
                boutton.removeAttribute('clickable');
                let boutonDescends = boutton.object3D.position.y -2;
                boutton.setAttribute('animation', `property: position; to: -0.68 ${boutonDescends} 5; dur: 2000; easing: linear; loop: false`);
                vies.value = 3;
                score.value = 0;
                scoreAffiche.setAttribute('text', `value: ${score.value}; color: white;`);
                gameCleared.value = false;
                lanceMiniJeu();
            });
        },
      });