# Origin Financial Rest API
This repository contains the REST API for  Origin's Financial Wellness Score.

## Structure

The file structure is as follows:
- **src**: source code for the application
  - **main**: source code
    - **kotlin.domain**: model definition for the application domain
    - **kotlin.http**: definition of the application's HTTP interface
    - **kotlin.services**: implementation of specific functionality
    - **kotlin.Main.kt**: Server configuration and application entry point
  - **test** test code
- **pom.xml**: Maven configuration and dependencies file

## Building, running and testing:
The building and running tasks are implemented using Maven plugins. Additionally,
the project targets the version 11 of Java.
Therefore, Maven needs to be installed and **Java 11+** is required.

### Building
To compile the code into Java Bytecode, run `mvn compile` in the root folder.
Alternatively, you can run `mvn install` to compile and test. 

### Running
To execute app, run `mvn exec:java` in the root folder. Javalin includes an embedded application
server, so it's not necessary to create a WAR or deploy it to an application server.
The API will install itself on "localhost:8080".

### Testing
Tests can be run by using `mvn test` Additionally, you can run tests within the building process,
by running `mvn install`.