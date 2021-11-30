const canvasWidth = 600
const canvasHeight = 600
const backgroundColor = 20
const panelDimension = 30
const timeInterval = 500
const impactMargin = 1
const marginBlockBeginning = 2
const startingPoints = 0
const begginingPoint = 0
//Az alakzatok megalkotása
const O = [ [1, 1], 
                [1, 1] 
              ]

const I = [ [0, 1, 0, 0], 
                [0, 1, 0, 0],
                [0, 1, 0, 0], 
                [0, 1, 0, 0]
              ]

const S = [ [0, 0, 0], 
                [0, 1, 1],
                [1, 1, 0]
              ]

const Z = [ [0, 0, 0], 
                [1, 1, 0],
                [0, 1, 1]
              ]

const L = [ [1, 0, 0], 
                [1, 0, 0],
                [1, 1, 0]
              ]

const J = [ [0, 0, 1], 
                [0, 0, 1],
                [0, 1, 1]
              ]

const T = [ [0, 0, 0], 
                [1, 1, 1],
                [0, 1, 0]
              ]
const A = [ [1]
            ]
const W = [ [0, 1], 
            [0, 1]
          ]
const blocks = [O, I, S, Z, L, J, T,A,W]


//Az alakzatok színei

const lightblue = {r : 0, g : 128, b : 255}
const blue = {r : 0, g : 0, b : 255}
const dark = {r : 50,  g : 55,  b : 100}

const colors = [lightblue,blue,dark]