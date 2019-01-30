# Simple Universal React Redux

### The simplest possible Async Universal React & Redux boilerplate.

This repo is an attempt to make the simplest server-side rendered (universal) async React Redux app.

Boilerplates can be a great for two things:

1. Get started with your application code quickly since you don't have to scaffold your app.
1. Learn how apps can be scaffolded, and learn how technologies can fit together.

This repository is more aimed at the second point.

It was born out of frustrations with complex boilerplates where you can't understand what is going on behind the scenes. Developers tend to want to know how things work under the hood. This repo offers a boiled-down example to be tweaked and hacked around with.

It tries to be as un-opinionated and simple as possible.

It borrows heavily from the documentation of [Redux](https://redux.js.org/) and [React-Router](https://reacttraining.com/react-router/web).

### These are the technologies it uses:

#### For the app

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-router](https://reacttraining.com/react-router/web)
- [Express](http://expressjs.com/)
- [Yarn](https://yarnpkg.com/lang/en/)

#### Build tools

- [Babel for ES6 Javascript](https://babeljs.io/)
- [Webpack 4](https://webpack.js.org/)
- [Sass](http://sass-lang.com/)
- [Nodemon](https://nodemon.io/)
- [ESlint](https://eslint.org/)

## Commands

###### Install

```bash
yarn install
```

###### Develop

```bash
yarn run dev
```

Open [localhost:3000](http://localhost:3000)

###### Build for production

```bash
yarn run build
```

###### Run in production

```bash
yarn run start
```

Open [localhost:3000](http://localhost:3000)

## Platform

This repo is developed and tested on Mac OS with **node v10.10.0** and **npm v6.7.0**

#### Windows

This repo is tested on Windows. You might have to install nodemon globally though.

```bash
npm i -g nodemon
```

## Documentation

#### Server side

Everything starts with the Express App.
You can find this in `src/server/index.js`

Here we can see that all requests are routed to the `handleRender` function:

```javascript
app.use(handleRender);
```

**The handleRender function does a number of things:**

1. Create a new redux store on every request from the client
1. Match the request path (`req.path`) to the react router routes specified in `src/universal/routes`
1. Asynchronously fetch the data required to render this route (using the route's `loadData` function)
1. Use react-dom/server `renderToString` function to create the required html
1. Insert the html and redux preloadedState into a full html page using the `renderFullPage` function
1. Send the response to the client `res.send(`

#### Client side

For the client side the index file is `src/client/index.js`

In this file, we use the redux `preloadedState` provided by the server to initialise a client side redux store.

We then use the React `hydrate` function to initialise React on the client side.

In the React components, any asynchronous data is fetched in `componentDidMount`. If data already exists, the component will not make the fetch.

```javascript
componentDidMount() {
  // only fetch the data if there is no data
  if (!this.props.data) this.props.getData();
}
```

In this way, components won't make requests for data if the data has already been requested server side.

#### React Router

The difference in the react tree between server side and client side is as follows:

**Server** `src/server/handleRender.js`

```jsx
<Provider store={store}>
  <StaticRouter location={req.url} context={{}}>
    <Router />
  </StaticRouter>
</Provider>
```

**Client** `src/client/index.js`

```jsx
<Provider store={store}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
</Provider>
```

Everything else in the entire React tree is the same between server and client.

## Contributing

Any issues, reports, feedback or bugs or pull requests are more than welcome.

However it is worth mentioning that the purpose of this repo is to create the **simplest**, **most up-to-date**, **most robust** universal async react redux boilerplate.

Therefore any pull request should aim to simplify, fix or update the current solution, not add new packages or complexity.

## License

MIT License

Copyright (c) 2019 William Woodhead

## Have a play around

Good luck with it!
Please star or follow on twitter:
[@williamwoodhead](https://twitter.com/williamwoodhead)
