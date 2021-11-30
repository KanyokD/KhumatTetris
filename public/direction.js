let intactBlock
let surface
let points
//Beállítások
function setup() {
    createCanvas(canvasWidth, canvasHeight)
    generateNewBlock()
    surface = new Surface()
    setInterval( () =>  gravity() , timeInterval)
    points = startingPoints
}
//Megjelenítések
function draw() {
    background(backgroundColor)
    surface.show()
    intactBlock.show()
    drawText(points)
}
// Írányítás ki alakítása //space forgatás /bal-jobb nyíl mozgatás lefelé nyíl gyórsítás
function keyPressed() {
    if (keyCode === 32) 
        intactBlock.rotation()
    if (keyCode === RIGHT_ARROW && !intactBlock.impaction(panel => panel.x + panelDimension === width) && !surface.blockImpact(intactBlock, (side1, side2) => sides(side1, side2), (panel) => panel.x += panelDimension)) 
        intactBlock.x += panelDimension
    if (keyCode === LEFT_ARROW && !intactBlock.impaction(panel => panel.x === begginingPoint) && !surface.blockImpact(intactBlock, (side1, side2) => sides(side1, side2), (panel) => panel.x -= panelDimension)) 
        intactBlock.x -= panelDimension
    if (keyCode === DOWN_ARROW) 
        gravity()
}
//El indulási pont beállítása az elemnek
let gravity = () => {
    if(!intactBlock.impaction(panel => panel.y + panelDimension === height) && !surface.blockImpact(intactBlock)){
        intactBlock.y += panelDimension
    } else {
        intactBlock.impaction(panel => panel.y === begginingPoint) ? setup() : surface.placeBlock(intactBlock); surface.cleanFilledRows(); generateNewBlock()
    }
}
// Új elem random generálása
let generateNewBlock = () => {
    let index = Math.floor((Math.random() * blocks.length))
    let indexColor = Math.floor((Math.random() * colors.length))
    intactBlock = new Block(blocks[index], width / 2, -panelDimension * marginBlockBeginning, colors[indexColor])
}
// Pont számláló elhelyezése és beállítása
let drawText = (txt) => {
    textSize(32)
    textAlign(RIGHT)
    fill(255, 255, 255)
    text(txt, canvasWidth, panelDimension)
}

