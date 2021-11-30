// Játék tulajdonságainak beállítása az az amiben az elemek fognak potyogni
class Panel {
    constructor(x = 0, y = 0, panelWidth = 60, panelHeight = 60, color = {r : 0, g : 0, b : 0}){
        this.x = x
        this.y = y
        this.panelWidth = panelWidth
        this.panelHeight = panelHeight
        this.color = color
    }
    //Megjelenítés
    show(){
        let actualColor = this.color
        fill(actualColor.r, actualColor.g, actualColor.b)
        rect(this.x, this.y, this.panelWidth, this.panelHeight)
    }
}