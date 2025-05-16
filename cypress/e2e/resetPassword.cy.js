import ResetPasswordPage from '../pages/resetPasswordPage.cy';

const resetPasswordPage = new ResetPasswordPage();

describe('OrangeHRM Reset Password Feature (POM)', () => {
  beforeEach(() => {
    resetPasswordPage.visit();
    cy.wait(1000);
  });

  it('Reset password dengan username valid', () => {
    resetPasswordPage.fillUsername('Admin');
    resetPasswordPage.clickResetPassword();

    // Validasi URL dan pesan sukses setelah redirect
    cy.url().should('include', '/auth/sendPasswordReset');
    resetPasswordPage.getSuccessMessage()
      .should('contain', 'Reset Password link sent successfully')
      .and('be.visible');
  });

  it('Reset password dengan username kosong', () => {
    resetPasswordPage.clickResetPassword();

    resetPasswordPage.getRequiredFieldError()
      .should('contain', 'Required')
      .and('be.visible');
  });

  it('Klik tombol cancel harus kembali ke halaman login', () => {
    resetPasswordPage.clickCancelButton();
    cy.url().should('include', '/auth/login');
  });
});
