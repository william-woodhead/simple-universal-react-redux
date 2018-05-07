# Simple Universal React Redux
### The simplest possible Async Universal React & Redux boilerplate.

This repo is an attempt to make the simplest server-side rendered (universal) async React Redux app.

Boilerplates can be a great for two things:
1. Get started with your application code quickly since you don't have to scaffold your app.
1. Learn how apps can be scaffolded, and learn how technologies can fit together.

This repository is more aimed at the second point.

It was born out of frustrations with complex boilerplates where you can't understand what is going on behind the scenes. Developers tend to want to know how things work under the hood. This repo offers a boiled-down example to be tweaked and hacked around with.

It tries to be as un-opinionated and simple as possible.

It borrows heavily from the fantastic documentation of [Redux](https://redux.js.org/) and [React-Router](https://reacttraining.com/react-router/web).

### These are the technologies it uses:

#### For the app
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-router](https://reacttraining.com/react-router/web)
- [Express](http://expressjs.com/)

#### Build tools
- [Babel for ES6 Javascript](https://babeljs.io/)
- [Webpack 4](https://webpack.js.org/)
- [Sass](http://sass-lang.com/)
- [Nodemon](https://nodemon.io/)
- [ESlint](https://eslint.org/)

## Commands
###### Install
```npm install```

###### Develop

```npm run dev```
Open [localhost:3000](http://localhost:3000)

###### Build for production

```npm run build```

###### Run in production

```npm run start```
Open [localhost:3000](http://localhost:3000)

## Platform

This repo is developed and tested on Mac OS.

#### Windows

this repo is tested on Windows. You might have to install nodemon globally though.

```npm i -g nodemon```

## Contributing
Any issues, reports, feedback or bugs or pull requests are more than welcome.

However it is worth mentioning that the purpose of this repo is to create the **simplest**, **most up-to-date**, **most robust** universal async react redux boilerplate.

Therefore any pull request should aim to simplify, fix or update the current solution, not add new packages or complexity.

## Documentation

#### Server side

Everything starts with the Express App.
You can find this in `src/server/index.js`

Here we can see that all requests are routed to the handleRender function:
`app.use(handleRender);`

**The handleRender function does a number of things:**
1. Create a new redux store on every request from the client
1. Match the request path (`req.path`) to the react router routes specified in `src/universal/routes`
1. Asynchronously fetch the data required to render this route (using the route's `loadData` function)
1. Use react-dom/server `renderToString` function to create the required html
1. Insert the html and redux preloadedState into a full html page using the `renderFullPage` function
1. Send the response to the client `res.send(`

#### Client side

For the client side the index file is `src/client/index.js`

In this file, we use the redux preloadedState provided by the server to initialise a client side redux store.

We then use the React `hydrate` function to initialise React on the client side.


## License

MIT License

Copyright (c) 2018 William Woodhead
@william-woodhead
