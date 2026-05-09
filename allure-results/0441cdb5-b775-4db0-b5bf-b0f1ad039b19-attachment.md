# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login with valid credentials test @master @sanity @regression
- Location: tests\Login.spec.ts:42:5

# Error details

```
TypeError: myAccountPage.isMyAccountPageExisted is not a function
```

# Test source

```ts
  1  | /***
  2  |  * Test Case ID: Login with valid credentials       
  3  |  * Tags: @master @sanity @regression
  4  |  * 
  5  |  * 
  6  |  * steps:
  7  |  * 1. Navigate to the application URL.
  8  |  * 2. Navigate to the login page via Home Page.
  9  |  * 3. Enter valid email and password and click on the login button.
  10 |  * 4. Verify that the user is successfully logged in and redirected to the account dashboard.
  11 |  * 
  12 |  * Note: Ensure that the test data used for login is valid and corresponds to an existing account in the application.
  13 |  * You can create a test account using the registration test case or use a predefined test account for login testing.
  14 |  */
  15 | 
  16 | import {test,expect} from '@playwright/test';
  17 | import { HomePage } from '../pages/HomePage';
  18 | import { LoginPage } from '../pages/LoginPage';
  19 | import { MyAccountPage } from '../pages/MyAccountPage';
  20 | import { TestConfig } from '../test.config';
  21 | 
  22 | let homePage: HomePage;
  23 | let loginPage: LoginPage;
  24 | let myAccountPage: MyAccountPage;
  25 | let testConfig: TestConfig;
  26 | 
  27 | test.beforeEach(async ({ page }) => {
  28 |     // Initialize page objects and test data before each test
  29 |     testConfig = new TestConfig();
  30 |     homePage = new HomePage(page);
  31 |     loginPage = new LoginPage(page);
  32 |     myAccountPage = new MyAccountPage(page);
  33 |     //1. Navigate to the application URL.
  34 |     await page.goto(testConfig.appUrl);
  35 | });
  36 | 
  37 | test.afterEach(async ({ page }) => {
  38 |     // Clean up after each test if necessary (e.g., log out if logged in)
  39 |     await page.close();
  40 | }); 
  41 | 
  42 | test('Login with valid credentials test @master @sanity @regression', async ({ page }) => {
  43 | 
  44 |     //2. Navigate to the login page via Home Page.
  45 |     await homePage.clickOnMyAccount();
  46 |     await homePage.clickOnLogin();  
  47 | 
  48 |     //3. Enter valid email and password and click on the login button.
  49 |     await loginPage.login(testConfig.email, testConfig.password);
  50 | 
  51 |     //4. Verify that the user is successfully logged in and redirected to the account dashboard.
> 52 |     const isMyAccountPageExisted = await myAccountPage.isMyAccountPageExisted();
     |                                                        ^ TypeError: myAccountPage.isMyAccountPageExisted is not a function
  53 |     expect(isMyAccountPageExisted).toBeTruthy();
  54 | 
  55 | });
```