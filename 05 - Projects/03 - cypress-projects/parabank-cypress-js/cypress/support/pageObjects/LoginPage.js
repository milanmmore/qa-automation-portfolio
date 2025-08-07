class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('input[type="submit"]').click();
  }

  login(username, password) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

export default LoginPage;
