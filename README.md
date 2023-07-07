### Pig-Game Simulator
#### [Play](https://enchanting-pudding-d2d2a1.netlify.app/)
```
About Game: In this game, User Interface (UI) contains user/player that can do three things, they are as follows:

There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.

1.Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.

2.Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.

3.Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).

Making of Game: Being a game rendered by the web browser, it is built by the help of HTML, CSS (for the Front-end) and JavaScript (for the Back-end). The main logic of the game lies in the JS file whereas the appearance and the User Interface is rendered by HTML and CSS. In this project, there are basically four types of files
```
```
HTML File: index.html file is the file that makes the web browsers understand and thus interprets what type of document we are making. It stands for Hyper Text Markup Language, our web browsers read this file and understand its component via the V8 Engine (which parses the code in a language so that the browser can understand it). Below is the HTML code for this game:
```
```
In the above code, we have used various classes (for eg: btn btn–roll, rte), these will be used for the styling purpose in the CSS file, and will discuss them under the CSS files.

CSS File: In order to format and style the markup created by HTML, we need Cascading Style Sheets so that the markup (code) looks way better. Below is the CSS code for the game is given below. Before diving in the code, just have a quick look at which classes and ids are for what purpose:

1.For overall HTML page and elements: * will affect the every element and tag in the markup. We have used 2 more tags to provide some particular styling which are html and body tag’s styling.

2.Layout elements: Defined main tag & player class styling there. We have defined position attribute for main tag and set its property to relative.

3.Self Made Classes: General styling needed to make the page more appealing.

4.Absolute Positioned Classes: I have set the position attribute of btn and other classes and set its value to absolute as we have to make sure that the buttons and other elements are always at the right place in the page. Absolute position will make the arrangement of that particular element according to the element which is positioned relative (in this case, it is the main tag).

```
```
JavaScript File: There are some JavaScript variables, we can use two type of variables i.e. let and constant. One can modify the variables declared with let, while the variables declared with constant can’t be changed. In the JavaScript file, we are basically doing the DOM Manipulations (everything in JavaScript is a type of Object, so we term the UI as the Document Object Model). So document.querySelector() is a way of selecting elements from the DOM. 
```
