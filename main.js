const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function create() {
  this.character = this.physics.add.sprite(400, 300, "character");
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.left.isDown) {
    this.character.setVelocityX(-160);
  } else if (this.cursors.right.isDown) {
    this.character.setVelocityX(160);
  } else {
    this.character.setVelocityX(0);
  }

  if (this.cursors.up.isDown) {
    this.character.setVelocityY(-160);
  } else if (this.cursors.down.isDown) {
    this.character.setVelocityY(160);
  } else {
    this.character.setVelocityY(0);
  }
}
