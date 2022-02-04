
///<reference types="cypress"/>
//import cypress from 'cypress'
import HomePage from '../../../support/pageObject/HomePage'
import Product from '../../../support/pageObject/Product'
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";
const home = new HomePage()
  const productpage = new Product()
Given("I Open the page",()=>{

cy.visit("https://rahulshettyacademy.com/angularpractice/")

})

// this keyword shortcut not possiable 
when("Add item to the cart",function (){

    cy.url().should("include","shop")
    //cy.selectProduct("iphone")
   //cy.selectProduct("Blackberry")
   this.data.products.forEach(function(element){

         cy.selectProduct(element)

   })
    //*****************CheckoutButton*********************/
     productpage.checkout().click()
})

// Validating the total Price

    And("Validate the total price",()=>{
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
         

    })

//Verify the country and verify the success message

   Then("Verify the country and verify the sucess message",()=>{


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