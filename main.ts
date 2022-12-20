controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    carnival.startCountdownGame(20, carnival.WinTypes.Lose)
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myBalloon: Sprite = null
scene.setBackgroundColor(9)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
