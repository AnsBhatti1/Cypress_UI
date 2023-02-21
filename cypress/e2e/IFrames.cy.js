describe('IFrame', () => {


    it('iframes using cypress plugin', () => {
      cy.visit("https://the-internet.herokuapp.com/iframes")    //parent tab
      cy.frameLoaded("#mce_0_ifr"); // load the frame
      cy.iframe("#mce_0_ifr").clear().type("Welcome {cmd+a}");
      cy.get("[aria-label='Bold']").click();
    })

  })