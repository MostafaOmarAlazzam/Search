/// <reference types= "cypress" />

describe ('test to log in',()=>{
  it('Search on google',()=>{
    cy.visit("https://google.com")
    cy.get('#APjFqb').type("mostafa alazzam {enter}")
  })
  
})