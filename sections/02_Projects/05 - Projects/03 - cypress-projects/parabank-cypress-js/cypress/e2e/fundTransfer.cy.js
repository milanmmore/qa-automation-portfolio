import LoginPage from '../support/pageObjects/LoginPage';
import TransferPage from '../support/pageObjects/TransferPage';

describe('Fund Transfer', () => {
  const loginPage = new LoginPage();
  const transferPage = new TransferPage();

  beforeEach(() => {
    loginPage.login('john', 'demo');
  });

  it('TC003 - Transfer Funds', () => {
    cy.fixture('transferData').then(data => {
      transferPage.transferFunds(data.from, data.to, data.amount);
      cy.contains('Transfer Complete!').should('be.visible');
    });
  });
});
