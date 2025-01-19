input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.toggle(Spieler, 4)
    if (Spieler > 0) {
        Spieler += -1
    }
    led.plot(Spieler, 4)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Position = 0
    for (let Feuer = 0; Feuer <= 3; Feuer++) {
        led.plot(Position, 3 - Feuer)
        basic.pause(10)
    }
    if (Position == Invader || Position == Invader + 1) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        for (let Index = 0; Index <= 4; Index++) {
            basic.setLedColor(0xff0000)
            basic.pause(50)
            basic.setLedColor(0xffff00)
            basic.pause(50)
        }
        basic.setLedColor(0x00ffff)
    }
    basic.pause(100)
    for (let Feuer = 0; Feuer <= 3; Feuer++) {
        led.toggle(Position, Feuer)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.toggle(Spieler, 4)
    if (Spieler > 0) {
        Spieler += 1
    }
    led.plot(Spieler, 4)
})
let Invader = 0
let Position = 0
let Spieler = 0
basic.setLedColor(0x00ffff)
Spieler = 2
led.plot(Spieler, 4)
let Treffer = false
basic.forever(function () {
    Invader = randint(0, 3)
    for (let Index = 0; Index <= 4; Index++) {
        if (Treffer == false) {
            led.plot(Invader, Index)
            led.plot(Invader + 1, Index)
            basic.pause(300)
            led.toggle(Invader, Index)
            led.toggle(Invader + 1, Index)
        } else if (false) {
            Index = 0
            Invader = randint(0, 3)
            Treffer = false
        }
    }
    music.playTone(175, music.beat(BeatFraction.Half))
    for (let Index = 0; Index <= 4; Index++) {
        basic.setLedColor(0xb09eff)
        basic.pause(50)
        basic.setLedColor(0x007fff)
        basic.pause(50)
    }
})
