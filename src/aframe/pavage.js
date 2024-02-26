AFRAME.registerComponent("pavage", {
    schema:{
    tileSize: { type: "number", default: 1 },
    cols: { type: "number", default: 1},
    rows: { type: "number", default: 1},
    offset: { type: "number", default: 0},
    color1: {type: "color", default: "#FFFFFF"},
    color2: {type: "color", default: "#000000"},
    },

    init: function () {
        console.log("Pavage initialisé");
        const data = this.data;
        const el = this.el;

        for (let i = 0; i < data.rows; i++) {
            for (let j = 0; j < data.cols; j++) {
            const posX = (i - (data.rows -1) / 2) * (data.tileSize + data.offset);
            const posY = (Math.random() * 0.5);
            const posZ = (j - (data.cols -1) / 2) * (data.tileSize + data.offset);
            

            // cree un a-box
            const boite = document.createElement('a-box');
            boite.setAttribute('position', {x: posX, y: posY, z: posZ});
            boite.setAttribute('width', data.tileSize);
            boite.setAttribute('height', data.tileSize);
            boite.setAttribute('depth', data.tileSize);
            boite.setAttribute('material', {color: (i + j) % 2 === 0 ? data.color1 : data.color2});

            el.appendChild(boite);
            console.log(boite);
            }
        }
    },
});