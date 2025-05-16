Cypress.Commands.add("loginViaUI", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get('input[name="username"]').type("Admin");
  cy.get('input[name="password"]').type("admin123");
  cy.get('button[type="submit"]').click();

  // Tunggu sampai dashboard muncul sebagai indikasi login sukses
  cy.url().should("include", "/dashboard");

  // Tunggu shortcut API sebagai tanda loading dashboard selesai
  cy.intercept("GET", "/web/index.php/api/v2/dashboard/shortcuts").as(
    "shortcuts"
  );
  cy.wait("@shortcuts").its("response.statusCode").should("eq", 200);
});
