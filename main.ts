let Krant2 = "De mooiste kunstwerk vindt ik de sixtijnse kapel. Omdat het plafond heel mooi is."
let Krant1 = "Vaticaanstad, het beste en kleinste land. Het heeft veel mooie musea en eigenlijk ook weinig. Waarom? Omdat het het kleinste land is!"
basic.forever(function () {
    input.onButtonPressed(Button.A, function(){
     basic.showString(Krant1)
    })
input.onButtonPressed(Button.B, function(){    
        basic.showString(Krant2)
    })
})
