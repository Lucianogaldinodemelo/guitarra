input.onPinPressed(TouchPin.P0, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(370, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(147, music.beat(BeatFraction.Whole))
})
