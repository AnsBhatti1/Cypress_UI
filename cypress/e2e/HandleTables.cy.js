describe('Handle Table', () => {
   
    // javascript Alert it will have some text and OK button
    beforeEach('Login', () => {
      cy.visit("https://demo.opencart.com/admin/index.php");
      cy.get("#input-username").type("demo");
      cy.get("#input-password").type("demo");
      cy.get("button[type='submit']").click();
     // cy.get(".btn-close").click();
     cy.wait(3000);
      
      cy.get("#menu-customer>a").click();  // customer main menu
      cy.get("#menu-customer>ul>li:first-child").click(); // customer sub/childitem
})
    it.skip('check number of row $ column',()=>{
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10'); 
    cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7');   
})

    it.skip('check cell data from specific row $ column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("rs@yopmail.com"); 
    })

    it.skip('Read all the rows and column data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols )=>{
                    cy.log($col.text());
                })

            })
        }) 
    })

    //find total num of pages
    it.skip('Pagination',()=>{
        let TotalPages;
        cy.get(".col-sm-6.text-end").than( (e)=>{
            let mytext=e.text(); //showing 1 to 10 of 5581 (559 pages)
        TotalPages =mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
        cy.get("Total Num of pages in table"+TotalPages);    

        })
      
    })


})