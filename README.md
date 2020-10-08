
# Web Development 
After months of procrastination during the pandemic, I decided to give this a go. In this repository I will be logging my progress of a Web Development course provided by [Udemy](https://www.udemy.com/ "Udemy Homepage").

#### Course: [The Complete 2020 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/ )
#### Instructor: [Dr. Angela Yu](https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/)

#### The following websites were heavily used during the course 
- [MDN Docs](https://developer.mozilla.org/en-US/)
- [Codeply](https://www.codeply.com/p)
- [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

### Course Contents

1. HTML	
	- Structuring text
	-  Lists
	-  Image Elements
	-  Links and Anchor tags
	-  Tables
	-  Forms

2. CSS
	- Inline vs Internal vs External CSS
	-  Debugging CSS code
	-  Selectors
	-  Classes vs IDs
	-  Favicons*
	-  HTML divs
	-  Box Model
	-  Positioning
	
	After completing this module I ended up styling a profile page
	#### CSS Result
	![CSS](./results/css_site.gif "Basic CSS Site")

3. Bootstrap (and some more CSS concepts)
	-  Navbar
	-  Grid Layout
	-  Containers
	-  Buttons
	-  Font Awesome*
	-  Carousel
	-  Cards
	-  Stacking order and z-index
	-  Media Query Breakpoints
	-  Refactoring (don't be a lazy and just do it!)
	
	I made a responsive landing page for an app after completing the Bootstrap module
	#### Web Version
	![catter web](./results/catter_web.gif "Web Version")
	<br>
	#### Mobile Version	
	![catter mobile](./results/catter_phone.gif "Mobile Version")

4. JavaScript ES6
	- Programming Paradigms (Conditionals, Loops etc)
	- DOM Manipulation
	- JavaScript Objects
	- Events and EventListeners
	- Higher Order Functions
	- Callbacks
	- jQuery

	Final Results after module completion

	#### Dice Game
	![dice game](./results/dice.gif "Simple Dice Game")
	<br>

	#### Drum Kit
	<video width="400" controls>
  		<source src="./results/drumkit.mp4" type="video/mp4">
	</video>
	<br>
	
	#### Simon Game
	The Game Generates a colour sequence which the user has to remember and press the appropriate buttons.
	On succesfully completing the pattern, the level is upgraded and failure to do so, resets the game.
	<br>
	<video width="400" controls>
  		<source src="./results/simon.mp4" type="video/mp4">
	</video>

5. The Backend
	- [Node.js](https://nodejs.org/en/ "NodeJS")
	- Node REPL
	- [Native Node Modules](https://nodejs.org/api/modules.html "Modules")
	- [Node Package Manager](https://www.npmjs.com/ "NPM")
	- Packages Explored
		- [Express](https://www.npmjs.com/package/express "express")
		- [Body Parser](https://www.npmjs.com/package/body-parser "body-parser")
		- [Nodemon](https://www.npmjs.com/package/nodemon "nodemon")
	- Application Routes
	- Route Parameters
	- Handling Requests and Responses

6. APIs
	- Endpoints
	- Authentication
	- Parameters
	- Calls Using
		- Https Node Module
		- Fetch API
	
	Results

	#### Giphy API for Sticker Search
	![giphy api](./results/giphy.gif "Sticker")

7. Templating
	- Why Templating?
	- [Embedded JavaScript (EJS)](https://ejs.co/ "EJS") templates
	- Types of EJS tags
	- Layouts
	- EJS Partials
	- Add custom modules to project*

	Results

	#### Todo List v1
	![todo list](./results/todo1.gif "Todo List v1")
	
	#### Blog Website v1
	![blog](./results/blogv1.gif "Blog")

8. Databases
	- SQL and NoSQL Databases
	- Exploring [MongoDB](https://docs.mongodb.com/ "mongodb")
		- Collections
		- Documents
	- Native Driver vs [Mongoose](https://mongoosejs.com/docs/guide.html "mongoose")
	- [CRUD](https://mongoosejs.com/docs/api.html "mongoose crud") operations using Mongoose
		- Document.prototype.save(), Model.insertMany()
		- Model.find()
		- Model.updateOne(), Model.updateMany() 
		- Model.deleteOne(), Model.deleteMany()
		- $push and $pull using Model.findOneAndUpdate()
	- Document Validation in Mongoose

	Results

	#### Todo List Made persistent using database
	![todo list](./results/todo2.gif "Todo List v2")
	
	#### CRUD operation support added to blog site
	![blog](./results/blogv2.gif "Blog v2")

9. REpresentational State Transfer
	- HTTP Requests
		- GET
		- POST
		- PUT
		- PATCH
		- DELETE
	- Built a simple RESTful API from scratch
	- Tools used while testing
		- [Robo3T](https://robomongo.org/download "Robo3T") (GUI application for visualizing Mongo Databases)
		- [Postman](https://www.postman.com/ "Postman") (API development platform)
