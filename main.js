let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}
PIXI.utils.sayHello(type)

//define pixi application with a certain "resolution"(not really)
let app = new PIXI.Application({width:256, height: 256})

//add view to document
document.body.appendChild(app.view)
//alias renderer for quick usage
let renderer = app.renderer;

//make container full screen
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//include tink js which is used for drag and drop stuff
let t = new Tink(PIXI, renderer.view)

let u = new SpriteUtilities(PIXI)

function gameLoop(){
    //schedule next frame
    requestAnimationFrame(gameLoop)
    //update all drag and drop things 
    t.update()
    //update default pixijs stage
    renderer.render(stage)
}