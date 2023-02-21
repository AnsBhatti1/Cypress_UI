import 'cypress-file-upload';

describe('File UPload', () => {


    it('Single FileUPLoad', () => {
      cy.visit("https://the-internet.herokuapp.com/upload")    //parent tab
      cy.get("#file-upload").attachFile('file.txt');
      cy.get("#file-submit").click();
      cy.get(5000);
    })

    
    it('file upload Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")    //parent tab
        cy.get("#file-upload").attachFile({filepath:'file.txt', filename:'fileRename.txt'});
        cy.get("#file-submit").click();
        cy.get(5000);
      })

          
    it.only('file Drag and Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")    //parent tab
        cy.get("#drag-drop-upload").attachFile('file.txt',{subjectType:'drag-n-drop'});
        cy.get(5000);
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
        .contains("ile.txt");
        
      })

      it('Multiple File Upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")    //parent tab
        cy.get("#file-upload").attachFile({filepath:'file.txt', filename:'fileRename.txt'});
        cy.get("#file-submit").click();
        cy.get(5000);
      })

      it('File Upload - Shadom DOM', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")    //parent tab
        cy.get("#file-upload",{includeShadowDom:true}).attachFile('file.txt');
        cy.get(5000);
        cy.get("#file-upload",{includeShadowDom:true}).contains('file.txt');
      })
  })