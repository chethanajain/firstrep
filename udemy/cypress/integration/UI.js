describe("Checkbox and dropdown",()=>{

it("UI testcase",()=>{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//should.have(compare) and should.be(behavral)
//check is used for checkbox.
cy.get("#checkBoxOption1").check().should("be.checked").and('have.value',"option1")
cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
cy.get('input[type="checkbox"]').check(['option2','option3'])

//drop down static
cy.get('select').select('option1').should('have.value','option1')

//dyanmaic
cy.get("#autocomplete").type("Ind")
//cy.wait(5000)
cy.get('.ui-menu-item div').each(($el,index,$list)=>{

    if($el.text()==="India")
    {
        $el.click()
    }

})

cy.get("#autocomplete").should('have.value',"India")
//visible hide and show
cy.get("#displayed-text").should('be.visible')
cy.get("#hide-textbox").click()
cy.get("#displayed-text").should('not.be.visible')
cy.get("#show-textbox").click()
cy.get("#displayed-text").should('be.visible')

//radio buttons

cy.get('input[name="radioButton"]').check("radio2").should('have.value',"radio2")

})




})