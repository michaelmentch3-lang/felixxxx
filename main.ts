input.onButtonPressed(Button.A, function () {
    basic.showString("hi michael")
})
input.onButtonPressed(Button.B, function () {
    images.createBigImage(`
        # # # # # # # # # #
        # # . . # # . . # #
        # # . . . . . . # #
        # # # . . . . # # #
        # # # # . . # # # #
        `).scrollImage(1, 200)
})
