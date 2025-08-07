class ContactPage {
  visit() {
    // Optional: Clear cookies and local storage to avoid session issues
    cy.clearCookies();
    cy.clearLocalStorage();

    // Visit the Contact Us page directly
    cy.visit('/parabank/contact.htm');

    // Wait for the 'Contact Us' heading to appear
    cy.contains('Contact Us').first().click();
  }

  fillForm(name, email, message) {
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="phone"]').type('1234567890'); 
    cy.get('textarea[name="message"]').type(message);
  }

  submit() {
    cy.get('input[value="Send to Customer Care"]').click();
  }

  verifySuccessMessage() {
    cy.contains(`Thank you ${name}`).should('be.visible');
  }
}

export default ContactPage;
