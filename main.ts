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
let cell = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 f 2 2 2 2 f 1 5 4 . . 
. 4 3 3 3 f 2 2 2 2 f 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 f f f 4 4 4 4 4 . 
. . 4 2 3 3 f 4 4 4 f 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(cell, 100, 100)
cell.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    pause(2000)
    setupCorona()
})
