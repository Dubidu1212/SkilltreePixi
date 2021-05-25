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
let renderer = app.renderer
let stage = app.stage
let Graphics = PIXI.Graphics

//make container full screen
renderer.view.style.position = "absolute"
renderer.view.style.display = "block"
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)

//include tink js which is used for drag and drop stuff
let t = new Tink(PIXI, renderer.view)

let u = new SpriteUtilities(PIXI)


//define entities
let voyager = u.sprite("res/img/voyager.png",0.,0.)
voyager.scale.set(0.1,0.1)
stage.addChild(voyager)
t.makeDraggable(voyager)

let testButton = new Graphics()
//line Width, Color, alpha
testButton.lineStyle(2, 0x99CCFF, 1)
testButton.beginFill(0xFF9933)
//x, y, width, height, cornerRadius
testButton.drawRoundedRect(0,0,84,36,10)
testButton.endFill()
t.makeInteractive(testButton)
testButton.press = () => {
    console.log("yeet")
}
stage.addChild(testButton)


let pointer
pointer = t.makePointer()
gameLoop()

function gameLoop(){
    //check stuff
    if(pointer.hitTestSprite(voyager)){
        pointer.cursor = "pointer"
    }
    else{
        pointer.cusor = "auto"
    }

    //change stuff



    //schedule next frame
    requestAnimationFrame(gameLoop)
    //update all drag and drop things 
    t.update()
    //update default pixijs stage
    renderer.render(stage)
}