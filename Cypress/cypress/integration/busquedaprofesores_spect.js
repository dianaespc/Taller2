describe('Los estudiantes signup', function() {
    it('Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('input').type('Mario Linares', { force: true })
      cy.contains('Mario Linares Vasquez - Ingeniería de Sistemas').click()
      cy.visit('https://losestudiantes.co')
      cy.contains('Si estudias una maestria haz click aqui').click()
      cy.get('select').select("universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software")
      cy.get('div').find('a[href="universidad-de-los-andes/ingenieria-de-sistemas/profesores/jaime-alberto-chavarriaga-lozano"]').click()
      cy.get('div').find('input[name="id:MISO4204"]').check()
    })
})
