document.addEventListener("DOMContentLoaded", () => {
  const character = document.getElementById("character");
  const gameContainer = document.getElementById("game-container");
  let x = gameContainer.clientWidth / 2 - character.clientWidth / 2;
  let y = gameContainer.clientHeight / 2 - character.clientHeight / 2;
  const speed = 5;

  character.style.left = `${x}px`;
  character.style.top = `${y}px`;

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (y > 0) y -= speed;
        break;
      case "ArrowDown":
        if (y < gameContainer.clientHeight - character.clientHeight) y += speed;
        break;
      case "ArrowLeft":
        if (x > 0) x -= speed;
        break;
      case "ArrowRight":
        if (x < gameContainer.clientWidth - character.clientWidth) x += speed;
        break;
    }
    character.style.top = `${y}px`;
    character.style.left = `${x}px`;
  });
});
