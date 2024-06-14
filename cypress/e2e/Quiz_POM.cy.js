class Shopping {

    phone="a[id='mz-product-listing-image-39213264-0-0'] div[class='carousel-item active'] img[title='HTC Touch HD']"
    vrifyphone=".h3"
    addcart="div[id='entry_216842'] button[title='Add to Cart']"
    checkout="a[class='btn btn-lg btn-primary']"
    firstName="#input-payment-firstname"
    lastName="#input-payment-lastname"
    eamil="#input-payment-email"
    telephone="#input-payment-telephone"
    pasword="#input-payment-password"
    conformPassword="#input-payment-confirm"
    company="#input-payment-company"
    address="#input-payment-address-1"
    city="#input-payment-city"
    postalCode="#input-payment-postcode"
    country="#input-payment-country"
    region="#input-payment-zone"
    label="label[for='input-agree']"
    continueBtn="#button-save"

    clickphone(){
    cy.get(this.phone).click();
}

    vrifytitle(){
    cy.get(this.vrifyphone).click();
}
    AddToCart(){
        cy.get(this.addcart).click();
    }

    alertpopup(){
        cy.get("#trigger-alert--button").click();
        cy.get(".custom-alert").should('be.visible').and('contains', 'expected alert text');
        cy.get('custom-alert').should('not.exist');        
    }

    CheckoutBtn(){
        cy.get(this.checkout).click();
    }

    setFristName(firstName){
        cy.get(this.firstName).type(firstName);
    }

    setLastName(lastName){
        cy.get(this.lastName).type(lastName);
    }
    setEmailID(email){
        cy.get(this.eamil).type(email);
    }
    setTelephone(telephone){
        cy.get(this.telephone).type(telephone);
    }
    setPassword(password){
        cy.get(this.pasword).type(password);
    }
    setConformPassword(conformPassword){
        cy.get(this.conformPassword).type(conformPassword);
    }
    setCompany(company){
        cy.get(this.company).type(company);
    }
    setAddress(address){
        cy.get(this.address).type(address);
}
    setCity(city){
        cy.get(this.city).type(city);
    }
    setPostCode(postCode){
        cy.get(this.postalCode).type(postCode);
}
    dropdown(){
        cy.get(this.country).should('have.value','Pakistan').click();
    }
    dropdwonreion(){
        cy.get(this.region).select('Punjab').should('have.value','Punjab');
    }
    Labelcheckbox(){
        cy.get(this.Labelcheckbox).check().should('be.checked');
    }
    BtnContinue(){
        cy.get(this.BtnContinue).click();
    }
}
export default Shopping;