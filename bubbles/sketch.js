var bubbleArray = [];

function setup() {
  createCanvas(600, 600);

  for(let i = 0; i < 100; i++) {
    bubbleArray[i] = new Bubble(random(0, 600), random(0, 600));
  }
}

function draw() {
    background(0);

    bubbleArray.forEach((bubble) => {
      bubble.move();
    });
    

}
