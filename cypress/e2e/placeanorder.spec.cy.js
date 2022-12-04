import * as p from '../fixtures/data.json';
import * as locator from '../support/e2e.js';
import {VisitnopCommerceStore,addtocart,gotocart,checkout} from '../support/commands'


describe('Go to Website', () => {
  var url= Cypress.env('baseUrl');
  it('navigates to URL!', () => {
    cy.VisitnopCommerceStore(url)
  })
  it('searches Product and adds to cart!', () => {
    cy.addtocart(p.productName)
    
  })
  it('Go to Cart!', () => {   
    cy.gotocart()
  })
  
  it('Verify that the right product has been added!', () => {
    cy.get(locator.productName).then(function($elem) {
      var Name=$elem.text()
      expect(Name).to.equal(p.productName)  
    })
  })
  it('checksout', () => {
    cy.checkout()
    
  })
})



