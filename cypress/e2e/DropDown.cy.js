describe('DropDown Handling', () => {


    it('DropDown with Select', () => {
      cy.visit("https://www.zoho.com/commerce/free-demo.html")
      cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
      
         
    })


     it.skip('DropDown with Select', () => {
      cy.visit("https://www.wikipedia.org")
      cy.get('#searchInput').type('Delhi')
      cy.get('.suggestion-title').contains('Delhi University').click
         
    })

 
    it.skip('DropDown with Select', () => {
      cy.visit("https://www.google.com/")
      cy.get("input[name='q']").type('cypress automation')
      cy.wait(3000)
      cy.get('div.wM6W7d>span').should('have.length',11)
      cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')  
        {
            cy.wrap($el).click()
        }
      })  
         
    })

})  
