# DOMotic
A webapp using jQuery simulating a few household appliances automation.

## Description

<<<<<<< HEAD
This webapp was developped from scratch with Brackets. It features a basic control panel, opening in a side panel that can be flipped, based on a jQuery plugin found here : https://nnattawat.github.io/slideReveal/. This panel contains buttons to control lights and curtains, upstairs and downstairs, as well as a temperature control and display.

The main frame displays a picture of the house with DOM elements that visually represent the state of the house appliances  controlled by the buttons (lights and curtains). The image was found here : http://moziru.com/explore/Drawn%20house/#gal_post_1562_drawn-house-2.jpg


Rendering is fully responsive and was tested with Firefox, Chrome and Edge. The side panel plugin is not well handled by IE.

Sound effects are using mp3 files found here : http://www.orangefreesounds.com/


## Use and extension

The architecture is based on a distributed modular system, where appliances are implemented as components. They are initialized and controlled in the script named **init.js**. This script handles user actions on controls and binds them to the home components (lights, curtains, temperature).


Each component gets its status values through HTTP GET requests, which is simulated with a static JSON file named **system.json** in the **data** folder. For this reason, the project files (index.html and associated files and folders) must be placed in the docroot of a plain HTTP webserver. If the index.html is opened in a browser directly from the filesystem, this communication could fail with some browsers (it doesn't with Firefox, which can hence be used for quick demo). Server updates are handled through POST requests, not simulated as data persistence is not required.

Adding a new type component requires to add a js script implementing its behaviour, an associated css, a few divs in the index to render its effect, and to update the initialization script **init.js** (data may also be added to the JSON file to set the initial status of the component).

=======
This webapp was developped from scratch with Brackets. It features a basic control panel, opening in a side panel that can be flipped, using a jQuery plugin found here : https://nnattawat.github.io/slideReveal/. This panel contains buttons to control lights and curtains in the living room and the room upstairs, as well as a temperature control and display.

The main frame displays a picture of the house with DOM elements that visually represent the state of the house appliances  controlled by the buttons (lights and curtains). The image was found here : http://moziru.com/explore/Drawn%20house/#gal_post_1562_drawn-house-2.jpg


Rendering is fully responsive and was tested with Firefox, Chrome and Edge. The side panel plugin is not well handled by IE.

Sound effects are using mp3 files found here : http://www.orangefreesounds.com/


## Use and extension

Appliances are implemented as components, with a script implementing their behaviour and a css file describing their aspect. A script called **controller.js** handles user actions on controls and binds them to the home components (lights, curtains, temperature). 

Each component gets its status values through HTTP GET requests, which is simulated with a static JSON file in the script **init\_server.js** on document load. For this reason, the project files (index.html and associated files and folders) must be placed in the docroot of a plain HTTP webserver. If the index.html is opened in a browser directly from the filesystem, this communication could fail with some browsers (it doesn't with Firefox, which can hence be used for quick demo). Server updates are handled through POST requests, not simulated as data persistence is not required.

Adding a component requires then to add a script, a stylesheet, a few divs in the index to render the effect, and to update the **controller.js** and **init\_server.js** scripts.
>>>>>>> branch 'master' of https://github.com/twoznica90/DOMotic



