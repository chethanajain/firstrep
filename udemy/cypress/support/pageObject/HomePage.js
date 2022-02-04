

 class HomePage{

 getEditbox()
 {

   return cy.get('input[name="name"]:nth-child(2)')
}
 getGender()
    {
      return  cy.get('select')
    }

  getTwowaybindling()

  {

    return cy.get(":nth-child(4) > .ng-untouched")
  }

    

  getcheckBoxdisable()
  {
    return cy.get("#inlineRadio3")
  }

  
}
  
export default HomePage;