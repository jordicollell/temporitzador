function alarma () {
    for (let index = 0; index < 10; index++) {
        led.plot(2, 2)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(100)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(392, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y)
            basic.pause(100)
        }
    }
    alarma()
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
