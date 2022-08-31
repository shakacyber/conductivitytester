let current = 0
input.onButtonPressed(Button.A, function () {
    current = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(current)
    basic.clearScreen()
    if (current > 700) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
	
})
