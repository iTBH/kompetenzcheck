describe("E2E: Login Page", function() {

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

    beforeEach(function() {
        lp = new LoginPage();
        ptor = protractor.getInstance();
    });

    it('should load the login page', function() {
        lp.get();
        var ele = by.css('.login');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });

    it('should show the register link', function() {
        lp.get();
        var ele = by.css('.new-account');
        expect(ptor.isElementPresent(ele)).toBe(true);
    });

    it('should successfully login the user', function() {
        lp.get();
        lp.setEmail('m');
        lp.setPassword('m');
        lp.submit();
        expect(ptor.getCurrentUrl()).toMatch(/\/dashboard/);
    });
});