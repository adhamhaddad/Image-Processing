# Image Processing API
#
## Description
This API gets in url params: `name`, `width` and `height` then resize images depends on width & height value.
__Example:__ `http://localhost:3000/api/resize?name=fjord&width=200&height=200`
#

Also you can open the original full size by replace `resize` with `preview` and add `name` query of image.
__Example:__ `http://localhost:3000/api/preview?name=fjord`

## Installations

##### open Terminal and run the following commands:
#
`yarn` or `npm install`
#
##### To run server:
`npm run start`
#### or
`yarn start`

### Available Image options
1. `fjord`
2. `palmtunnel`
3. `encendaport`
4. `santamonica`
5. `icelandwaterfall`


### Functionality
- user can query endpoint using various params and queries to retrieve an image with a specified height and width.
- The default height and width is set to 200px.
- All images requested will be saved to thumb folder.

### Code Styles
This project uses `eslint` and `prettier`. all configurations for this project inside `package.json` file.

## Available Scripts

In the project directory, you can run:

##### `npm run dev` or `yarn dev`

Runs the app in the development mode.
Open http://localhost:3000/resize?name=fjord&width=200&height=200 to view it in the browser.

The page will reload automatically if you make edits.

##### `npm run format` or `yarn format`
will format by prettier and will also see if any lint errors in the console.


##### `npm run test` or `yarn test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

##### `npm run build` or `yarn build`

Builds the app for production to the build folder.
its format typescript to javascript

##### `npm run start` or `yarn start`

Build and runs the app in the clients mode.
Open http://localhost:3000/resize?name=fjord&width=200&height=200 to view it in the browser.


### Built With
- **Node.js**
- **Express.js**
- **TypeScript**
- **Jasmine**