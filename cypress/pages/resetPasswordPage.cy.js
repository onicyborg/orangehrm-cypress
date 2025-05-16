class ResetPasswordPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  }

  getResetPasswordHeader() {
    return cy.get('.orangehrm-forgot-password-title');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  clickResetPassword() {
    cy.get('button[type="submit"]').contains('Reset Password').click();
  }

  clickCancelButton() {
    cy.get('button').contains('Cancel').click();
  }

  getRequiredFieldError() {
    return cy.get('.oxd-input-group .oxd-text');
  }

  getSuccessMessage() {
    return cy.get('h6.orangehrm-forgot-password-title');
  }
}

export default ResetPasswordPage;
