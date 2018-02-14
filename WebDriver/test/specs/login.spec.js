var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 3000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('dp.espitia@uniandes.edu.co');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('pruebataller3');

        cajaLogIn.element('button=Ingresar').click()
        /*browser.waitForVisible('.aviso.alert.alert-danger', 8000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
        */
    });


});
