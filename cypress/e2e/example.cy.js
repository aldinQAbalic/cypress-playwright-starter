describe('Osnovni testovi stranice', () => {

  beforeEach(() => {
    // baseUrl je definiran u cypress.config.js
    cy.visit('/');
  });

  it('provjerava naslov stranice', () => {
    cy.title().should('include', 'Example Domain');
  });

  it('provjerava da glavni naslov (h1) postoji i sadrži tekst', () => {
    cy.get('h1').should('be.visible').and('contain.text', 'Example Domain');
  });

  it('klikće na link i provjerava redirekciju', () => {
    cy.get('a').contains('More information').click();
    cy.url().should('include', 'iana.org');
  });

  it('provjerava response status stranice (bez otvaranja browsera)', () => {
    cy.request('/').its('status').should('eq', 200);
  });

});
