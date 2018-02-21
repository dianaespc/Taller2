module.exports = { // adapted from: https://git.io/vodU0
  'Pruebe como dirigirse a la página de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .setValue('input[role="combobox"]', 'Jaime Alberto Chavarriaga Lozano')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.nombreProfesor', 50000)
      .assert.containsText('.nombreProfesor', 'Jaime Alberto Chavarriaga Lozano')
      .end();
  }
};
