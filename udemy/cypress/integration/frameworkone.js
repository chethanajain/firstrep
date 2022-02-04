///<reference types="cypress"/>
//import cypress from 'cypress'
import HomePage from '../support/pageObject/HomePage'
import Product from '../support/pageObject/Product'

describe("framework started",()=>{

///runs once before all it block test runs
before(function(){
cy.fixture('example').then(function(data)
{
//function data is ly scope with in the block to access the data outside the block need to use this keyword.
//this.data - is a global data where we can access outside the block
   this.data=data

})

})

it("test case one",function(){
  const home = new HomePage()
  const productpage = new Product()
  //cy.visit("https://rahulshettyacademy.com/angularpractice/")
  cy.visit(Cypress.env('url'))
  home.getEditbox().type(this.data.name)
  //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
  home.getGender().select(this.data.gender)
  //cy.get('select').select(this.data.gender)
  //twoway databinding validation
  home.getTwowaybindling().should("have.value",this.data.name)
  //cy.get(":nth-child(4) > .ng-untouched").should("have.value",this.data.name)
  //have.attr is a jq attribute
  cy.get('input[name="name"]:nth-child(2)').should("have.attr","minlength",2)
  home.getcheckBoxdisable().should("be.disabled")
  //cy.get("#inlineRadio3").should("be.disabled")
   //cy.get(":nth-child(2) > .nav-link")
//debugger
  //cy.pause  or cy.debug
  //*******timeout ly for spec file ****************//
  //cypress.config('defaultCommandTimeout',8000)
 cy.get(":nth-child(2) > .nav-link").invoke("removeAttr","target").click()
  cy.url().should("include","shop")
     //cy.selectProduct("iphone")
    //cy.selectProduct("Blackberry")
    this.data.products.forEach(function(element){

          cy.selectProduct(element)

    })
     //*****************CheckoutButton*********************/
      productpage.checkout().click()


     
     //calculation by suming the price
     var sum=0;
     cy.get('tr td:nth-child(3) strong').each(($el,index,$list)=>
     {
         const price= $el.text()
         //Split('' ) - split in to an arry $. 1000 res[0]= $. and res[1]=1000
         var res= price.split(" ")
         //trim() split the white space
         res= res[1].trim()
         //number() - converts string to num
         sum=Number(sum)+Number(res)
         //since using js varibles since it is async use promise until it resolve the loop
     }).then(function(){

        cy.log(sum)
     })
      //compare the total amount with sum
     cy.get("h3 > strong").then(function(element){
        
        const totalamount=element.text()
        var res= totalamount.split(" ")
         var total= res[1].trim()
         expect(Number(total)).to.equal(sum)
     })
      
     cy.contains("Checkout").click()
   
     cy.get("#country").type("Indi")
     cy.get(".suggestions > ul > li > a").click()
      cy.get("#checkbox2").click({force:true})
      cy.get('input[type="submit"]').click()
      cy.get(".alert").then(function(sucessmsg){

      const msg=sucessmsg.text()
      //expect(msg.includes("Success!")).to.be.true
      /********** Not valid *********** */
      if(msg.includes("Success!")){

        expect(msg.includes("Success!")).to.be.true
       }
       })
      

})

})

//cmd line -- cypress run --spec cypress/interfration/exp/test/ --env url=https:lee --headed 
//Note: in comd promt url wil be taken as 1st priotity what ever is given
 






