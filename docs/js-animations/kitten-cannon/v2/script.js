let currentLevel = 5;

function createCannonSVG() {
    console.log('here we go')
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
    console.log('firing cannon')
    const cannon = document.getElementById('cannon');
    const cannonball = document.createElement('div');
    cannonball.style.width = '20px';
    cannonball.style.height = '20px';
    cannonball.style.backgroundColor = 'darkblue';
    cannonball.style.borderRadius = '50%';
    cannonball.style.position = 'absolute';
    cannonball.style.left = '300px';
    cannonball.style.top = '120px'; // Adjusted to align with the cannon barrel

    document.body.appendChild(cannonball);

    cannon.style.animation = 'shake 0.2s';

    setTimeout(() => {
        cannon.style.animation = '';
    }, 200);

    let position = 300;
    const interval = setInterval(() => {
        position += 10;
        cannonball.style.left = `${position}px`;

        // Check if cannonball has reached the target
        const targetLeft = document.querySelector('#doubt').getBoundingClientRect().left;
        if (position > targetLeft - 20) { // Adjusted distance to match target position
            clearInterval(interval);
            document.body.removeChild(cannonball);
            console.log(`Cannonball reached target at position: ${position}px`);

            if (currentLevel > 0) {

                const svgObject = document.getElementById('doubt');
                    // Get the SVG document inside the <object> element
                    const svgDoc = svgObject.contentDocument;
                    console.log('SVG is', svgObject, svgDoc);




                const levelElement = svgDoc.getElementById('level5');
                if (levelElement) {
                    console.log(`Hiding level${currentLevel}`);
                    levelElement.style.visibility = 'hidden';
                    currentLevel--;
                } else {
                    console.log(`Element with id level${currentLevel} not found`);
                }
            } else {
                console.log('All levels already hidden');
            }
        }
    }, 20);
}

document.getElementById('cannon').appendChild(createCannonSVG());
document.getElementById('fire-button').addEventListener('click', fireCannon);
