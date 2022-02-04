describe("windows child tab",()=>{

    it("windows tab",()=>{
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').then(function(attr){
    //prop() is a jquery method which will fecth the attrbuite value
          const url=attr.prop('href')
          cy.log(url)
          //cypress will not support the subdomin like google
          cy.visit(url)
    
    
    
    })
    
    
    
    })
    
    
    
    
    })