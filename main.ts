
let Krant2 = "De mooiste kunstwerk vindt ik de sixtijnse kapel. Omdat het plafond heel mooi is."
let Krant1 = "Vaticaanstad, het beste en kleinste land. Het heeft veel mooie musea en eigenlijk ook weinig. Waarom? Omdat het het kleinste land is!"
let Krant3 = "YT = ZekerNietRobin Github = heckerkit2 2de Github = heckerkit"
basic.forever(function () {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        basic.showString(Krant1)
    })
input.onButtonPressed(Button.B, function on_button_pressed_b() {
        basic.showString(Krant2)
            })
    input.onButtonPressed(Button.AB, function () {
        music.setVolume(255)
        for (let index = 0; index < 10; index++) {
            music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
        }
        basic.showString(Krant3)
    })
})
