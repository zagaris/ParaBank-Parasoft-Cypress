class RegisterPage {
  navigate() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    return this;
  }

  enterFirstName(firstname: string) {
    cy.get("input[id='customer.firstName']").clear().type(firstname);
    return this;
  }

  enterLastName(lastname: string) {
    cy.get("input[id='customer.lastName']").clear().type(lastname);
    return this;
  }

  enterAddress(address: string) {
    cy.get("input[id='customer.address.street']").clear().type(address);
    return this;
  }

  enterCity(city: string) {
    cy.get("input[id='customer.address.city']").clear().type(city);
    return this;
  }

  enterState(state: string) {
    cy.get("input[id='customer.address.state']").clear().type(state);
    return this;
  }

  enterZipCode(zipCode: string) {
    cy.get("input[id='customer.address.zipCode']").clear().type(zipCode);
    return this;
  }

  enterPhoneNumber(phoneNumber: string) {
    cy.get("input[id='customer.phoneNumber']").clear().type(phoneNumber);
    return this;
  }

  enterSSN(ssn: string) {
    cy.get("input[id='customer.ssn']").clear().type(ssn);
    return this;
  }

  enterUsername(username: string) {
    cy.get("input[id='customer.username']").clear().type(username);
    return this;
  }

  enterPassword(password: string) {
    cy.get("input[id='customer.password']").clear().type(password);
    return this;
  }

  enterConfirmationPassword(password: string) {
    cy.get("input[id='repeatedPassword']").clear().type(password);
    return this;
  }

  submit() {
    cy.get("[id=customerForm]").submit();
    return this;
  }

  getSuccessfulRegistrationMessage(message: string) {
    cy.get("[id=rightPanel]").contains(message);
    return this;
  }

  getDuplicateUsernameError(message: string) {
    cy.get("[id='customer.username.errors']").contains(message);
    return this;
  }

  getNoMatchingPasswordsError(message: string) {
    cy.get("[id='repeatedPassword.errors']").contains(message);
    return this;
  }

  getEmptyFirstNameError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyLastNameError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyAddressError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyCityError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyStateError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyZipCodeError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptySSNError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyUsernameError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyPasswordError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }

  getEmptyConfirmationPasswordError(message: string) {
    cy.get(".form2").contains(message);
    return this;
  }
}

export default RegisterPage;
