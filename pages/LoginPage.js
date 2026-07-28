class LoginPage {

    constructor(page) {
        this.page = page;

        this.signInLink = '#nav-link-accountList';
        this.email = '#ap_email_login';
        this.continueBtn = '#continue';
        this.password = '#ap_password';
        this.signInBtn = '#signInSubmit';
    }

    async openAmazon() {
        await this.page.goto('https://www.amazon.in');
    }

    async clickSignIn() {
        await this.page.click(this.signInLink);
    }

    async login(email, password) {

        await this.page.fill(this.email, email);
        await this.page.click(this.continueBtn);

        await this.page.fill(this.password, password);
        await this.page.click(this.signInBtn);
    }
}

module.exports = LoginPage;