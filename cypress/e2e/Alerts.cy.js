describe('Alerts Handling', () => {
   
    // javascript Alert it will have some text and OK button
    it.skip('js Alert', () => {
      cy.visit("http://the-internet.herikuapp.com/javascript_alert")
      cy.get("button[onclick='jsAlert()']").click
      
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert');
      })
    }) 
    // Alert window automatically closed by cypress
    cy.get("#results").should('have.text','You Successfully Clicked on alert')
 

  
    // javascript Alert it will have some text and OK button
    it.skip('js Conform Alert', () => {
      cy.visit("http://the-internet.herikuapp.com/javascript_alert")
      cy.get("button[onclick='jsAlert()']").click
      
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert');
      })
      //cypress auto closed Alert 
      cy.get("#results").should('have.text','You Clicked: OK')
    })


    it.skip('js Conform Cancel', () => {
        cy.visit("http://the-internet.herikuapp.com/javascript_alert")
        cy.get("button[onclick='jsAlert()']").click
        
        cy.on('window:alert',(t)=>{
          expect(t).to.contains('I am a JS Alert');
        })
        //cypress auto closed Alert 
        cy.get("#results").should('have.text','You Clicked: OK')
      })
        cy.on('window:conform',()=>false); //cypress close alert using CANCEL button
        cy.get('#result').should('have.text','You Clicked: Cancel')



      // Authentication Alert giving user name and passwrod in the URL 
        it.only('Authenticated Alert', () => {

        cy.visit("http://admin:admin@the-internet.herikuapp.com/basic_auth") 
        cy.get("div[class='example'] p").should('have.contain',"Congratulation");    
            
        
    })
})