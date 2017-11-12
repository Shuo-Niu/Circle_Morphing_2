let cirPath = [];
let spacing = 10;

let removable = [];
let global_index = 0;

function polarToCartesian(r, angle) {
    return createVector(r * cos(angle), r * sin(angle));
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    let radius = 100;
    let i = 0;
    for (let a = 0; a < 360; a += spacing) {
        let cv = polarToCartesian(radius, a);
        cv.active = true;
        cirPath.push(cv);
        if (a % 120 == 0) {
            cv.fixed = true;
        } else {
            removable.push(cv);
        }
    }
}

function draw() {
    background(220);
    translate(width / 2, height / 2);
    rotate(30);

    stroke(0);
    strokeWeight(3);
    noFill();
    beginShape();
    for (let i = 0; i < cirPath.length; i++) {
        let v = cirPath[i];
        if (v.active) {
            vertex(v.x, v.y);
        }
    }
    endShape(CLOSE);

    if (cirPath.length - global_index <= 3) {
        global_index = 0;
    }

    let v = removable[global_index++];
    if (v) {
        v.active = !v.active;
    }
}