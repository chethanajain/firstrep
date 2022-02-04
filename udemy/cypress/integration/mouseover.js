describe("Mouseover",()=>{

it("hidden mouseover",()=>{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//show is jquery cammond so we can use by invoke and show
//cy.get(".mouse-hover-content").invoke('show')
//***********click({force:true}) - tryes to click the invisible elemnts in the dom.
cy.contains("Top").click({force:true})
cy.url().should("include","top")




})




})