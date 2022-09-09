class LoginPage {
  navigate() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    return this;
  }

  enterUsername(username: string) {
    cy.get("input[name=username]").clear().type(username);
    return this;
  }

  enterPassword(password: string) {
    cy.get("input[name=password]").clear().type(password);
    return this;
  }

  submit() {
    cy.get("[name=login]").submit();
    return this;
  }

  getInvalidCredentialsError() {
    cy.get("[class=error]").contains(
      "The username and password could not be verified."
    );
    return this;
  }

  getEmptyCredentialsError() {
    cy.get("[class=error]").contains("Please enter a username and password.");
    return this;
  }
}

export default LoginPage;
