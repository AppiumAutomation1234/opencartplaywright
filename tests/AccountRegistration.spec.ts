/*
 * Test Case: Account Registration
 * Tags: @master @sanity @regression
 * 
 * steps:
 * 1. Navigate to the application URL.
 * 2. Navigate to the registration page.
 * 3. Fill in the registration form with valid data.
 * 4. Submit the registration form. 
 * 5. Verify that the account is created successfully and the user is redirected to the account dashboard.
 * 
 * Note: Ensure that the test data used for registration is unique to avoid conflicts with existing accounts.
 * You can use a timestamp or a random string to generate unique email addresses for testing.
 */
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';

let homePage: HomePage;
let registrationPage: RegistrationPage;
let testConfig: TestConfig;
let testData: any;

test.beforeEach(async ({ page }) => {
    // Initialize page objects and test data before each test
    const config = new TestConfig();
    const dataProvider = new DataProvider();
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    //1. Navigate to the application URL.
    await page.goto(config.appUrl);
});

test.afterEach(async ({ page }) => {
    // Clean up after each test if necessary (e.g., delete the created account)
    await page.close();
});

test('Account Registration test @master @sanity @regression', async ({ page }) => {

    //2. Navigate to the registration page.
    await homePage.clickOnMyAccount();
    await homePage.clickOnRegister();

    //3. Fill in the registration form with valid data.
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.setPrivacyPolicy();

    //4. Submit the registration form.
    await registrationPage.clickContinue();

    //5. Verify that the account is created successfully and the user is redirected to the account dashboard.
    const isConfirmationMessageDisplayed = await registrationPage.getConfirmationMsg();
    expect(isConfirmationMessageDisplayed).toContain('Your Account Has Been Created!');

    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the result (optional)

});
