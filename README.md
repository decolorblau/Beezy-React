# [MARVEL COMICS APP](https://beezy-react-marvel.netlify.app/)
## BEEZY FRONTEND CHALLENGE

<img src="https://1000marcas.net/wp-content/uploads/2020/02/Marvel-Studios-Logo-2002.png" width=50% height=50%>

[CLICK HERE TO DISCOVER MARVEL COMICS APP](https://beezy-react-marvel.netlify.app/)

This is a Front-end application build with React, using Context and a Custom Hook to share the state across the app, with React Router v6, SASS and tested with Jest. All the data is obtained by consuming a Marvel API. Requests are made with Axios.

There are two principal screens in the app:

HOME: It shows a list of comics coming from the Api, with a cover image and some information of each one. In desktop screens, the user can find the title of comic,the publication format, for example comic, hardcover, magazine,... and the price. In the tablet and mobile version the user can show the cover image and the title of comic.

In addition, on the home page the user can click the toggle filter button, and a menu with different filter options is displayed. The app allows you to sort articles by Title or by on Sale Date, filter articles by publication format type, search by title, and combine all of these filters.

At the end of the page, there is a pagination component with before and next buttons.

DETAIL: It shows detailed information of the selected comic.

The complete application is responsive. It has three breakpoints: mobile, tablet and desktop. The styles are build only with SASS, applying BEM in the classes, to get the customization that I wanted in the design. It is tested with Jest, you can find unit testing. And for ensure write Clean Code I helped myself with PropTypes, Eslint, SonarQube and lighthouse tools.

## Available Scripts

In the project directory, you can run:

## Project setup

```
npm install
```

### Runs the app in the development mode

```
npm start
```

### Builds the app for production

```
npm run build
```

### Run unit tests in the interactive watch mode

```
npm test
```

### Run unit tests in the interactive watch mode with coverage

```
npm run test-cov
```
