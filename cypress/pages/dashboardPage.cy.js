class DashboardPage {
  clickTimeAtWorkButton() {
    cy.get("button.orangehrm-attendance-card-action").click();
  }

  clickPendingSelfReview() {
    cy.contains("Pending Self Review").click();
  }

  clickCandidateToInterview() {
    cy.contains("(1) Candidate to Interview").click();
  }

  clickQuickLaunch(title) {
    cy.get(".orangehrm-quick-launch-card")
      .contains(title)
      .parents(".orangehrm-quick-launch-card")
      .find("button")
      .click();
  }

  getBuzzPosts() {
    return cy.get(".orangehrm-buzz-widget-body");
  }

  getEmployeesOnLeave() {
    return cy.get(".emp-leave-chart").contains("Employees on Leave Today");
  }

  getSubUnitAndLocationChart() {
    return cy.get(".emp-distrib-chart .oxd-pie-chart canvas");
  }
}

export default DashboardPage;
