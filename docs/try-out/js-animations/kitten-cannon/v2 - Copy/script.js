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

function fireCannon() {
    const cannon = document.getElementById('cannon');
    const cannonball = document.createElement('div');
    cannonball.style.width = '20px';
    cannonball.style.height = '20px';
    cannonball.style.backgroundColor = 'darkblue';
    cannonball.style.borderRadius = '50%';
    cannonball.style.position = 'absolute';
    cannonball.style.left = '300px';
    cannonball.style.top = '200px';
    
    document.body.appendChild(cannonball);

    cannon.style.animation = 'shake 0.2s';

    setTimeout(() => {
        cannon.style.animation = '';
    }, 200);

    let position = 300;
    const interval = setInterval(() => {
        position += 10;
        cannonball.style.left = `${position}px`;

        if (position > window.innerWidth) {
            clearInterval(interval);
            document.body.removeChild(cannonball);
        }
    }, 20);
}

document.getElementById('cannon').appendChild(createCannonSVG());
document.getElementById('fire-button').addEventListener('click', fireCannon);
