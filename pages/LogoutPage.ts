import {Page, Locator} from "@playwright/test"
import { HomePage } from "./HomePage"; // Import HomePage if needed

export class LogoutPage{    
    //locators
    private readonly page: Page;
    private readonly btnContinue: Locator;
    //constructor
    constructor(page: Page){
        this.page=page;
        this.btnContinue=page.locator('.btn.btn-primary');
    }   

    //actions/methods
    async clickContinueButton(): Promise<HomePage>{
        try{
            await this.btnContinue.click();
            return new HomePage(this.page); // Return an instance of HomePage after clicking continue
        }catch(error){
            console.log(`Error while clicking on Continue button: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    async isContineueButtonVisible(): Promise<boolean>{
        try{
            return await this.btnContinue.isVisible();
        }catch(error){
            console.log(`Error while verifying Continue button visibility: ${error}`);
            return false;
        }
    }
}