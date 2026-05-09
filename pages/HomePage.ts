import {Page, Locator} from "@playwright/test"

export class HomePage{

    //locators
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkLogin: Locator;
    private readonly lnkRegister: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    //constructor
    constructor(page: Page){
        this.page=page;
        this.lnkMyAccount=page.locator("//span[normalize-space()='My Account']");
        this.lnkLogin=page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']");
        this.lnkRegister=page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Register']");
        this.txtSearchbox=page.locator("//input[@placeholder='Search']");
        this.btnSearch=page.locator("//button[@class='btn btn-default btn-lg']");
    }
    
    //actions/methods
    async isHomePageExisted(): Promise<boolean>{
        let title:string=await this.page.title();
        if(title){
            return true;
        }        else{
            return false;
        }
    }

    //click on My Account link
    async clickOnMyAccount(){
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Error while clicking on My Account link: ${error}`);
            throw error; // Rethrow the error after logging it
        }   
    }

    //click on Login link
    async clickOnLogin(){
        try{
            await this.lnkLogin.click();
        }catch(error){
            console.log(`Error while clicking on Login link: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    //click on Register link
    async clickOnRegister(){
        this.page.waitForTimeout(2000); // Wait for the page to load before clicking
        try{
            await this.lnkRegister.click();
        }catch(error){
            console.log(`Error while clicking on Register link: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    //Enter product name in search box
    async enterProductName(productName: string){
        try{
            await this.txtSearchbox.fill(productName);
        }catch(error){
            console.log(`Error while searching for product: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }

    //Click on Search button
    async clickOnSearchButton(){
        try{
            await this.btnSearch.click();
        }catch(error){
            console.log(`Error while clicking on Search button: ${error}`);
            throw error; // Rethrow the error after logging it
        }
    }
}