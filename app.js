const cols = document.querySelector(".col");

function gerenerateRandomColor() {
  // RGB
  // #FF0000
  // #00FF00
  // #0000FF

  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i += 1) {
    color += hexCodes[Math.floor(Math.random)];
  }
}

function setRandomcolors() {
  cols.array.forEach((col) => {
    console.log(col);
  });
}

setRandomcolors();
