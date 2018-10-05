# Review Questions

## What is Node.js?

Node js is a runtime enviroment that lets you execute JS appilications oustide of the browser. Node is generally used to write code that was previously done with other language. Node js allows you to write web services newtworking software, web applications, etc. with one langauge, and allows you to avoid any sort of context switching that would need to be done if you were using other methods for these tasks.

## What is Express?

Express is a unopinionated web appilcation framework that is used on top of a Node js web server. Express allows for easier routing, easier middleware, and a simpler API

## Mention two parts of Express that you learned about this week.

1. Express has it's own body parser middleware that allows you to have access to JSON objects sent from client requests via the request's body object

2. Most of the code we're writing with express is middleware, including the routers we setup to do CRUD cmds. WE can even write our own custom middleware or just get prewritten third-party middleware from npm

## What is Middleware?
Functions that that have access to req/res obejcts. Act as a bridge between client and server
## What is a Resource?

A resource is everything inside of a RESTful Web Api that can be accessed by a unique URL

## What can the API return to help clients know if a request was successful?

The API can return a 200 status code if they API wanted the client to know the server request was successful

## How can we partition our application into sub-applications?

If you wanted to partion an application into sub-applications, you could do this by spilting your code is to smaller chuncks via Code splitting.

## What is express.json() and why do we need it?

express.json() is a middleware unique to the express framework that allows information sent from a request from the client to stored in a body object accessable by the server
