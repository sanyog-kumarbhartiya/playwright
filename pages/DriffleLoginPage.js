class driffleLoginPage {

    constructor(page) {
        this.page = page;
        this.loginBtn = '[data-test-id="dekstop-login-button"]'
        this.emailInputBox = '[data-test-id="login-email-input"]'
        this.passwordInputBox = '[data-test-id="login-password-input"]'
        this.submitBtn = '[data-test-id="login-submit-button"]'
    }

    async openDriffle(){
        await this.page.goto('https://driffle.com')
    
    }

    async clickOnLoginBtn(){
        await this.page.click(this.loginBtn);
    
    }

    async login(email, password){

        await this.clickOnLoginBtn();
        await this.page.fill(this.emailInputBox, email);
        await this.page.fill(this.passwordInputBox, password);

        await this.page.click(this.submitBtn);
    }
}

module.exports = driffleLoginPage;