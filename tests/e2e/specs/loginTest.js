
describe('Login test', () => {
  it('user can not access to protected routed when is not loggetd in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8080/login')
  })
  it('user whith wrong credentials can not pass', () => {
    cy.visit('/login')
    cy.get('#email').type("demo@demo.com")
    cy.get('#password').type("12345698")
    cy.get('button').click()
    cy.contains('p', 'Wrong email or password')
    cy.url().should('eq', 'http://localhost:8080/login')
  })
  it('user can succesfully login', () => {
    cy.visit('/login')
    cy.get('#email').type("admin@admin.com")
    cy.get('#password').type("12345678")
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8080/')
  })
})
