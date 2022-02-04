describe("alert popup",()=>{
    it("alert testcase",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        //cypress will auto fire the capability of browser by using windows.alert
        cy.on("window:alert",(str)=>{

        //capture the text from the popup 
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
    })

       //confirm popup
    //    cy.get("#confirmbtn").click()
    //    cy.on("windows:confirm",(confirmstr)=>{

    //    expect(confirmstr).to.equal("Hello , Are you sure you want to confirm?")

    //     })

        //childpop - it will never open in new tab(cypress will not support) - it will in same tab by using invoke function 

        cy.get("#opentab").invoke("removeAttr","target").click()
        cy.url().should("include","rahulshettyacademy")
        cy.go("back")
        //include - it will check the string present in the url includes the string which ever is given.


    })

})