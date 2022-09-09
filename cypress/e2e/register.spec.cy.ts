/// <reference types="cypress" />

import RegisterPage from "./PageObject/RegisterPage";

describe("Parabank register", () => {
  beforeEach(() => {
    cy.fixture("registrationInfo").then(function (testdata) {
      this.testdata = testdata;
    });
    cy.fixture("registrationPageMessages").then(function (registrationData) {
      this.registrationData = registrationData;
    });
  });
  it("Register with correct info", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getSuccessfulRegistrationMessage(
        this.registrationData.successfulRegistrationMessage
      );
  });
  it("Register user with existing username", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername("Yiannis9999")
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getDuplicateUsernameError(
        this.registrationData.duplicateUsernameErrorMessage
      );
  });
  it("Register user with no matching passwords", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword("12345")
      .enterConfirmationPassword("1234")
      .submit()
      .getNoMatchingPasswordsError(
        this.registrationData.noMatchingPasswordsErrorMessage
      );
  });
  it("Register user with empty First Name", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyFirstNameError(this.registrationData.emptyFirstNameErrorMessage);
  });
  it("Register user with empty Last Name", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyLastNameError(this.registrationData.emptyLastNameErrorMessage);
  });
  it("Register user with empty address", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyAddressError(this.registrationData.emptyAddressErrorMessage);
  });
  it("Register user with empty city", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyCityError(this.registrationData.emptyCityErrorMessage);
  });
  it("Register user with empty state", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyStateError(this.registrationData.emptyStateErrorMessage);
  });
  it("Register user with empty zip code", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyZipCodeError(this.registrationData.emptyZipCodeMessage);
  });
  it("Register user with empty SSN", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptySSNError(this.registrationData.emptySSNErrorMessage);
  });
  it("Register user with empty username", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterPassword(this.testdata.password)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyUsernameError(this.registrationData.emptyUsernameErroMessage);
  });
  it("Register user with empty password", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterConfirmationPassword(this.testdata.confirmationPassword)
      .submit()
      .getEmptyPasswordError(this.registrationData.emptyPasswordMessage);
  });
  it("Register user with empty confirmation password", function () {
    const registerPage = new RegisterPage();
    registerPage
      .navigate()
      .enterFirstName(this.testdata.firstname)
      .enterLastName(this.testdata.lastname)
      .enterAddress(this.testdata.address)
      .enterCity(this.testdata.city)
      .enterState(this.testdata.state)
      .enterZipCode(this.testdata.zipCode)
      .enterPhoneNumber(this.testdata.phoneNumber)
      .enterSSN(this.testdata.ssn)
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .submit()
      .getEmptyConfirmationPasswordError(
        this.registrationData.emptyConfirmationPasswordErrorMessage
      );
  });
});
