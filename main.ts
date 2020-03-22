function setupBadCorona () {
    BadCorona = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . a . . . . . 
. . . . . . . . . a . . . . a . 
. . . . . . . . a . . . . a . . 
. . . c c c b a b b b b b . a . 
. . . a c c b b b b b b b a . . 
. . a c c c c b b b a b b b b a 
. a . c c c c b b b b a b b b a 
. a . c c c c c b b b b a b b a 
. . . c c a c c c c b b a b a . 
. . . c c c a a c c b b b b b . 
. . . . c c c c a c c c b b b . 
. . . . a . c c c c c c b b b . 
. . . a . . . . a c c c c c a . 
. . a . . . . . . a . . . . . a 
. . . a . . . . a . . . . . a . 
`, SpriteKind.Enemy)
    BadCorona.setPosition(Math.randomRange(3, 150), 0)
    BadCorona.setVelocity(30, 100)
}
function setupCorona () {
    corona = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 . . 8 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . 8 9 9 9 9 9 9 8 . . . . . 
. . . . 9 6 9 9 6 9 . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . 8 9 9 6 6 9 9 8 . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 8 . . 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    corona.setPosition(0, Math.randomRange(3, 110))
    corona.setVelocity(70, 10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let corona: Sprite = null
let BadCorona: Sprite = null
let cell = sprites.create(img`
. . . . c c c c c . c c c . 
. . . c c a a a a c c c c c 
. . c a a a a a a a c c c c 
. . c a a a a a a 1 a c c c 
. c a a a a a a a a 1 1 c . 
. c a a e a a a a a c c c . 
. c c e e e e f a a c c c . 
. c c e e e f b f e e c c . 
. . c c 4 4 f 1 e 4 e c . . 
. . . c 4 4 4 4 e c c c . . 
. . . c e e e e e e c . . . 
. . . c 1 1 1 e 4 4 e . . . 
. . . c 1 1 1 e 4 4 e . . . 
. . . c d d d c e e c . . . 
. . . . c c c c c c . . . . 
. . . . . . c c c . . . . . 
`, SpriteKind.Player)
controller.moveSprite(cell, 100, 100)
cell.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
let firstCorInterval = 2000
let secondCorInterval = 4000
game.onUpdateInterval(firstCorInterval, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(firstCorInterval, function () {
    setupCorona()
})
game.onUpdateInterval(secondCorInterval, function () {
    setupBadCorona()
})
