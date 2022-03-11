## Description
This API gets in url params: `name`, `width` and `height` then resize images depends on width or height value.
__Example:__`http://localhost:3000/resize?name=fjord&width=200&height=200`

## Installations

##### open Terminal and run the following commands:

```
yarn
```
## or
```
npm i typescript
npm i --save-dev typescript

npm i sharp
npm i --save-dev @types/sharp

npm i jasmine
npm i jasmine-spec-reporter
npm i --save-dev @types/jasmine

npm i supertest
npm i --save-dev @types/supertest

npm i express
npm i --save-dev @types/express

npm i --save-dev @types/node

npm i nodemon
npm i --save-dev nodemon
npm i ts-node
npm  i --save-dev ts-node

npm i --save-dev prettier
npm i --save-dev eslint
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier

```
##### To run server:
`npm run start`

### Available Image options
1. `fjord`
2. `palmtunnel`
3. `encendaport`
4. `santamonica`
5. `icelandwaterfall`


### Functionality
- user can query endpoint using various params and queries to retrieve an image with a specified height and width.
- The default height and width is set to 200px.
- All images requested will be saved to disk.

### Code Styles
This project uses `eslint` and `prettier` . all configurations for this project inside `package.json` file.

### Built With
- Node.js
- TypeScript
- Express
- Jasmine