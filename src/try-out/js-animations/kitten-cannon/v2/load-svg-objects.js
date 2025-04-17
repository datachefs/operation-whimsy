function initializePage() {
    document.addEventListener('DOMContentLoaded', () => {
        // Select all SVG <object> elements
        const svgObjects = document.querySelectorAll('object[type="image/svg+xml"]');
        // Select the loading message and content container elements
        const loadingMessage = document.getElementById('loading-message');
        const contentContainer = document.querySelector('.content-container');
        // Select all buttons
        const buttons = document.querySelectorAll('button');

        let loadedCount = 0;

        // Function to check if all SVGs are loaded
        function checkAllLoaded() {
            console.log('checking loaded')
            loadedCount++;
            console.log(`SVG loaded: ${loadedCount}/${svgObjects.length}`);
            if (loadedCount === svgObjects.length) {
                // Hide the loading message and show the content
                loadingMessage.style.display = 'none';
                contentContainer.style.display = 'block';
                // Enable all buttons
                buttons.forEach(button => button.disabled = false);
                console.log('All SVGs loaded, content displayed and buttons enabled');
            }
        }

        // Add load and error event listeners to each SVG <object>
        svgObjects.forEach(svgObject => {
            console.log('Trying', svgObject)
            console.log(`Adding load event listener to SVG: ${svgObject.data}`);
            svgObject.addEventListener('load', checkAllLoaded);
            svgObject.addEventListener('error', () => {
                console.error('Error loading SVG:', svgObject.data);
                // Show an error message to the user if needed
                loadingMessage.textContent = `Error loading SVG: ${svgObject.data}`;
                // Optionally, hide the loading message and show the content even if there's an error
                loadingMessage.style.display = 'none';
                contentContainer.style.display = 'block';
                buttons.forEach(button => button.disabled = false);
            });
            console.log('Gun')
        });
        console.log('added event listener for each svg')
        loadingMessage.style.display = 'none';
        contentContainer.style.display = 'block';
        // Enable all buttons
        buttons.forEach(button => button.disabled = false);
        console.log('All SVGs loaded, content displayed and buttons enabled');
        

        // If there are no SVG objects, directly show the content
        if (svgObjects.length === 0) {
            console.warn('No SVG objects found');
            loadingMessage.style.display = 'none';
            contentContainer.style.display = 'block';
            buttons.forEach(button => button.disabled = false);
        }
    });
}

// Call the function to initialize the page
initializePage();
