
describe('Post test feature', () => {
  it('Logged user can access to page post and view the post list', () => {
    cy.visit('/login')
    cy.get('#email').type("admin@admin.com")
    cy.get('#password').type("12345678")
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('h1', 'Listado de Posts')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  })
  it('Logged user can access to detail post view', () => {
    cy.visit('/login')
    cy.get('#email').type("admin@admin.com")
    cy.get('#password').type("12345678")
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()    
    cy.url().should('eq', 'http://localhost:8080/detail/1') 
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')    
   
  })
  it('Logged user can go back from detail post view', () => {
    cy.visit('/login')
    cy.get('#email').type("admin@admin.com")
    cy.get('#password').type("12345678")
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()    
    cy.url().should('eq', 'http://localhost:8080/detail/1')   
    cy.get('.link').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('h1', 'Listado de Posts')        
  })
})

