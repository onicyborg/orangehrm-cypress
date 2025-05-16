class DirectoryPage {
  searchEmployeeByName(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.wait(1000); // tunggu autocomplete muncul
    cy.get(".oxd-autocomplete-dropdown > *").first().click();
    cy.contains("button", "Search").click();
  }

  assertEmployeeListVisible() {
    cy.get(".orangehrm-container .oxd-grid-item").should(
      "have.length.greaterThan",
      0
    );
  }

  fillAllFiltersThenReset() {
    // Isi nama employee
    cy.get('input[placeholder="Type for hints..."]').type("Adam");
    cy.wait(1000);
    cy.get(".oxd-autocomplete-dropdown > *").first().click();

    // Select Job Title
    cy.get("div.oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown > *").eq(1).click(); // ambil pilihan ke-2 (bukan default "--Select--")

    // Select Location
    cy.get("div.oxd-select-text").eq(1).click();
    cy.get(".oxd-select-dropdown > *").eq(1).click();

    cy.contains("button", "Search").click();

    // Klik tombol reset
    cy.contains("button", "Reset").click();
  }

  assertFieldsAreCleared() {
    cy.get('input[placeholder="Type for hints..."]').should("have.value", "");
    cy.get("div.oxd-select-text").eq(0).should("contain.text", "-- Select --");
    cy.get("div.oxd-select-text").eq(1).should("contain.text", "-- Select --");
  }

  clickEmployeeCard(name) {
    cy.get(".orangehrm-directory-card-header").contains(name).click();
  }

  assertDetailCardHeader(expectedName) {
    cy.get(
      "p.oxd-text--p.orangehrm-directory-card-header.orangehrm-corporate-directory-sidebar"
    ).should("contain.text", expectedName);
  }

  clickAnyEmployeeCardAndAssertDetail() {
    cy.get(".oxd-grid-item--gutters p.orangehrm-directory-card-header")
      .first()
      .invoke("text")
      .then((clickedName) => {
        const expectedName = clickedName.replace(/\u00A0/g, " ").trim();

        // Klik elemen
        cy.get(".oxd-grid-item--gutters p.orangehrm-directory-card-header")
          .first()
          .click();

        // Bandingkan dengan text di sidebar
        cy.get(
          ".orangehrm-corporate-directory-sidebar p.orangehrm-directory-card-header"
        )
          .invoke("text")
          .then((actualText) => {
            const cleanedText = actualText.replace(/\u00A0/g, " ").trim();
            expect(cleanedText).to.eq(expectedName);
          });
      });
  }
}

export default DirectoryPage;
