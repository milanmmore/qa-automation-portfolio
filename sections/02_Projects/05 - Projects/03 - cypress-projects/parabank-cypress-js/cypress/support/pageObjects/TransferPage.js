class TransferPage {
    visit() {
    cy.contains('Transfer Funds').click(); 
    //cy.visit('/transfer.htm');
  }

  selectFromAccount(accountId) {
    cy.get('select#fromAccountId').select(accountId);
  }

  selectToAccount(accountId) {
    cy.get('select#toAccountId').select(accountId);
  }

  enterAmount(amount) {
    cy.get('#amount').type(amount);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  transferFunds(from, to, amount) {
    this.visit();
    this.selectFromAccount(from);
    this.selectToAccount(to);
    this.enterAmount(amount);
    this.submit();
  }
}

export default TransferPage;
