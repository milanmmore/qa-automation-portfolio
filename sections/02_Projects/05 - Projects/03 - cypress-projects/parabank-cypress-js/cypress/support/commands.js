// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
});

Cypress.Commands.add('submitContactForm', (name, email, phone , message, interceptAlias = 'contactSubmit') => {
  cy.intercept('POST', '/parabank/contact.htm').as(interceptAlias);

  cy.visit('/parabank/contact.htm');

  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="phone"]').type(phone); 
  cy.get('textarea[name="message"]').type(message);

  cy.get('input[value="Send to Customer Care"]').click();
  //cy.get('form').submit();

cy.wait(`@${interceptAlias}`).then((interception) => {
  expect(interception.response.statusCode).to.eq(200);

  const parsedBody = new URLSearchParams(interception.request.body);
  expect(parsedBody.get('message')).to.eq('This is a test message.');
});

});

Cypress.Commands.add('submitContactFormWithStub', (name, email, phone, message, stubResponse) => {
  cy.intercept('POST', '**/contact.htm', stubResponse).as('contactStub');

  cy.visit('/parabank/contact.htm');

  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="phone"]').type(phone);
  cy.get('textarea[name="message"]').type(message);

  cy.get('input[value="Send to Customer Care"]').click();

  cy.document().then((doc) => {
  console.log(doc.body.innerHTML);
  });

  // Verify the stubbed response
  //cy.wait('@contactStub');
  cy.wait('@contactStub').its('response.statusCode').should('eq', 500);

  cy.contains('Internal Server Error').should('be.visible');
  
});

