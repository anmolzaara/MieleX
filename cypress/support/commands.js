import * as locator from '../support/e2e.js'

Cypress.Commands.add('VisitnopCommerceStore', (url) =>
{
    cy.visit(url)
    cy.title().should('eq', 'nopCommerce demo store')
 })

 Cypress.Commands.add('addtocart', (Name) =>
{
    cy.get(locator.searchBox).clear()
    cy.get(locator.searchBox).type(Name)
    cy.get(locator.searchSubmitBtn).click()
    cy.get(locator.addtoCartBtn).click()
 })
 Cypress.Commands.add('addtocart', (Name) =>
{
    cy.get(locator.searchBox).clear()
    cy.get(locator.searchBox).type(Name)
    cy.get(locator.searchSubmitBtn).click()
    cy.get(locator.addtoCartBtn).click()
 })
 Cypress.Commands.add('gotocart', () =>
 {
    cy.get(locator.gotoCart).click()
    cy.title().should('eq','nopCommerce demo store. Shopping Cart')
  })
  Cypress.Commands.add('checkout', () =>
 {
    cy.get(locator.termsOfServiceCheck).check() 
    cy.get(locator.checkoutBtn).click()
  })
