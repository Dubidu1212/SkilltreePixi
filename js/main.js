"use strict";
exports.__esModule = true;
var PIXI = require("../lib/pixi");
var Tink = require("../lib/tink");
var SpriteUtilities = require("../lib/spriteUtilities");
var type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
//define pixi application with a certain "resolution"(not really)
var app = new PIXI.Application({ width: 256, height: 256 });
//add view to document
document.body.appendChild(app.view);
//alias renderer for quick usage
var renderer = app.renderer;
var stage = app.stage;
var Graphics = PIXI.Graphics;
//make container full screen
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);
//include tink js which is used for drag and drop stuff
var t = new Tink(PIXI, renderer.view);
var u = new SpriteUtilities(PIXI);
//define entities
var voyager = u.sprite("res/img/voyager.png", 0., 0.);
voyager.scale.set(0.1, 0.1);
stage.addChild(voyager);
t.makeDraggable(voyager);
var testButton = new Graphics();
//line Width, Color, alpha
testButton.lineStyle(2, 0x99CCFF, 1);
testButton.beginFill(0xFF9933);
//x, y, width, height, cornerRadius
testButton.drawRoundedRect(0, 0, 84, 36, 10);
testButton.endFill();
t.makeInteractive(testButton);
testButton.press = function () {
    console.log("yeet");
};
stage.addChild(testButton);
var pointer;
pointer = t.makePointer();
gameLoop();
function gameLoop() {
    //check stuff
    if (pointer.hitTestSprite(voyager)) {
        pointer.cursor = "pointer";
    }
    else {
        pointer.cusor = "auto";
    }
    //change stuff
    //schedule next frame
    requestAnimationFrame(gameLoop);
    //update all drag and drop things 
    t.update();
    //update default pixijs stage
    renderer.render(stage);
}
