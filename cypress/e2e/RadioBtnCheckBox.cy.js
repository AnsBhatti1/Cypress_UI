describe('CSS Selector', () => {

    it('Checking Radio Button', () => {
      cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      // visibility of radio button
      cy.get("input#male").should('be.visible')
      cy.get("input#female").should('be.visible')
      // selecting Radio Button
      cy.get("input#male").check.should('be.checked')
      cy.get("input#female").check.should('not.be.checked')

      cy.get("input#female").check('not.be.checked')
      cy.get("input#male").should('not.be.checked')
      
    })
})
/*describe('CSS Selector', () => {

    it('cssLocators', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // Visibility of element
        cy.get("input#monday").should('be.visible')
        //selecting single checbox
        cy.get("input#monday").check.should('be.checked')
        // Unselecting Checkbox
        cy.get("input#monday").uncheck.should('not.be.checked')
        // select all checkbox
        cy.get("input.form-check-input[type='checkbox']").check.should(be.check)
        cy.get("input.form-check-input[type='checkbox']").uncheck.should(not.be.check)
        // first n last checkbox
        cy.get("input.form-check-input[type='checkbox']").last.check.should(be.check)
        cy.get("input.form-check-input[type='checkbox']").first.check.should(be.check)
        
    })
 })*/