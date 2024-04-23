# Express.js Note Taker

## Description

Every project needs a professional README to help document information about the project, and to help users interface with the application/website/product itself.

Sometimes it can be difficult to create a new README from scratch, so I've programmed a tool that should make this process a lot easier!

Using Node.js, NPM, and Inquirer, this application lets users answer prompts via the terminal that will then be passed into the JavaScript file. From there, a new README.md file will be created with all of the information that has been input from the user.

While completing this project, I learned about how best to utilize different forms of input for inquirer, and making sure any NPM dependencies were taken care of.

## Installation

N/A

## Usage

To use the deployed application, follow [this link](https://youtube.com).

Users will be greeted by a landing page with a title and a button. Click on the "Get Started" button to enter into the Notes page.

The Notes page has three main sections: a header; a left column; a right column.

The right column (the biggest area on the screen) is the main display for entering a new note or viewing an old one. 

To get started, click in the field called "Note Title" and enter your desired title. Then click in the "Note Text" field and enter desired text.

As text gets entered into these fields, a button appears in the top right corner of the header labeled "Clear Form." Clicking this button will clear any entered text.

Once a title and body text have been entered, a new button appears to the left of the "Clear Form" button - "Save Note." Clicking this button will add a new entry into the left-hand column of notes, and clear the existing field of text.

To view a saved note, simply click on the note's title. Its contents will be displayed in the main note area.

**Coming Soon:** Delete Functionality - if you click the red trash can icon on a note, it will soon be able to be deleted from the server's memory.

![screenshot1](./assets/images/screenshot1.png)

![screenshot2](./assets/images/screenshot2.png)

![screenshot3](./assets/images/screenshot3.png)
    

## Credits

Application functionality designed by me, James Probel, with starter code and guidelines provided by the Programming Bootcamp of UNC Chapel Hill

Thanks to NPM gnerate-unique-id for handling logic for creating new IDs for each new note:
https://www.npmjs.com/package/generate-unique-id


## License

N/A
