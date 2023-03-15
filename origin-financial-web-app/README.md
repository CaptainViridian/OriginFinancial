# Origin Financial Web App
This repository contains the web application for  Origin's Financial Wellness Score.
## Structure

The file structure is as follows:
- **public**: standard public directory for web application
- **src**: implementation of components and testing
  - **assets**: source images used in the application as icons
  - **components**: implementation of most components, with a separation by context
    - **.**: the root contains components that can be re-used independent of context
    - **AssessmentResult**: components related exclusively to the AssessmentResult page
    - **FinancialHealthAssessment**: components related exclusively to the FinancialHealthAssessment page
  - **http**: implementation of external API requests
  - **pages**: implementation of components that act as different pages for the application 
  (inspired by Next.js's way of structuring Routes)
  - **package.json**: Node.js configuration and dependencies file

## Building, running and testing:
The building and running tasks are implemented by `create-react-app` (through `react-scripts`).
For more detailed explanation, see the [CRA-README](CRA-README.md).

Building requires [NPM](https://www.npmjs.com/).

### Building
To create a production build, run `npm run build` in the root folder.
The optimized build can be deployed to the web server of preference. Deployment will not be covered
in these instructions, but there's more detail on [CRA-README](CRA-README.md).

### Running
To run a development version of the app, run `npm start` in the root folder.
`react-scripts` uses **hot deploy**, so there's no need to run the command again after
making changes.
The app will open by itself on "localhost:3000".

### Testing
Tests have to be run on themselves. To open the Jest testing interface, run `npm test`.