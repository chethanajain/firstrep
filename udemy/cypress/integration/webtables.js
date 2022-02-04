describe("webtables",()=>{

it("testcase1",()=>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("tr td:nth-child(2)").each(($e1,index,$list)=>
{

    const course=$e1.text()
    if(course.includes("Python "))
    {


        //to travese to child or slibling from parent in cypress we have to use "next" and can be used with "get" ly
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

          const pricetext=price.text()
          expect(pricetext).to.equal("25")

        })
        

    }


})

//for finding child tr td:nth-child(2) //second coloum 

})

    
})