
describe('Login test', () => {

  it('user can not access to protected routed when is not loggetd in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8080/login')
  })
  it('user whith wrong credentials can not pass', () => {
    cy.login("demo@demo.com", "12345698")    
    cy.contains('p', 'Wrong email or password')
    cy.url().should('eq', 'http://localhost:8080/login')
  })
  it('user can succesfully login', () => {
    cy.login("admin@admin.com", "12345678")    
    cy.url().should('eq', 'http://localhost:8080/')
  })
})
