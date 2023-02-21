describe('Mouse Operation', () => {


    it('Mouse Hover', () => {
      cy.visit("https://demo.opencart.com");   
      cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger('mouseover').click();
      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)").should('be.visible');  
    })

    it.only('Riht Click', () => {
        cy.visit("https://demo.opencart.com");  
        cy.get("a[href='https://demo.opencart.com/index.php?route=product/manufacturer&language=en-gb']").rightclick();
        cy.get("a[href='https://demo.opencart.com/index.php?route=product/manufacturer&language=en-gb']").should('be.visible');
      })

      it('Double Click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filname=tryhtml5_ev_ondblclick3");    //parent tab
        cy.frameLoaded("#mce_0_ifr"); // load the frame
        cy.iframe("#mce_0_ifr").find("button[onclick='myfunction']").dblclick();
        
      })

      
    it('Drag and Drop', () => {
        cy.visit("http:www.dhtmlgoodies.com/script/drag-drop-custom/demo-drag-drop-3.html")    //parent tab
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');
        cy.wait(3000);
        cy.get('#box6').drag('#box106',{force:true});
      })

      
    it('Scrolling Page', () => {
        cy.visit("https://the-internet.herokuapp.com/iframes")    //parent tab
        cy.get(':nth-child(1) > tbody >').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody >').scrollIntoView({duration:2000}).should('be.visible');
        
      })
  })