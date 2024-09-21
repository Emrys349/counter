input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onButtonPressed(Button.B, function () {
    number_1 += -1
    basic.showNumber(number_1)
})
// Counter
// by Tobias T.
// 5/11/18
let number_1 = 0
basic.showString("COUNTER")
