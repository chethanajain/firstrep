beforeEach(function (){


    cy.fixture('example').then(function(data)
    {
    //function data is ly scope with in the block to access the data outside the block need to use this keyword.
    //this.data - is a global data where we can access outside the block
       this.data=data
    
    })


})