let odd_num = 0
input.onButtonPressed(Button.A, function () {
    odd_num = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(odd_num)
        odd_num += 2
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211108")
})
