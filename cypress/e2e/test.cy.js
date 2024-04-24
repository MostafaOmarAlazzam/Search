/// <reference types= "cypress" />

describe ('test to log in',()=>{
  it('correct username And passwoed',()=>{
    cy.visit("https://google.com")
    cy.get('#APjFqb').type("mostafa alazzam {enter}")
  })
  /*it('username correct and passwoed incorect',()=>{
    cy.visit("https://google.com")
  })*/
})