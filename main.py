Krant2 = "De mooiste kunstwerk vindt ik de sixtijnse kapel. Omdat het plafond heel mooi is."
Krant1 = "Vaticaanstad, het beste en kleinste land. Het heeft veel mooie musea en eigenlijk ook weinig. Waarom? Omdat het het kleinste land is!"
Krant3 = "YT = ZekerNietRobin Github = heckerkit2 2de Github = heckerkit"

def on_forever():
    
    def on_button_pressed_a():
        basic.show_string(Krant1)
    input.on_button_pressed(Button.A, on_button_pressed_a)
    
    
    def on_button_pressed_b():
        basic.show_string(Krant2)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    
    
    def on_button_pressed_ab():
        basic.show_string(Krant3)
    input.on_button_pressed(Button.AB, on_button_pressed_ab)
    
basic.forever(on_forever)
