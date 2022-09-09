/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";

describe("Parabank login", () => {
  beforeEach(() => {
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
    });
    cy.fixture("loginPageMessages").then(function (credentials) {
      this.credentials = credentials;
    });
  });
  it("Login with valid credentials", function () {
    const loginPage = new LoginPage();
    loginPage
      .navigate()
      .enterUsername(this.testdata.username)
      .enterPassword(this.testdata.password)
      .submit();
    cy.url().should("be.equal", this.testdata.overviewUrl);
  });
  it("Login with invalid credentials", function () {
    const loginPage = new LoginPage();
    loginPage
      .navigate()
      .enterUsername("invalid")
      .enterPassword("invalid")
      .submit()
      .getInvalidCredentialsError(this.credentials.invalidCredentials);
  });
  it("Login with empty username and password", function () {
    const loginPage = new LoginPage();
    loginPage
      .navigate()
      .submit()
      .getEmptyCredentialsError(this.credentials.emptyCredentials);
  });
  it("Login with empty password", function () {
    const loginPage = new LoginPage();
    loginPage
      .navigate()
      .enterUsername("Jonh")
      .submit()
      .getEmptyCredentialsError(this.credentials.emptyCredentials);
  });
});
