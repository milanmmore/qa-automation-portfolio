import ContactPage from '../support/pageObjects/ContactPage';

describe('TC005 - Contact Us Form', () => {
  const contactPage = new ContactPage();

  it.skip('should submit contact form successfully', () => {
    contactPage.visit();
    contactPage.fillForm('Milan QA', 'milan@example.com', 'This is a test message.');
    contactPage.submit();
    contactPage.verifySuccessMessage();
  });

  it.skip('should submit contact form and verify intercept', () => {
    cy.submitContactForm('Milan QA', 'milan@example.com', '1234567890', 'This is a test message.');
    cy.contains(`Thank you ${name}`).should('contain', 'Thank you Milan QA');
    
  });

  it('should show error message on server failure', () => {
  cy.submitContactFormWithStub('Milan QA', 'milan@example.com', '1234567890','Test message', {
    statusCode: 500,
    body: 'Internal Server Error',
  });

  cy.get('.error').should('contain', 'Something went wrong');
});

  it('shows error message on server failure', () => {
  const stubResponse = {
    statusCode: 500,
    body: { error: 'Internal Server Error' }
  };

  cy.submitContactFormWithStub('Milan', 'milan@example.com', '1234567890', 'Test message', stubResponse);

});

  
});

