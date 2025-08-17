describe('Google Search', () => {
  it('should search for Cypress', () => {
    cy.visit('https://google.com')
    cy.get('input[name="q"]').type('Cypress.io{enter}')
    cy.contains('Cypress.io')
  })
})
