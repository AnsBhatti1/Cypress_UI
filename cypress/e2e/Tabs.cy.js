describe('Handle Tabs', () => {


    it('tabs', () => {
      cy.visit("https://the-internet.herokuapp.com/windows");    //parent tab
      cy.get('.example >a').invoke('removeAttr','target').click(); // it remove new tab link and open the link in same tab  
      cy.url().should('include','https://the-internet.herokuapp.com/windows/new');  
      cy.wait(5000);
      cy.go('back');
    })

  })