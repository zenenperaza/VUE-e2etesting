
describe('Post test feature', () => {

  beforeEach(()=>{
    cy.login("admin@admin.com", "12345678")
    cy.url().should('eq', 'http://localhost:8080/')
  }),

  it('Logged user can access to page post and view the post list', () => {
    
    cy.contains('h1', 'Listado de Posts')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  })
  it('Logged user can access to detail post view', () => {
    
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()    
    cy.url().should('eq', 'http://localhost:8080/detail/1') 
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')    
   
  })
  it('Logged user can go back from detail post view', () => {
    
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()    
    cy.url().should('eq', 'http://localhost:8080/detail/1')    
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')       
    cy.get('.link').click()
    cy.url().should('eq', 'http://localhost:8080/')
    cy.contains('h1', 'Listado de Posts')        
  })
})

