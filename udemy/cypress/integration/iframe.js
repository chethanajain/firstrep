/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

//**********************npm install -D cypress-iframe********** */
import 'cypress-iframe'

describe("iframe",()=>{

it("iframe",()=>{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

//cy.get('#opentab').then(function(attr){
//prop() is a jquery method which will fecth the attrbuite value
      //const url=attr.prop('href')
      //cy.log(url)
      //cypress will not support the subdomin like google
      //cy.visit(url)


//env is the cypress configration so pass with env and url or ur prject
//{ when trying to concantenate with other subdomain
//cypress.env('url')+ "/angularpractice/"




})



})



