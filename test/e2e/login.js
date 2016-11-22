module.exports.Login = function() {

    var lp;
    var LoginPage = function() {
        this.userEmail = element(by.model('user.email'));
        this.userPassword = element(by.model('user.password'));
        this.get = function() {
            browser.get('http://127.0.0.1:8080/login');
        };
        this.setEmail = function(email) {
            this.userEmail.sendKeys(email);
        };
        this.setPassword = function(pass) {
            this.userPassword.sendKeys(pass);
        };
        this.submit = function() {
            link = element(by.css('button'));
            link.click();
        };
    };
};