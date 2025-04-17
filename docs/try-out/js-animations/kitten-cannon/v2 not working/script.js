let currentLevel = 5;
const doubts = [
    "Doubt level 5: 'I am not good enough.'",
    "Doubt level 4: 'I will never succeed.'",
    "Doubt level 3: 'I can't do this.'",
    "Doubt level 2: 'People will judge me.'",
    "Doubt level 1: 'It's too late for me to try.'"
];

function createCannonSVG() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 400 200");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "200");

    // Cannon Barrel
    const barrel = document.createElementNS(svgNS, "rect");
    barrel.setAttribute("x", "60");
    barrel.setAttribute("y", "70");
    barrel.setAttribute("width", "240");
    barrel.setAttribute("height", "40");
    barrel.setAttribute("rx", "20");
    barrel.setAttribute("ry", "20");
    barrel.setAttribute("fill", "black");

    // Cannon Carriage
    const carriage = document.createElementNS(svgNS, "polygon");
    carriage.setAttribute("points", "60,110 100,110 100,90 160,90 160,110 200,110 200,150 60,150");
    carriage.setAttribute("fill", "black");

    // Wheels
    const wheel1 = document.createElementNS(svgNS, "circle");
    wheel1.setAttribute("cx", "100");
    wheel1.setAttribute("cy", "150");
    wheel1.setAttribute("r", "20");
    wheel1.setAttribute("fill", "black");

    const wheel2 = document.createElementNS(svgNS, "circle");
    wheel2.setAttribute("cx", "160");
    wheel2.setAttribute("cy", "150");
    wheel2.setAttribute("r", "20");
    wheel2.setAttribute("fill", "black");

    // Adding elements to the SVG
    svg.appendChild(carriage);
    svg.appendChild(barrel);
    svg.appendChild(wheel1);
    svg.appendChild(wheel2);

    return svg;
}

function createCannonAndCannonball() {
    const cannonContainer = document.getElementById('cannon-container');

    // Create the cannon and append it to the container
    const cannon = createCannonSVG();
    cannon.setAttribute("onclick", "fireCannon()");
    cannonContainer.appendChild(cannon);

    // Create the SVG for the cannonball
    const svgNS = "http://www.w3.org/2000/svg";
    const cannonballSvg = document.createElementNS(svgNS, "svg");
    cannonballSvg.setAttribute("id", "cannonball");
    cannonballSvg.setAttribute("width", "20");
    cannonballSvg.setAttribute("height", "20");
    cannonballSvg.setAttribute("class", "cannonball");

    const cannonballCircle = document.createElementNS(svgNS, "circle");
    cannonballCircle.setAttribute("cx", "10");
    cannonballCircle.setAttribute("cy", "10");
    cannonballCircle.setAttribute("r", "10");
    cannonballCircle.setAttribute("fill", "black");

    cannonballSvg.appendChild(cannonballCircle);
    document.body.appendChild(cannonballSvg);
}

function fireCannon() {
    const cannonball = document.getElementById('cannonball');
    cannonball.style.display = 'block';
    cannonball.style.left = '100px';
    cannonball.style.top = '100px';
    cannonball.classList.add('fire-cannonball');

    cannonball.addEventListener('animationend', () => {
        cannonball.classList.remove('fire-cannonball');
        cannonball.style.backgroundColor = 'darkred';
        setTimeout(() => {
            cannonball.style.display = 'none';
            cannonball.style.backgroundColor = 'black';
            removeDoubtLevel();
        }, 100);
    });
}

function removeDoubtLevel() {
    if (currentLevel > 0) {
        const levelId = `level${currentLevel}`;
        const level = document.getElementById(levelId);
        level.style.display = 'none';
        currentLevel--;
        updateDoubtText();
    }
}

function updateDoubtText() {
    const doubtText = document.getElementById('doubt-text');
    if (currentLevel > 0) {
        doubtText.innerText = doubts[5 - currentLevel];
    } else {
        doubtText.innerText = "All doubts are cleared!";
    }
}

// Create the cannon and cannonball SVG elements on page load
window.onload = createCannonAndCannonball;