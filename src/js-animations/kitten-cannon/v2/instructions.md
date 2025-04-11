now we want to modify it so that when the cannonball reaches the doubt image, a piece of the doubt image breaks off.  Here's what we need to do:

doubt.svg has several ids built into it, level1 - level5.  Each time a cannon ball reaches the doubt image, get rid of the next part of the svg image by making it invisible.  For example, the first cannon ball should make id level5 invisible, the second one3 should make level4 invisible, etc.  Once a cannon ball has eliminted level1, firing a cannon ball should not change the doubt image.

As an expert javascript developer, please change the javascript to carry out this new approach.  Make the absolute minimum changes to the JS.  If you need to change the css file you can, but again only make minimal changes.  Thanks!

const levelElement = svgDoc.getElementById(`level${currentLevel}`);

const svgObject = document.getElementById('doubt');