let sides = (firstSide, secondSide) => {
    let {fs1, fs2, fs3, fs4} = {fs1 : firstSide.x, fs2 : firstSide.y, fs3 : firstSide.panelWidth, fs4 : firstSide.panelHeight}
    let {ss1, ss2, ss3, ss4} = {ss1 : secondSide.x, ss2 : secondSide.y, ss3 : secondSide.panelWidth, ss4 : secondSide.panelHeight}

        // oldalak kiszámítása
    return (fs1 + fs3 - impactMargin >= ss1 &&    
            fs1 <= ss1 + ss3 - impactMargin &&    
            fs2 + fs4 >= ss2 &&   
            fs2 <= ss2 + ss4 - impactMargin)      
}