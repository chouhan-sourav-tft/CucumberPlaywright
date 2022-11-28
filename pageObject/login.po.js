const { page } = require("../steps/world");

exports.Login = class login {
    elements = {
        username: '#email',
        password: '#pass',
        loginButton: 'text=Log in',
        profileButton: 'text=Sourav Chouhan'
    };

    async typeUserName() {
        await page.fill(this.elements.username, 'souravchouhan132@gmail.com');
    };
    async typePassword() {
        await page.fill(this.elements.password, 'Sourav123@');
    };
    async clickLoginButton() {
        await page.click(this.elements.loginButton);
    };
    async clickProfileButton() {
        await page.click(this.elements.profileButton);
    };
} ;