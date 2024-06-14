import Shooping from "cypress\e2e\Quiz_POM.cy.js"
import Shopping from "./Quiz_POM.cy"
describe('using POM' , ()=> {
    it('FirstCart' , ()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/")
        const SP = new Shopping();
        SP.clickphone();
        SP.vrifyphone();
        SP.AddToCart();
        SP.alertpopup();
        SP.CheckoutBtn();
        SP.setFristName("ans");
        SP.setLastName("ishtiaq");
        SP.setEmailID("ansishtiaq123@gmail.com")
        SP.setPhoneNo("1234567890");
        SP.setPassword("admin");
        SP.setConformPassword("admin")
        SP.setCompany("IT Enhance")
        SP.setAddress("DHA PHASE 1")
        SP.setCity("Lahore")
        SP.setState("Punjab")
        SP.setPostCode("54000")
        SP.dropdown();
        SP.dropdwonreion()
        SP.Labelcheckbox()
        SP.BtnContinue()


    })
    
    

    
    
    })