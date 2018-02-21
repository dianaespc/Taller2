module.exports = { // adapted from: https://git.io/vodU0
  'Pruebe los filtros por materia en la página de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .setValue('input[role="combobox"]', 'Harold Enrique Castro Barrera')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.nombreProfesor', 50000)
      .click('input[name="id:ISIS4426"]')
      .pause(1000)
      .waitForElementVisible('.sobreCalificacion', 50000)
      .assert.containsText('h5[id="profesor_cantidad"]', '1')
      .end();
  }
};
