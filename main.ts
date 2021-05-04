let increase = 0
let mySprite = sprites.create(assets.image`Coach`, SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    let index = 0
    pause(200)
    mySprite.x += 5 + increase
    pause(200)
    mySprite.y += 6 + increase
    pause(200)
    mySprite.x += -7 - increase
    pause(200)
    mySprite.y += -8 - increase
    increase = index * 5
}
