## Ultra wizard

You can see working demo on [https://viktornar.github.io/ultra-wizard/](https://viktornar.github.io/ultra-wizard/)

Install dependencies by using yarn

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

Tests for some components and reducers are located at folder level alongside with components and reducers which are tested.

```
./src/wizard/NumberInput.test.js
./src/wizard/StatusBar.test.js
./src/WizardApp.test.js
./src/redux/reducers/wizard.test.js
```

### `yarn run build`

Builds the app for production to the `build` folder.<br>

### `yarn deploy`

Builds and deploy to github page.<br>

### How to run with serve
The build folder is ready to be deployed.
You may serve it with a static server:

`yarn global add serve`
  
`serve -s build`


