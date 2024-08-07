const config = {
  type: Phaser.AUTO,
  width: document.getElementById("game-container").clientWidth,
  height: document.getElementById("game-container").clientHeight,
  backgroundColor: "#eacda3", // Set the background color to match the game container
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  parent: "game-container" // Ensure Phaser uses the existing container
};

const game = new Phaser.Game(config);

function preload() {
  // Load the sprite sheet
  this.load.spritesheet("character", "characters.png", {
    frameWidth: 32, // Width of each frame
    frameHeight: 32 // Height of each frame
  });
}

function create() {
  // Create animations for a specific character (first character on the sheet)
  this.anims.create({
    key: "walk-down",
    frames: this.anims.generateFrameNumbers("character", { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "walk-left",
    frames: this.anims.generateFrameNumbers("character", {
      start: 12,
      end: 14
    }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "walk-right",
    frames: this.anims.generateFrameNumbers("character", {
      start: 24,
      end: 26
    }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "walk-up",
    frames: this.anims.generateFrameNumbers("character", {
      start: 36,
      end: 38
    }),
    frameRate: 10,
    repeat: -1
  });

  // Create the character sprite
  this.character = this.physics.add.sprite(400, 300, "character").setScale(1);
  this.character.setCollideWorldBounds(true);

  // Create cursor keys
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  this.character.setVelocity(0);

  if (this.cursors.left.isDown) {
    this.character.setVelocityX(-160);
    this.character.anims.play("walk-left", true);
  } else if (this.cursors.right.isDown) {
    this.character.setVelocityX(160);
    this.character.anims.play("walk-right", true);
  } else if (this.cursors.up.isDown) {
    this.character.setVelocityY(-160);
    this.character.anims.play("walk-up", true);
  } else if (this.cursors.down.isDown) {
    this.character.setVelocityY(160);
    this.character.anims.play("walk-down", true);
  } else {
    this.character.anims.stop();

    // Ensure the character faces the correct direction when idle
    if (
      this.character.body.velocity.x === 0 &&
      this.character.body.velocity.y === 0
    ) {
      if (
        this.cursors.left.isUp &&
        this.cursors.right.isUp &&
        this.cursors.up.isUp &&
        this.cursors.down.isUp
      ) {
        if (this.character.anims.currentAnim) {
          switch (this.character.anims.currentAnim.key) {
            case "walk-left":
              this.character.setFrame(12);
              break;
            case "walk-right":
              this.character.setFrame(24);
              break;
            case "walk-up":
              this.character.setFrame(36);
              break;
            case "walk-down":
            default:
              this.character.setFrame(0);
              break;
          }
        }
      }
    }
  }
}
