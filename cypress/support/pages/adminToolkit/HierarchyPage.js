/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

export class HierarchyPage {
  inputSearch(testInput) {
    cy.get("#search").type(testInput);
  }

  checkTestSearch(textSearch) {
    cy.get("#search").should("have.value", textSearch);
  }

  clickOnUsername() {
    cy.get('tree-item[class="tree-item filtered visible"]').eq(1).click();
  }
  getCopySettingsButton() {
    return cy.get(
      'div[class="btn-group text-right"]>button[class="btn btn-warning"]'
    );
  }
  getEditButton() {
    return cy.get(
      'div[class="btn-group text-right"]>button[class="btn btn-primary"]'
    );
  }
  checkClickOnUsername(remindPassword, addSubordinate) {
    this.getCopySettingsButton().should("be.visible");
    this.getEditButton().should("be.visible");
    this.getListSubordinatedUsers()
      .get("li")
      .contains("Remind password")
      .should("contains.text", remindPassword)
      .get("li")
      .contains("Add subordinate")
      .should("contains.text", addSubordinate);
  }

  clearFilledTextButton() {
    cy.get(".clear-input").click();
  }

  searchUserHierarchyMode(testInput) {
    cy.get("#search").type(testInput);
  }

  clickOnTheThreeDotsButton() {
    cy.xpath(
      "//button[@class='dropdown-toggle']/span[@class='vertical-dots']"
    ).click();
    cy.get("#loading").should("not.exist");
  }

  clickOnCollapseAll() {
    cy.xpath("//a[contains(text(), 'Collapse All')]").click({ force: true });
  }

  getExpandedUsersInList() {
    return cy.get(".tree-menu.has-subordinates.expanded");
  }

  verifyCollapseUsers() {
    this.getExpandedUsersInList().should("not.exist");
  }

  clickOnExpandAll() {
    cy.xpath('//a[contains(text(), "Expand all")]').click();
  }

  getListSubordinatedUsers() {
    return cy.get(".subordinates.visible");
  }

  verifyExpandedUsers() {
    this.getExpandedUsersInList().first().should("exist");
    this.getListSubordinatedUsers().each((i) => {
      this.getListSubordinatedUsers()
        .get(i)
        .should("have.class", "subordinates visible");
    });
  }

  clickOnHideInactive() {
    cy.xpath("//a[contains(text(), 'Hide inactive')]").click();
  }

  clickOnShowInactive() {
    cy.xpath("//a[contains(text(), 'Show inactive')]").click();
  }

  getIsNoWorkUser() {
    return cy.xpath("//label[@class='name disabled']");
  }

  verifyHideInactiveUsers() {
    this.getIsNoWorkUser().each((i) => {
      this.getIsNoWorkUser().get(i).should("be.hidden");
      console.log(this.getIsNoWorkUser().get(i));
    });
  }
  verifyDisplayInactiveUsers() {
    this.getIsNoWorkUser().each((i) => {
      this.getIsNoWorkUser().get(i).should("have.class", "name disabled");
      console.log(this.getIsNoWorkUser().get(i));
    });
  }
}
export const hierarchyPage = new HierarchyPage();
