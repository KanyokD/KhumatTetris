class Surface {
    constructor(surface = [[]], x = 0, y = 0, dimension = panelDimension, color = {r : 223, g : 255, b : 0}) {
        this.surface = surface
        this.dimension = dimension
        this.color = color
        this.x = x
        this.y = y
        this.generateSurface()
    }

    show() {
        this.surface.forEach( (row, i) => row.forEach( (panel, j) => panel === null ? this.emptyPanel() : panel.show()))
    }

    generateSurface() {
        let surfaceLength = canvasWidth / this.dimension
        this.surface = Array.from(new Array(surfaceLength), row => 
                        Array.from(new Array(surfaceLength), col => null))
    }

    emptyPanel() {
        let {r , g , b} = this.color
        stroke(r, g, b)
        fill(backgroundColor)
    }

    placeBlock(block) {
        block.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), []).forEach( panel => this.surface[panel.y / panelDimension][panel.x / panelDimension] = panel)
    }

    blockImpact(block, impact = (rect1, rect2) => sides(rect1, rect2), applyToPanel = panel => panel) {
        let panels = block.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        panels.forEach(panel => applyToPanel(panel))
        let blocksInSurface = this.surface.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        return panels.reduce( (z, panel) => blocksInSurface.filter( p => impact(panel, p)).length > 0 ? true : z , false)
    }

    cleanFilledRows() {
        let prePanelCount = this.countPanel()
        this.surface.forEach( (row, i) => { if(row.every( panel => panel != null)) { row.forEach( (element, j) =>  this.surface[i][j] = null)} })
        let postPanelCount = this.countPanel()
        prePanelCount != postPanelCount ? points += prePanelCount - postPanelCount : points = points
    }

    countPanel() {
        return this.surface.reduce( (z, row) => z += row.filter( element => element != null).length, 0)
    }
}