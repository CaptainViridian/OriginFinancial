# Origin's Financial Wellness Score

Welcome to Origin's Financial Wellness Score!

This application aims to be a simple way for anyone to verify their Financial Wellness, 
with a calculation based on their Annual Income and Average Monthly Costs.
The whole application consists of a web-app that can be accessed through a web browser, and
a REST API that handles requests for the calculations.

## Structure

You'll find both ends of this project in this repository.
The back-end is contained on the [rest-api directory](./rest-api). The front-end
can be found in [origin-financial-web-app](./origin-financial-web-app).
Both sections are separate projects, meaning they can be altered, extended, built and
run independently of each other, which is why you'll find those instructions in
their correspondent modules. It has been chosen to place them in the same repo
for convenience, as there's very low possibility their requirements for being used together
should change in the near future.

## Stack
The stack for the projects consists of a few different languages and some 3rd party
libraries as a way to easy the development process.

### Back-end
On the back-end, we used:
- [Kotlin](https://kotlinlang.org/docs/home.html) as the main language;
- [Javalin](https://javalin.io/documentation), a lightweight HTTP framework, with
[Jetty](https://www.eclipse.org/jetty/) as its embedded web server;
- [JUnit](https://junit.org/junit5/) and [MockK](https://mockk.io/) as our
testing utilities;
- [Jackson](https://github.com/FasterXML/jackson) for JSON handling;
- and [Maven](https://maven.apache.org/) as package manager and task runner.

### Front-end
On the back-end, we used:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) as the main language;
- [React.js](https://reactjs.org) as the main visual component library, with a
[CRA](https://create-react-app.dev/) bootstrapped project for easy access to running and
building;
- [Mui System](https://mui.com/system/getting-started/overview/) as a css-in-js utility;
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) as
the testing utility.

## Building and Running
### Back-end
See here.

### Front-end
See here.