describe("E2E: The Dashboard Page", function() {

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

    var DashboardPage = function() {
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
    beforeEach(function() {
        lp = new LoginPage();
        ptor = protractor.getInstance();
    });

    it('should successfully login the user', function() {
        lp.get();
        lp.setEmail('m');
        lp.setPassword('m');
        lp.submit();
        expect(ptor.getCurrentUrl()).toMatch(/\/dashboard/);
    });

    it('should start creating a new check by pressing the button', function() {
        browser.get('http://127.0.0.1:8080/dashboard');
        link = element(by.css('.e2e-create'));
        link.click();
        expect(ptor.getCurrentUrl()).toMatch(/\/check\/new/);
    });
});