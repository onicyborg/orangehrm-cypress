import DirectoryPage from "../pages/directoryPage.cy";
import "cypress-xpath";

const directoryPage = new DirectoryPage();

describe("Dashboard Page Feature Test (POM)", () => {
  beforeEach(() => {
    cy.loginViaUI(); // pastikan ini adalah login yang sukses
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory"
    ); // path ke directory
  });

  it("Search employee by name", () => {
    directoryPage.searchEmployeeByName("Adam");
    directoryPage.assertEmployeeListVisible();
  });

  it("Reset search filters", () => {
    directoryPage.fillAllFiltersThenReset();
    directoryPage.assertFieldsAreCleared();
  });

  it("View employee detail", () => {
    directoryPage.clickAnyEmployeeCardAndAssertDetail();
  });
});
