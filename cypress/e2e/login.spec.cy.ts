/// <reference types="cypress" />

import LoginPage from "./PageObject/LoginPage";

describe("Parabank login", () => {
  before(() => {
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  it("Login with valid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterUsername(this.testdata.username);
    login.enterPassword(this.testdata.password);
    login.submit();
    cy.url().should("be.equal", this.testdata.overviewUrl);
  });
  it("Login with invalid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterUsername("invalid");
    login.enterPassword("invalid");
    login.submit();
    login.getInvalidCredentialsError();
  });
  it("Login with empty username and password", function () {
    const login = new LoginPage();
    login.navigate();
    login.submit();
    login.getEmptyCredentialsError();
  });
  it("Login with empty password", function () {
    const login = new LoginPage();
    login.navigate();
    login.enterUsername("Jonh");
    login.submit();
    login.getEmptyCredentialsError();
  });
});
