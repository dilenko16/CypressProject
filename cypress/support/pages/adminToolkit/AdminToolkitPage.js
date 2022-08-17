
/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />
import { basePage } from '../BasePage';



export class AdminToolkitPage extends BasePage {


// var hierarchyButton = cy.xpath("//a[contains(text(), 'Hierarchy')]");
// let dictionariesButton = cy.xpath("//a[contains(text(), 'Dictionaries')]");
// let rolesButton = cy.xpath("//a[contains(text(), 'Roles')]");
// let settingsButton = cy.xpath("//a[contains(text(), 'Settings')]");
// let servicesButton = cy.xpath("//a[contains(text(), 'Services')]");
// let clearFilledTextButton =cy.xpath(".clear-input");
// let loadingRoleList = cy.xpath("#roles-list .visible");
// let plusAddRoleButton = cy.xpath(".btn.btn-add");

clickOnSettingsButton() {
    waitLoadRoleList();
    settingsButton.click();
}

lickOnRolesButton() {
    waitLoadRoleList();
    rolesButton.click();
}

waitLoadRoleList() {
    loadingRoleList.waitUntil(exist, 15000);
}



}



export const adminToolkitPage = new AdminToolkitPage();
