/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

import { basePage } from "../../support/pages/BasePage";
import { hierarchyPage } from "../../support/pages/adminToolkit/HierarchyPage";

let loginAdmin = "Administrator",
  passwordAdmin = "Flvby%Hcf",
  URL = "https://1657610772-tt.pharmahrm.com/en",
  adminToolkit = "Administration Toolkit",
  textSearch = "TEST",
  remindPassword = "Remind password",
  addSubordinate = "Add subordinate";

beforeEach("Authorization & setup English language", () => {
  basePage.open(URL);
  basePage.authorization(loginAdmin, passwordAdmin);
  basePage.selectService(adminToolkit);
});

// 1
it("Search User Hierarchy Mode Test", () => {
  hierarchyPage.inputSearch(textSearch);
  hierarchyPage.checkTestSearch(textSearch);
  hierarchyPage.clearFilledTextButton();
});


// 2
it("Click on User from List Test", () => {
  hierarchyPage.inputSearch(textSearch);
  hierarchyPage.clickOnUsername();
  hierarchyPage.checkClickOnUsername(remindPassword, addSubordinate);
});

//3
it("Menu three dots hierarchy mode test | Collapse all", () => {
  hierarchyPage.clickOnTheThreeDotsButton();
  hierarchyPage.clickOnCollapseAll();
  hierarchyPage.verifyCollapseUsers();
});

//4
it("Menu three dots hierarchy mode test | Expand all", () => {
  hierarchyPage.clickOnTheThreeDotsButton();
  hierarchyPage.clickOnExpandAll();
  hierarchyPage.verifyExpandedUsers();
});

//5

it("Menu three dots hierarchy mode test | Hide inactive", () => {
  hierarchyPage.clickOnTheThreeDotsButton();
  hierarchyPage.clickOnHideInactive();
  hierarchyPage.verifyHideInactiveUsers();
});

//6
it("Menu three dots hierarchy mode test | Show inactive", () => {
  hierarchyPage.clickOnTheThreeDotsButton();
  hierarchyPage.clickOnHideInactive();
  hierarchyPage.clickOnTheThreeDotsButton();
  hierarchyPage.clickOnShowInactive();
  hierarchyPage.verifyDisplayInactiveUsers();
});
