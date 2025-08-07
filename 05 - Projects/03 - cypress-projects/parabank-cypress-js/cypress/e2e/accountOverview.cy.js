import LoginPage from '../support/pageObjects/LoginPage';
import AccountPage from '../support/pageObjects/accountPage';


describe('TC004 - Account Overview', () => {
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();

  it('should display account balances', () => {
    loginPage.login('john', 'demo');
    accountPage.navigateToOverview();
    accountPage.verifyAccountTableVisible();
  });
});
