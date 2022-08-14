let eyes;
let canvas;
let ctx;

const min = 10;
const max = 80;
const nParticles = 200;
const guardian = 999;

const mouse = {
  x: undefined,
  y: undefined,
};

class Eye {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    const theta = Math.atan2(dy, dx);

    // eye
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    // iris
    ctx.beginPath();
    ctx.arc(
      this.x + Math.cos(theta) * this.radius * 0.1,
      this.y + Math.sin(theta) * this.radius * 0.1,
      this.radius * 0.8,
      0,
      Math.PI * 2,
      true
    );

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // pupil
    const p_x = this.x + Math.cos(theta) * this.radius * 0.5;
    const p_y = this.y + Math.sin(theta) * this.radius * 0.5;
    const p_radius = this.radius / 2.5;

    ctx.beginPath();
    ctx.arc(p_x, p_y, p_radius, 0, Math.PI * 2, true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // pupil reflection
    ctx.beginPath();
    ctx.arc(
      p_x - p_radius / 3,
      p_y - p_radius / 3,
      p_radius / 2,
      0,
      Math.PI * 2,
      true
    );
    ctx.fillStyle = "rgba(255,255,255,.1)";
    ctx.fill();
    ctx.closePath();
  }
}

function init() {
  eyes = [];
  let counter = 0;

  while (eyes.length < nParticles && counter < guardian) {
    counter = 0;

    let eye = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: min,
    };

    while (!isValid(eye)) {
      eye.x = Math.random() * canvas.width;
      eye.y = Math.random() * canvas.height;
      eye.radius = min;
      counter++;
    }

    while (isValid(eye)) {
      eye.radius += 1;
    }

    eyes.push(new Eye(eye.x, eye.y, eye.radius));
  }
}

function isValid(c) {
  if (c.radius > max) return false;

  if (
    c.y + c.radius > canvas.height ||
    c.y - c.radius < 0 ||
    c.x + c.radius > canvas.width ||
    c.x - c.radius < 0
  ) {
    return false;
  }

  for (let i = 0; i < eyes.length; i++) {
    let previousEye = eyes[i];
    let dx = c.x - previousEye.x;
    let dy = c.y - previousEye.y;
    let distance = dx * dx + dy * dy;
    if (
      distance <
      c.radius * c.radius * 2 + previousEye.radius * previousEye.radius * 2
    ) {
      return false;
    }
  }

  return true;
}

export function animate(pos) {
  mouse.x = pos.x;
  mouse.y = pos.y;

  for (let i = 0; i < eyes.length; i++) {
    eyes[i].draw();
  }
}

export function start() {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  let scale = window.devicePixelRatio;
  ctx.scale(scale, scale);
  canvas.width = innerWidth * scale;
  canvas.height = innerHeight * scale;
  init();
  animate(mouse);
}
