This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check out my Simple-React-Routing app for the README documentation that usually comes with apps made with Create React App

What I learned making this app:

Separate the Frontend and Backend folders for simplicity:

Frontend
|
----Node Modules
|
----Public
    |
    ----index.html
|    
----src
    |
    ----components
        |
        ----*React Components Here*
    |    
    *React files here*

Backend
|
----Node Modules
|
----Models
    |
    ----*Mongoose Schema Models here*
|
----Routes
    |
    ----*Router for API*
|
----*Express Mongoose connection*

The componentWillMount life-cycle hook runs before the component has been rendered, but after the state has been set in the constructor. Here is where calculations are made, methods set up, etc.

The componentDidMount hook runs after the component output has been rendered to the dom

this.state.value is initialized in the constructor so that the text area starts with some text in it. 

/////////////////////////////////////////////////////////

I got through setting the app up with relative ease thanks to an online tutorial, but the tutorial only had one data input, and I'm learning this so that I can set up a React app that has a backend and several data inputs for the user. 

Figuring out what to change to implement two data-entry fields threw me through a loop. Here's what troubled me:

The handleChange this.setState initializes a generic state for a key: value pair; in my case, it was used for the name: "name", post: "post" pairs. For some reason I was convinced I would have to setState for BOTH items, but that's not the case.

Thus, I was having a lot of trouble with setting two entry forms and assigning each form the appropriate handle so that, on submission, the server would receive the data with each schema key. 

So with the handleChange method running for every change to the React component (and thus every input into the form element), this.state.value was being updated as well. 

Similarly, for my handleSubmit method, submitting one key (the name) was easy, but in order to submit two (name + post), I tohught I would have to specify two keys to be sent in the data object. Instead, all I had to do was call my addDataService.sendData method, and specify this.state as the parameter.

Regarding how to specify how each input is sent to the server as a part of the data object, a name attribute can be added to the form element, allowing the handler function to choose what to do based on the value of event.target.name

/////////////////////////////////////////////////////////

Other than that, setting up a backend was pretty straightforward. Next, I'll hopefully be setting up my portfolio website and, in doing so, learning more about React routing.