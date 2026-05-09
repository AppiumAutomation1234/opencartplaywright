/***
 * Test Case ID: Login with valid credentials       
 * Tags: @master @sanity @regression
 * 
 * 
 * steps:
 * 1. Navigate to the application URL.
 * 2. Navigate to the login page via Home Page.
 * 3. Enter valid email and password and click on the login button.
 * 4. Verify that the user is successfully logged in and redirected to the account dashboard.
 * 
 * Note: Ensure that the test data used for login is valid and corresponds to an existing account in the application.
 * You can create a test account using the registration test case or use a predefined test account for login testing.
 */

import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    // Initialize page objects and test data before each test
    testConfig = new TestConfig();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    //1. Navigate to the application URL.
    await page.goto(testConfig.appUrl);
});

test.afterEach(async ({ page }) => {
    // Clean up after each test if necessary (e.g., log out if logged in)
    await page.close();
}); 

test('Login with valid credentials test @master @sanity @regression', async ({ page }) => {

    //2. Navigate to the login page via Home Page.
    await homePage.clickOnMyAccount();
    await homePage.clickOnLogin();  

    //3. Enter valid email and password and click on the login button.
    await loginPage.login(testConfig.email, testConfig.password);

    //4. Verify that the user is successfully logged in and redirected to the account dashboard.
    const isMyAccountPageExisted = await myAccountPage.isMyAccountPageExists();
    expect(isMyAccountPageExisted).toBeTruthy();

});