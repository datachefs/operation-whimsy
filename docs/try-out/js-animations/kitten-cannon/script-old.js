function createCannonSVG(variation) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "200");

    const cannon = document.createElementNS(svgNS, "rect");
    cannon.setAttribute("x", "40");
    cannon.setAttribute("y", "80");
    cannon.setAttribute("width", "120");
    cannon.setAttribute("height", "40");
    cannon.setAttribute("fill", "black");

    const wheel1 = document.createElementNS(svgNS, "circle");
    wheel1.setAttribute("cx", "50");
    wheel1.setAttribute("cy", "130");
    wheel1.setAttribute("r", "20");
    wheel1.setAttribute("fill", "black");

    const wheel2 = document.createElementNS(svgNS, "circle");
    wheel2.setAttribute("cx", "150");
    wheel2.setAttribute("cy", "130");
    wheel2.setAttribute("r", "20");
    wheel2.setAttribute("fill", "black");

    svg.appendChild(cannon);
    svg.appendChild(wheel1);
    svg.appendChild(wheel2);

    switch (variation) {
        case 2:
            const muzzle = document.createElementNS(svgNS, "rect");
            muzzle.setAttribute("x", "150");
            muzzle.setAttribute("y", "60");
            muzzle.setAttribute("width", "30");
            muzzle.setAttribute("height", "20");
            muzzle.setAttribute("fill", "black");
            svg.appendChild(muzzle);
            break;
        case 3:
            const shield = document.createElementNS(svgNS, "polygon");
            shield.setAttribute("points", "60,80 140,80 100,50");
            shield.setAttribute("fill", "black");
            svg.appendChild(shield);
            break;
        case 4:
            const barrel = document.createElementNS(svgNS, "rect");
            barrel.setAttribute("x", "20");
            barrel.setAttribute("y", "70");
            barrel.setAttribute("width", "60");
            barrel.setAttribute("height", "20");
            barrel.setAttribute("fill", "black");
            svg.appendChild(barrel);
            break;
        default:
            break;
    }

    return svg;
}

document.getElementById("cannon1").appendChild(createCannonSVG(1));
document.getElementById("cannon2").appendChild(createCannonSVG(2));
document.getElementById("cannon3").appendChild(createCannonSVG(3));
document.getElementById("cannon4").appendChild(createCannonSVG(4));
