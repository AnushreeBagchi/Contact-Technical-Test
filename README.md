# Contact-Technical-Test

In this project I have develop a single page web application that collects a bunch of information about the user and submits it to an API.

## Description

- The user should submit their details via a form.
- The details are then send to the api. 
- The api responds with success or error data which is then displayed in the Results page.

## Key Points

### Stack 
- Used React , Redux on the client.
- `Materialized UI` for CSS and Styling
- Responsive using materialize-ui grids approach
- Routing using `React Router`
- Webpack for bundling

### Code Quality 
**Did not** use  create-react-app instead used my own handrolled Webpack config to keep the project void of any unneccesary dependencies.

- You can see examples of Context , Render Props in the theme handling part.
- Components which do not have any state have been made functional components.
- Wrote a component called `TextFieldGenerator` to generate text fields using json. 
- Snapshot for testing for UI components using Jest.


### Extensibility
- Client has a Constants.js which has the text fields json for **dynamic form generation** . Adding another field is as easy as adding into the json.

## Build
- Clone the repo 
- Go to client folder
  - yarn
  - yarn start
  - Navigate to localhost:8080
- Run Client tests
  - yarn test

