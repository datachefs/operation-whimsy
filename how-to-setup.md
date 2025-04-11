
# How to Set Up and Run This Eleventy Site

# One Time, Global Setup
This project is configured to use a **global installation of Eleventy**, keeping the repository clean and lightweight.  You only have to create the global installation once.

1) Make sure you have Node.js installed on your system.  At a command prompt:
  - node -v

If you don't have it installed, 
- Go to https://nodejs.org/
- Download the LTS (Long-Term Support) version for Windows
- Run the installer (accept defaults)
- Run the test above to make sure it's installed

2) Install npm globally:
- npm install -g @11ty/eleventy
- npm -v 

# For Each Project

## Create it Using a template

(if starting from scratch:
npm init -y
npm install --save-dev @11ty/eleventy
)


## Running the Project Locally

Navigate to the project directory:
- cd path/to/your/project

Ex: 
- cd C:\Users\aschn\Documents\GitHub\operation-whimsy

Start the Eleventy development server:
- eleventy --serve --pathprefix=""

This command starts a local server at http://localhost:8080 and rebuilds the site whenever you make changes.

http://localhost:8080



## Building for GitHub Pages

To generate the site for production (including the correct /operation-whimsy path prefix), run:

eleventy

The generated static site will be in the `_site/` directory.
