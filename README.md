# DOMotic
A webapp using jQuery simulating a few household appliances automation.

## Description

This webapp was developped from scratch with Brackets. It features a basic control panel, opening in a side panel that can be flipped, using a jQuery plugin found here : https://nnattawat.github.io/slideReveal/. This panel contains buttons to control lights and curtains in the living room and the room upstairs, as well as a temperature control and display.

The main frame displays a picture of the house with DOM elements that visually represent the state of the house appliances  controlled by the buttons (lights and curtains). The image was found here : http://moziru.com/explore/Drawn%20house/#gal_post_1562_drawn-house-2.jpg


Rendering is fully responsive and was tested with Firefox, Chrome and Edge. The side panel plugin is not well handled by IE.

Sound effects are using mp3 files found here : http://www.orangefreesounds.com/button-click-sound/


## Use and extension

Appliances are implemented as components, with a script implementing their behaviour and a css file describing their aspect. A script called #controller.js# handles user actions on controls and binds them to the home components (lights, curtains, temperature). 

Each component gets and updates its status values through server requests, which is simulated by a static JSON file in the script *init\_server.js*. For this reason, the project files (index.html and associated files and folders) must be placed in the docroot of a plain HTTP webserver. If the index.html is opened in a browser from the filesystem, this communication could fail with some browsers (it doesn't with Firefox, which can hence be used for quick demo). Server updates are handled through POST requests, not simulated as data persistence is not required.

Adding components requires then to add a script, a stylesheet, a few divs in the index and to update the *controller.js* and *init\_server* scripts.



