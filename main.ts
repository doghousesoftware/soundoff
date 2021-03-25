input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    music.playMelody("C C5 E A G D C - ", 120)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(988)
})
