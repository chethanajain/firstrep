describe("APi automation",()=>{

it("Get call",()=>{
//{request,response}
cy.visit("https://www.rahulshettyacademy.com/angularAppdemo/")
cy.intercept({
    method:'GET',
    url :'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'}
,
{
    statuscode :200,
    body:[
            {
              "book_name": "RestAssured with Java",
              "isbn": "RSU",
              "aisle": "2301"
            }
    ]
    
}).as('bookdetails') //as aliags storing in varibale using .as

cy.get("button[class='btn btn-primary']").click()
cy.wait('@bookdetails').should(({request,response})=>{

       cy.get("tr").should("have.length",response.body.length+1) // +1 header coloum 

})
cy.get("p").should("have.text","Oops only 1 Book available")

})


})