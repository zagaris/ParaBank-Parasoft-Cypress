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

  getSuccessfulRegistration() {
    cy.get("[id=rightPanel]").contains(
      "Your account was created successfully. You are now logged in."
    );
    return this;
  }

  getDuplicateUsernameError() {
    cy.get("[id='customer.username.errors']").contains(
      "This username already exists."
    );
    return this;
  }

  getNotMatchingPasswordsError() {
    cy.get("[id='repeatedPassword.errors']").contains(
      "Passwords did not match."
    );
    return this;
  }

  getEmptyFirstNameError() {
    cy.get(".form2").contains("First name is required.");
    return this;
  }

  getEmptyLastNameError() {
    cy.get(".form2").contains("Last name is required.");
    return this;
  }

  getEmptyAddressError() {
    cy.get(".form2").contains("Address is required.");
    return this;
  }

  getEmptyCityError() {
    cy.get(".form2").contains("City is required.");
    return this;
  }

  getEmptyStateError() {
    cy.get(".form2").contains("State is required.");
    return this;
  }

  getEmptyZipCodeError() {
    cy.get(".form2").contains("Zip Code is required");
    return this;
  }

  getEmptySSNError() {
    cy.get(".form2").contains("Social Security Number is required.");
    return this;
  }

  getEmptyUsernameError() {
    cy.get(".form2").contains("Username is required.");
    return this;
  }

  getEmptyPasswordError() {
    cy.get(".form2").contains("Password is required.");
    return this;
  }

  getEmptyConfirmationPasswordError() {
    cy.get(".form2").contains("Password confirmation is required.");
    return this;
  }
}

export default RegisterPage;
