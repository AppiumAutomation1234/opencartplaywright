import{ Page, Locator} from '@playwright/test';

export class LoginPage{

    //locators
    private readonly page: Page;
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly txtErrorMessages: Locator;
    private readonly btnLogin: Locator;

    //constructor
    constructor(page: Page){
        this.page=page;
        this.txtEmail=page.locator("//input[@id='input-email']");
        this.txtPassword=page.locator("//input[@id='input-password']");
        this.txtErrorMessages=page.locator("//div[contains(@class,'alert-danger')]");
        this.btnLogin=page.locator("//input[@value='Login']");
    }

    //actions/methods
    async enterEmail(email: string){
        try{
            await this.txtEmail.fill(email);
        }catch(error){
            console.log(`Error while entering email: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    async enterPassword(password: string){
        try{
            await this.txtPassword.fill(password);
        }catch(error){
            console.log(`Error while entering password: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    async clickLoginButton(){
        try{
            await this.btnLogin.click();
        }catch(error){
            console.log(`Error while clicking login button: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }   

    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async getErrorMessages(): Promise<null | string>{
        try{
            return await this.txtErrorMessages.textContent();
        }catch(error){
            console.log(`Error while getting error messages: ${error}`);
            throw error; // Rethrow the error after logging it
        }
}
}

