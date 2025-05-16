import DashboardPage from "../pages/dashboardPage.cy";
import "cypress-xpath";

const dashboardPage = new DashboardPage();

describe("Dashboard Page Feature Test (POM)", () => {
  beforeEach(() => {
    cy.loginViaUI();
  });

  it("Should navigate to Punch In or Punch Out page from Time at Work widget", () => {
    dashboardPage.clickTimeAtWorkButton();

    cy.url().should((url) => {
      expect(url).to.match(/\/attendance\/(punchIn|punchOut)$/);
    });
  });

  it("Should navigate to My Performance Review from My Actions", () => {
    dashboardPage.clickPendingSelfReview();
    cy.url().should("include", "/performance/myPerformanceReview");
  });

  it("Should navigate to Candidates to Interview from My Actions", () => {
    dashboardPage.clickCandidateToInterview();
    cy.url().should("include", "/recruitment/viewCandidates?statusId=4");
  });

  it("Should be able to click all Quick Launch buttons and verify redirection", () => {
    const buttons = {
      "Assign Leave": "/web/index.php/leave/assignLeave",
      "Leave List": "/web/index.php/leave/viewLeaveList",
      Timesheets: "/web/index.php/time/viewEmployeeTimesheet",
      "Apply Leave": "/web/index.php/leave/applyLeave",
      "My Leave": "/web/index.php/leave/viewMyLeaveList",
      "My Timesheet": "/web/index.php/time/viewMyTimesheet",
    };

    Object.entries(buttons).forEach(([title, expectedPath]) => {
      dashboardPage.clickQuickLaunch(title);

      // Assertion: pastikan URL mengandung path yang diharapkan
      cy.url().should("include", expectedPath);

      // Kembali ke dashboard untuk tombol berikutnya
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
      );
      cy.wait(500);
    });
  });

  it("Should display Buzz Latest Posts if available", () => {
    dashboardPage.getBuzzPosts().should("exist");
  });

  it("Should show Employees on Leave Today section (may be empty)", () => {
    dashboardPage.getEmployeesOnLeave().should("exist");
  });

  it("Should render Employee Distribution by Sub Unit chart", () => {
    dashboardPage.getSubUnitAndLocationChart().should("exist");
  });

  it("Should render Employee Distribution by Location chart", () => {
    dashboardPage.getSubUnitAndLocationChart().should("exist");
  });
});
