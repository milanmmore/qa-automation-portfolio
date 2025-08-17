## 🛠️ Step-by-Step: Using cy.intercept() for the Contact Form
## 📍 Assumptions

The contact form sends a POST request to something like /contact or /sendMessage.

You have a spec file like contactForm.cy.js.

## 1. 🔍 Inspect the Network Request
Before intercepting, open the ParaBank app, fill out the contact form, and submit it. Use browser dev tools (Network tab) to find:

    Request URL (e.g., /contact.htm)
    Method (likely POST)
    Payload (e.g., name, email, message)

## 2. 🧪 Basic Intercept to Monitor the Request
``` js
describe('Contact Form - Intercept Example', () => {
  it('should intercept contact form submission', () => {
    cy.visit('/contact.htm');

    cy.intercept('POST', '/contact.htm').as('contactSubmit');

    // Fill out the form
    cy.get('input[name="name"]').type('Milan QA');
    cy.get('input[name="email"]').type('milan@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // Submit the form
    cy.get('form').submit();

    // Wait for the intercepted request
    cy.wait('@contactSubmit').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.body).to.include('This is a test message');
    });
  });
});
```

## 3. 🧪 Stub the Response (Simulate Server Behavior)
``` js
cy.intercept('POST', '/contact.htm', {
  statusCode: 200,
  body: 'Message received successfully!',
}).as('contactStub');
```
This lets you test how the UI behaves when the server returns a success message — or you can simulate errors:

```js
cy.intercept('POST', '/contact.htm', {
  statusCode: 500,
  body: 'Internal Server Error',
}).as('contactError');
```
## 4. ✅ Add Assertions for UI Feedback
After submitting, check for confirmation messages:

``` js
cy.get('.confirmation').should('contain', 'Message received successfully!');
```
Or for error handling:

```js
cy.get('.error').should('contain', 'Something went wrong');
```
## 🧠 Pro Tip
You can also use cy.intercept() to:

- Validate headers
- Delay responses (delayMs)
- Test retry logic or loading spinners

