describe('CSS Selector', () => {

    it('Assertions', () => {
      cy.visit("https://ultimateqa.com/complicated-page");
      cy.url().should('include','page')
      .and('eq','https://ultimateqa.com/complicated-page')
      .and('contain','com')
      .and('not.contain','dance')
     
   //   cy.title().should('include','Sign up')  
   //   .and('eq','Sign up for Facebook | Facebook')
   //   .and('contain','Facebook')

   let expname="Section of Buttons"
   cy.get("#Section_of_Buttons").then( (x)=>{
        let actNAme=x.text()
        //BDD Style
        expect(actNAme).to.equal(expname)
       // expect(actNAme).to.not.equal(expname)

      })
 
    })
 })