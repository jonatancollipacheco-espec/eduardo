basic.forever(function () {
    basic.showIcon(IconNames.Scissors)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # # . . .
        . . # # #
        # # . . .
        # # . . .
        `)
    basic.pause(100)
})
