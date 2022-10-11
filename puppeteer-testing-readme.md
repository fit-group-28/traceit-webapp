# Setup

>  Here we will use  `puppeteer@17` to conduct the e2e (or integration) testing.



* Pull from `puppeteer-test` branch.

* Run command `yarn install` to update the dependencies.

* Run command `yarn start` to start the development server.



# Testing with Puppeteer

> A sample test case is written under `src/test/landing.e2e.test.js`

* For all test files, please use the suffix `.e2e.test.js`. For example, if you are writing test cases for the *login* page, please name the test file as `login.e2e.test.js`.

* To run the test case, use command `yarn test:e2e`.



# Output

The output should be as follows if the test is passed:

![image](https://user-images.githubusercontent.com/48679943/195091369-142d4bf9-8020-48f8-bcb4-dc2bd8a0bcc7.png)




or:

![image](https://user-images.githubusercontent.com/48679943/195091231-33863d17-093e-43d7-a9bf-ee0f42f01ce8.png)

if failed.
