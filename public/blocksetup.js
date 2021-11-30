class Block {
    constructor(originalShape = [[]], x = 0, y = 0, color = {r : 64, g : 0, b : 0}) {
        this.originalShape = originalShape
        this.color = color
        this.x = x
        this.y = y
        this.shape = this.fillBlock(originalShape.length)
    }

    fillBlock(blockLength) {
        return Array.from(new Array(blockLength), (x, i) => 
            Array.from(new Array(blockLength), (x, j) =>  
            this.originalShape[i][j] === 1 ? new Panel(this.x + j * panelDimension, this.y + i * panelDimension, panelDimension, panelDimension, this.color) : null)
        )
    }

    show() {
        this.updateBlockPosition()
        this.shape.forEach( x => x.filter( j => j != null).forEach(panel => panel.show()))
    }

    impaction(impact) {
        return this.shape.reduce( (z, x) => z.concat(x.filter(col => col != null).filter(panel => impact(panel))), []).length > 0
    }

    rotation() {
        this.transpose()
        this.rotate()
        this.updateBlockPosition()
    }
    //Aktuális elem áthelyezése
    transpose() {
        let dimension = this.shape.length
        let aux = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null) )        
        this.shape.forEach( (x, i) => x.forEach( (e, j) => aux [j][i] = e))
        this.shape = aux
    }
    //Elemek elforgatása 
    rotate() {
        this.shape.reverse()[0].map((column, index) => 
            this.shape.map(row => row[index])
          )
    }
    //Elemek poziciójának frissitése
    updateBlockPosition() {
        this.shape.forEach( (x, i) => x.forEach( (e, j) => { if(e) { e.x = this.x + j * panelDimension; e.y = this.y + i * panelDimension; }}))
    }
}