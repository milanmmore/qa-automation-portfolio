class AccountPage {
  navigateToOverview() {
    cy.contains('Accounts Overview').click();
  }

  verifyAccountTableVisible() {
    cy.get('#showOverview').should('be.visible');
  }

  getAccountIds() {
    return cy.get('.accountTable a').then(($links) =>
      $links.map((i, el) => Cypress.$(el).text().trim()).get()
    );
  }
}

export default AccountPage;
