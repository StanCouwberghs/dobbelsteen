let getal = 0
function dobbelsteen () {
    basic.clearScreen()
    soundExpression.spring.play()
    getal = randint(1, 6)
    basic.pause(500)
    basic.showNumber(getal)
    if (getal == 6) {
        music.stopAllSounds()
        music.playMelody("G B A G C5 B A B ", 300)
    }
    if (getal == 1) {
        music.stopAllSounds()
        music.playMelody("C5 A B G A F G E ", 403)
    }
}
input.onButtonPressed(Button.A, function () {
    dobbelsteen()
})
input.onGesture(Gesture.Shake, function () {
    dobbelsteen()
})
basic.forever(function () {
	
})
