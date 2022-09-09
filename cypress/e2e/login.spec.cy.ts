/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";

describe("Parabank login", () => {
  before(() => {
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
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
      .getInvalidCredentialsError();
  });
  it("Login with empty username and password", function () {
    const loginPage = new LoginPage();
    loginPage.navigate().submit().getEmptyCredentialsError();
  });
  it("Login with empty password", function () {
    const loginPage = new LoginPage();
    loginPage
      .navigate()
      .enterUsername("Jonh")
      .submit()
      .getEmptyCredentialsError();
  });
});
