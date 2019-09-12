# Hotel service mock test

This is a mock test for a hotel service, that return a tidy combined content between different sources.
This project is developed for sharing the concept about how to structure a microservices architure application and code guideline.

## How to use 
Install dependencies and packages ( I use yarn instead of "npm" )
```
yarn install
```
- For running as a service 
```
yarn start
```
By default the port for using this service is 8080, you can change it in different branches: "sit", "staging", "production" for different purpose.
After running, we will see the successfully message "Server ready at 8080"

- For running services while development for auto reload
```
yarn dev
```

- For viewing test case while development with auto reload
```
yarn test:watch
```

## Index

1.	Concept and Design for perceptional structure
2.	Test Driven Development - TDD
3.	Datasource transpilers
4.	Deploying
5.	Optimization ideas


##	1. Concept and Design for perceptional structure

One of the requirement is allow different kind of sources for describing about the hotel detail, I assume that the sources are not changed frequently and each source will contain different kind of attributes in different key, we need to perform the a transpilers for each source and the outcome will be standardize by the defined schema.

I decide to break the transpilers into different name that matched the source name, they can be built as a standalone service and return the matched record only, it will reduce the calculation at the merging stage.

I let the merging process into a standalone node so that we can preparing the auto-scale feature for it.

[picture]

##	2. Test Driven Development - TDD

I started the project with TDD practice to make sure every function result are verified and; we must design the outcome before doing development.

The test cases are updating while doing development to make sure new ideas are working well with tested and they are a part of the CI/CD.

##	3. Datasource transpilers

Each transpiler will have the same methods and attributes so that the controller can use the target one by its key.

In actual world, each transpiler source is DB connection or structured content so that we can design the most specific transformation for each. The mapping table will be costly and fragile with unknown structure.

To make the unit test better, we can provide the sample inputs and expected outcome in a file with same name with source name.

##	4.  Deploying

We will have some specific branchs in our git repository as below:
- sit
- staging
- production (or original)

As soon as the pull request is made to "sit" we will trigger the hook to let the the Google Cloud Platform (GCP) Cloud Build function to create an instant of target environment (NodeJS) to clone the latest source from "sit" branch into the executive folder and doing test on target environment variables.

If the tests are passed, we can deploy the code as :
- Cloud Function or;
- create a new Docker image with defined environment and ship it into the Kubernetes zone

Repeating the process for "staging" and "production" branch to manage the automation delivery.

##	5. Optimization ideas

I have some suggestions to make the final result better (my opinion)
- for simple text attribute we should convert into array of text, like "description" attribute with array type, we can merge contents from different sources more flexible
- for images attributes, we can change into array instead of object type to help the merge process more simple; for each image, we can have a category attribute and let the end-user browsers doing grouping.
