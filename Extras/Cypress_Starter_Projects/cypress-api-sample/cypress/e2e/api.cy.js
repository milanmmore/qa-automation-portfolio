describe('API Testing with Cypress', () => {
  const apiUrl = 'https://reqres.in/api/users';

  it('GET Users', () => {
    cy.request('GET', apiUrl).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.length.greaterThan(0)
    })
  })

  it('POST Create User', () => {
    cy.request('POST', apiUrl, { name: 'Milan', job: 'QA' }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
    })
  })
})
