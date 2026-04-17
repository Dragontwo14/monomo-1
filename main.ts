music.onEvent(MusicEvent.MelodyEnded, function () {
    basic.showString("Tschau : )")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
basic.showString("hi!")
basic.showIcon(IconNames.Happy)
