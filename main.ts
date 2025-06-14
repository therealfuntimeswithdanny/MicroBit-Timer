input.onButtonPressed(Button.AB, function () {
    while (time > 0) {
        basic.pause(1000)
        time += -1
        basic.showNumber(time)
    }
    music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 120), music.PlaybackMode.UntilDone)
})
let time = 0
time = 12
basic.showNumber(time)
