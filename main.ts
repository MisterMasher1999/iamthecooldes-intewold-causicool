input.onButtonPressed(Button.A, function () {
    Character.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    Character.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Character.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Character.change(LedSpriteProperty.Y, -1)
})
let Random = 0
let Character: game.LedSprite = null
Character = game.createSprite(2, 2)
let Life = 5
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
Enemy.set(LedSpriteProperty.Blink, 10)
let SCORE = 0
loops.everyInterval(1000, function () {
    SCORE += 1
})
basic.forever(function () {
    if (Character.isTouching(Enemy)) {
        Life += -1
        if (Life == 0) {
            Character.delete()
            Enemy.delete()
            basic.showString("Score")
            basic.showString("" + (SCORE))
            basic.pause(2000)
            for (let index = 0; index < 1000000; index++) {
                basic.showString("GAME OVER")
            }
        }
    }
})
basic.forever(function () {
    if (Random == 1) {
        Enemy.change(LedSpriteProperty.X, -1)
    } else if (Random == 2) {
        Enemy.change(LedSpriteProperty.Y, -1)
    } else if (Random == 3) {
        Enemy.change(LedSpriteProperty.X, 1)
    } else if (Random == 4) {
        Enemy.change(LedSpriteProperty.Y, 1)
    } else {
    	
    }
})
loops.everyInterval(randint(0, 2500), function () {
    Random = randint(0, 4)
    basic.pause(randint(0, randint(25, 75)))
    Random = 0
})
