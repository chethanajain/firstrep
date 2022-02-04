/// <reference types= "cypress" />

describe("Learning automation",()=>{

it("my first script",()=>{


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(".search-keyword").type("ca")
cy.wait(1000)
cy.get(".product:visible").should("have.length",4)
//aliase by using as
cy.get(".products").as('prodloc')
////find will search in child path 
cy.get("@prodloc").find(".product").should('have.length',4)
//Contains will select the text from the dom
cy.get("@prodloc").find(".product").eq(2).contains("ADD TO CART").click()
//array then use each
cy.get("@prodloc").find(".product").each(($el,index,$list)=>
    {
        
        const text=$el.find(".product-name").text()
        //includes display the subtext from the sentance.
        if(text.includes("Carrot"))

        {
            $el.find('type[button]').click()
                  //cy.wrap($el.find('type[button]')).click()
        }

    })
//asyc 
//since apart from cy command it will throw the error use promise then()
    //const logo=cy.get(".brand greenLogo")
      //cy.log(logo.text()) // text() is not a cy command itz a jq command.
      cy.get(".brand").should('have.text',"GREENKART")
    cy.get(".brand").then(function(logoname)
    {
        
       cy.log(logoname.text())


    })

})
})