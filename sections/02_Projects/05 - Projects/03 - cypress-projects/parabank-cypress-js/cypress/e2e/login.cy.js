import LoginPage from '../support/pageObjects/LoginPage';

describe.only('Login Tests', () => {
  const loginPage = new LoginPage();

  it('TC001 - Valid Login', () => {
    loginPage.login('john', 'demo');
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('TC002 - Invalid Login', () => {
    loginPage.login('test', 'test');
    cy.contains('The username and password could not be verified.').should('be.visible');
  });

  it('TC003 - Login with invalid Password for valid user', () => {
    loginPage.login('milan', 'test');
    cy.contains('Accounts Overview').should('be.visible');
  });

});
