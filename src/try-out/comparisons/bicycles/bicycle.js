document.addEventListener('DOMContentLoaded', function() {
    const cities = [
        { name: "Pittsburgh", score: 3 },
        { name: "San Francisco", score: 5 },
        { name: "DC", score: 1 },
        { name: "New York City", score: 4 }
    ];

    const gridContainer = document.getElementById('gridContainer');

    cities.forEach(city => {
        // Create city name element
        let cityElement = document.createElement('div');
        cityElement.textContent = city.name;

        // Create wheel container
        let wheelElement = document.createElement('div');
        wheelElement.classList.add('wheel');

        // Create SVG element
        let svgNS = "http://www.w3.org/2000/svg";
        let svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 100 100");

        // Create wheel circle
        let circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "45");
        circle.setAttribute("stroke", "black");
        circle.setAttribute("stroke-width", "3");
        circle.setAttribute("fill", "none");

        // Append circle to SVG
        svg.appendChild(circle);

        // Create spokes
        for (let i = 0; i < 12; i++) {
            let line = document.createElementNS(svgNS, "line");
            let angle = (Math.PI / 6) * i;
            let x1 = 50 + 45 * Math.cos(angle);
            let y1 = 50 + 45 * Math.sin(angle);
            line.setAttribute("x1", "50");
            line.setAttribute("y1", "50");
            line.setAttribute("x2", x1);
            line.setAttribute("y2", y1);
            line.setAttribute("stroke", "black");

            // Append spoke to SVG
            svg.appendChild(line);
        }

        // Append SVG to wheel container
        wheelElement.appendChild(svg);

        // Apply rotation based on score
        let rotationDuration = 6 - city.score; // Faster rotation for higher scores
        wheelElement.style.animation = `rotate ${rotationDuration}s linear infinite`;

        // Append elements to the grid
        gridContainer.appendChild(cityElement);
        gridContainer.appendChild(wheelElement);
    });
});
