describe('Los estudiantes signup', function() {
    it('Cree una cuenta y pruebe el login correcto y la creación de una cuenta con un login que ya existe', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.contains('Registrarse').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("dp.espitia@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("pruebataller3")
      cy.get('.cajaLogIn').contains('Ingresar').click()
    })
})
