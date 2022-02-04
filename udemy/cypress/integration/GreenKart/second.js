describe("my second testcase",()=>{


it("second script",()=>{


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

           cy.get('.cart-icon > img').click()
           cy.contains('PROCEED TO CHECKOUT').click()
           cy.contains('Place Order').click()
})




})