class LoginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  getErrorMessage() {
    return cy.get(".oxd-alert-content-text");
  }

  getUsernameRequiredError() {
    return cy.get(":nth-child(2) > .oxd-input-group > .oxd-text");
  }

  getPasswordRequiredError() {
    return cy.get(":nth-child(3) > .oxd-input-group > .oxd-text");
  }

  clickForgotPassword() {
    cy.contains("Forgot your password?").click();
  }

  getResetPasswordHeader() {
    return cy.get("h6.oxd-text.oxd-text--h6.orangehrm-forgot-password-title");
  }
}

export default LoginPage;
